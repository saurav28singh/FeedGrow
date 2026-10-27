import * as THREE from "three";

export interface FloatingObjectsBundle {
  group: THREE.Group;
  update: (elapsed: number) => void;
  dispose: () => void;
}

export function createFloatingObjects(): FloatingObjectsBundle {
  const group = new THREE.Group();
  group.name = "FloatingObjectsGroup";

  // Reusable materials
  // 1. Emerald metallic material with high specularity
  const emeraldMetallicMat = new THREE.MeshStandardMaterial({
    color: 0x008f68,
    metalness: 0.85,
    roughness: 0.18,
    emissive: 0x004e38,
    emissiveIntensity: 0.35,
  });

  // 2. Bright lime neon metallic
  const limeMetallicMat = new THREE.MeshStandardMaterial({
    color: 0x84cc16,
    metalness: 0.75,
    roughness: 0.22,
    emissive: 0x4d7c0f,
    emissiveIntensity: 0.4,
  });

  // 3. Frosted physical glass material
  const frostedGlassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.05,
    roughness: 0.12,
    transmission: 0.92,
    transparent: true,
    opacity: 0.95,
    clearcoat: 1.0,
    clearcoatRoughness: 0.08,
    reflectivity: 0.95,
    ior: 1.5,
  });

  // 4. Dark teal ceramic lacquer
  const darkTealMat = new THREE.MeshStandardMaterial({
    color: 0x064e4a,
    metalness: 0.5,
    roughness: 0.15,
    emissive: 0x032725,
    emissiveIntensity: 0.2,
  });

  // 5. Gold / Brass accent ring
  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.9,
    roughness: 0.15,
    emissive: 0x78350f,
    emissiveIntensity: 0.3,
  });

  // Helper for rounded beveled cube
  function createRoundedBox(w: number, h: number, d: number, r: number) {
    const shape = new THREE.Shape();
    const hw = w / 2;
    const hh = h / 2;
    shape.moveTo(-hw + r, -hh);
    shape.lineTo(hw - r, -hh);
    shape.quadraticCurveTo(hw, -hh, hw, -hh + r);
    shape.lineTo(hw, hh - r);
    shape.quadraticCurveTo(hw, hh, hw - r, hh);
    shape.lineTo(-hw + r, hh);
    shape.quadraticCurveTo(-hw, hh, -hw, hh - r);
    shape.lineTo(-hw, -hh + r);
    shape.quadraticCurveTo(-hw, -hh, -hw + r, -hh);

    return new THREE.ExtrudeGeometry(shape, {
      depth: d,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: r * 0.4,
      bevelThickness: r * 0.4,
    });
  }

  interface FloatingItem {
    mesh: THREE.Object3D;
    basePos: THREE.Vector3;
    rotSpeed: THREE.Vector3;
    floatSpeed: number;
    floatAmp: number;
    phase: number;
  }

  const items: FloatingItem[] = [];

  // --- Object 1: 3D Emerald Metallic Torus (Upper Left Foreground) ---
  const torusGeo1 = new THREE.TorusGeometry(0.38, 0.09, 20, 64);
  const torusMesh1 = new THREE.Mesh(torusGeo1, emeraldMetallicMat);
  torusMesh1.castShadow = true;
  group.add(torusMesh1);
  items.push({
    mesh: torusMesh1,
    basePos: new THREE.Vector3(-3.2, 2.2, 1.2),
    rotSpeed: new THREE.Vector3(0.6, 0.8, 0.3),
    floatSpeed: 1.2,
    floatAmp: 0.12,
    phase: 0,
  });

  // --- Object 2: Frosted Glass Sphere with Inner Glowing Lime Core (Upper Right) ---
  const sphereGroup = new THREE.Group();
  const sphereOuterGeo = new THREE.SphereGeometry(0.34, 32, 32);
  const sphereOuterMesh = new THREE.Mesh(sphereOuterGeo, frostedGlassMat);
  sphereOuterMesh.castShadow = true;
  sphereGroup.add(sphereOuterMesh);

  const sphereInnerGeo = new THREE.SphereGeometry(0.14, 24, 24);
  const sphereInnerMat = new THREE.MeshBasicMaterial({ color: 0x84cc16 });
  const sphereInnerMesh = new THREE.Mesh(sphereInnerGeo, sphereInnerMat);
  sphereGroup.add(sphereInnerMesh);

  // Concentric orbital wire ring around sphere (inspired by reference Aura orbital ring)
  const sphereRingGeo = new THREE.TorusGeometry(0.48, 0.012, 12, 48);
  const sphereRingMat = new THREE.MeshBasicMaterial({
    color: 0x84cc16,
    transparent: true,
    opacity: 0.65,
  });
  const sphereRingMesh = new THREE.Mesh(sphereRingGeo, sphereRingMat);
  sphereRingMesh.rotation.x = Math.PI / 3;
  sphereGroup.add(sphereRingMesh);

  group.add(sphereGroup);
  items.push({
    mesh: sphereGroup,
    basePos: new THREE.Vector3(3.4, 2.3, 0.8),
    rotSpeed: new THREE.Vector3(0.4, 0.9, 0.2),
    floatSpeed: 1.0,
    floatAmp: 0.14,
    phase: 1.5,
  });

  // --- Object 3: 3D Chamfered Rounded Cube in Dark Teal (Lower Left) ---
  const boxGeo = createRoundedBox(0.42, 0.42, 0.42, 0.06);
  boxGeo.center();
  const boxMesh = new THREE.Mesh(boxGeo, darkTealMat);
  boxMesh.castShadow = true;
  group.add(boxMesh);
  items.push({
    mesh: boxMesh,
    basePos: new THREE.Vector3(-3.4, -1.5, 0.9),
    rotSpeed: new THREE.Vector3(0.5, 0.7, 0.4),
    floatSpeed: 0.9,
    floatAmp: 0.1,
    phase: 2.7,
  });

  // --- Object 4: Golden/Amber Metallic Torus (Deep Right Background) ---
  const torusGeo2 = new THREE.TorusGeometry(0.28, 0.05, 16, 48);
  const torusMesh2 = new THREE.Mesh(torusGeo2, goldMat);
  torusMesh2.castShadow = true;
  group.add(torusMesh2);
  items.push({
    mesh: torusMesh2,
    basePos: new THREE.Vector3(3.6, -0.6, -0.4),
    rotSpeed: new THREE.Vector3(0.7, 0.5, 0.6),
    floatSpeed: 1.4,
    floatAmp: 0.09,
    phase: 3.8,
  });

  // --- Object 5: 3D Faceted Diamond / Octahedron in Lime Metallic (Center Top Background) ---
  const octaGeo = new THREE.OctahedronGeometry(0.26);
  const octaMesh = new THREE.Mesh(octaGeo, limeMetallicMat);
  octaMesh.castShadow = true;
  group.add(octaMesh);
  items.push({
    mesh: octaMesh,
    basePos: new THREE.Vector3(0.6, 2.6, -0.8),
    rotSpeed: new THREE.Vector3(0.8, 1.1, 0.5),
    floatSpeed: 1.1,
    floatAmp: 0.11,
    phase: 4.6,
  });

  // --- Object 6: Floating Sparkle / Star Geometries (Tiny 4-point abstract stars) ---
  const starGroup = new THREE.Group();
  for (let s = 0; s < 4; s++) {
    const sGeo = new THREE.OctahedronGeometry(0.06);
    const sMat = new THREE.MeshBasicMaterial({ color: s % 2 === 0 ? 0x84cc16 : 0x008f68 });
    const sMesh = new THREE.Mesh(sGeo, sMat);
    const angle = (s / 4) * Math.PI * 2;
    sMesh.position.set(Math.cos(angle) * 0.9, Math.sin(angle) * 0.6, (Math.random() - 0.5) * 0.4);
    starGroup.add(sMesh);
  }
  group.add(starGroup);
  items.push({
    mesh: starGroup,
    basePos: new THREE.Vector3(-1.8, -2.1, 0.4),
    rotSpeed: new THREE.Vector3(0.3, 0.4, 0.5),
    floatSpeed: 0.8,
    floatAmp: 0.07,
    phase: 5.3,
  });

  // Animation update function
  const update = (elapsed: number) => {
    items.forEach((item) => {
      // Floating motion
      item.mesh.position.y = item.basePos.y + Math.sin(elapsed * item.floatSpeed + item.phase) * item.floatAmp;
      item.mesh.position.x = item.basePos.x + Math.cos(elapsed * (item.floatSpeed * 0.7) + item.phase) * (item.floatAmp * 0.4);

      // Rotation
      item.mesh.rotation.x += item.rotSpeed.x * 0.012;
      item.mesh.rotation.y += item.rotSpeed.y * 0.016;
      item.mesh.rotation.z += item.rotSpeed.z * 0.01;
    });

    // Pulse the outer ring of the glass sphere
    sphereRingMesh.rotation.z = elapsed * 1.2;
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
