import * as THREE from "three";

export interface GrowthVisualizationBundle {
  group: THREE.Group;
  update: (elapsed: number) => void;
  dispose: () => void;
}

export function createGrowthVisualization(): GrowthVisualizationBundle {
  const group = new THREE.Group();
  group.name = "GrowthVisualizationGroup";

  // Trajectory points defining an upward curving 3D growth path
  const curvePoints = [
    new THREE.Vector3(-2.4, -1.6, 0.3),
    new THREE.Vector3(-1.4, -1.2, 0.6),
    new THREE.Vector3(-0.2, -0.4, 0.9),
    new THREE.Vector3(1.1, 0.5, 1.0),
    new THREE.Vector3(2.1, 1.3, 1.1),
    new THREE.Vector3(2.7, 1.85, 1.2),
  ];

  const curve = new THREE.CatmullRomCurve3(curvePoints, false, "centripetal");

  // 1. Primary 3D Growth Tube (Emerald to Lime gradient feel)
  const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.045, 16, false);
  const tubeMat = new THREE.MeshStandardMaterial({
    color: 0x008f68,
    metalness: 0.6,
    roughness: 0.2,
    emissive: 0x008f68,
    emissiveIntensity: 0.45,
  });
  const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
  tubeMesh.castShadow = true;
  group.add(tubeMesh);

  // 2. Secondary Glowing Inner Core Tube (Bright Lime neon)
  const innerTubeGeo = new THREE.TubeGeometry(curve, 64, 0.02, 12, false);
  const innerTubeMat = new THREE.MeshBasicMaterial({
    color: 0x84cc16,
    transparent: true,
    opacity: 0.85,
  });
  const innerTubeMesh = new THREE.Mesh(innerTubeGeo, innerTubeMat);
  group.add(innerTubeMesh);

  // 3. 3D Arrowhead at peak
  const peakPoint = curvePoints[curvePoints.length - 1];
  const tangent = curve.getTangent(1.0).normalize();

  const arrowGroup = new THREE.Group();
  arrowGroup.position.copy(peakPoint);

  // Align arrowhead with curve tangent
  const up = new THREE.Vector3(0, 1, 0);
  const quat = new THREE.Quaternion().setFromUnitVectors(up, tangent);
  arrowGroup.quaternion.copy(quat);

  // 3D Cone Arrowhead
  const coneGeo = new THREE.ConeGeometry(0.14, 0.32, 24);
  const coneMat = new THREE.MeshStandardMaterial({
    color: 0x84cc16,
    metalness: 0.7,
    roughness: 0.15,
    emissive: 0x84cc16,
    emissiveIntensity: 0.6,
  });
  const coneMesh = new THREE.Mesh(coneGeo, coneMat);
  coneMesh.castShadow = true;
  arrowGroup.add(coneMesh);

  // Pulsing Halo Ring around arrowhead
  const haloGeo = new THREE.TorusGeometry(0.24, 0.015, 12, 36);
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0x84cc16,
    transparent: true,
    opacity: 0.7,
  });
  const haloMesh = new THREE.Mesh(haloGeo, haloMat);
  haloMesh.rotation.x = Math.PI / 2;
  arrowGroup.add(haloMesh);

  group.add(arrowGroup);

  // 4. Milestone Growth Beads along curve
  const beadCount = 5;
  const beadGeo = new THREE.SphereGeometry(0.065, 16, 16);
  const beadMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.3,
    roughness: 0.1,
    emissive: 0x008f68,
    emissiveIntensity: 0.4,
  });

  const milestoneBeads: THREE.Mesh[] = [];
  for (let i = 0; i < beadCount; i++) {
    const t = 0.15 + (i / (beadCount - 1)) * 0.75;
    const pt = curve.getPoint(t);
    const bead = new THREE.Mesh(beadGeo, beadMat);
    bead.position.copy(pt);
    bead.castShadow = true;
    group.add(bead);
    milestoneBeads.push(bead);
  }

  // 5. Traveling Signal Photons (Pulsing energy packets that flow up the arrow)
  const photonCount = 3;
  const photonGeo = new THREE.SphereGeometry(0.075, 16, 16);
  const photonMat = new THREE.MeshBasicMaterial({
    color: 0x84cc16,
    transparent: true,
    opacity: 0.95,
  });

  interface Photon {
    mesh: THREE.Mesh;
    progress: number;
    speed: number;
  }

  const photons: Photon[] = [];
  for (let p = 0; p < photonCount; p++) {
    const pMesh = new THREE.Mesh(photonGeo, photonMat);
    group.add(pMesh);
    photons.push({
      mesh: pMesh,
      progress: p / photonCount,
      speed: 0.007 + Math.random() * 0.003,
    });
  }

  // Update animation loop
  const update = (elapsed: number) => {
    // Halo pulse around the arrowhead
    const haloScale = 1.0 + Math.sin(elapsed * 4) * 0.22;
    haloMesh.scale.setScalar(haloScale);
    haloMat.opacity = Math.max(0.2, 0.8 - (haloScale - 1.0) * 2);

    // Pulse arrowhead emissive intensity
    coneMat.emissiveIntensity = 0.5 + Math.sin(elapsed * 3) * 0.3;

    // Milestone beads gentle pulse
    milestoneBeads.forEach((bead, idx) => {
      const s = 1.0 + Math.sin(elapsed * 2.5 + idx * 0.8) * 0.15;
      bead.scale.setScalar(s);
    });

    // Animate traveling photons along the 3D curve
    photons.forEach((photon) => {
      photon.progress += photon.speed;
      if (photon.progress > 1.0) {
        photon.progress = 0;
      }

      const pt = curve.getPoint(photon.progress);
      photon.mesh.position.copy(pt);

      // Scale up at mid-trajectory, scale down near ends
      const scaleSin = Math.sin(photon.progress * Math.PI);
      photon.mesh.scale.setScalar(0.7 + scaleSin * 0.6);
    });
  };

  const dispose = () => {
    group.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });
  };

  return { group, update, dispose };
}
