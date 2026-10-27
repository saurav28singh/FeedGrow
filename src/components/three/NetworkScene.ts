import * as THREE from "three";

export interface NetworkSceneBundle {
  group: THREE.Group;
  update: (elapsed: number) => void;
  dispose: () => void;
}

export function createNetworkScene(): NetworkSceneBundle {
  const group = new THREE.Group();
  group.name = "NetworkSceneGroup";

  // Reusable materials
  const lineMat = new THREE.MeshBasicMaterial({
    color: 0x84cc16,
    transparent: true,
    opacity: 0.55,
  });

  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.05,
    roughness: 0.1,
    transmission: 0.88,
    transparent: true,
    opacity: 0.95,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  });

  function createRoundedShape(w: number, h: number, r: number) {
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
    return shape;
  }

  // ==========================================
  // 1. FLOATING PROFILE NODES (3D PUCKS WITH ORBIT RINGS)
  // ==========================================
  function createAvatarNode(colorHex: number, iconColor: string, hasOrbitRing = false) {
    const nodeGroup = new THREE.Group();

    // 3D Beveled cylinder puck
    const puckGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.08, 32);
    const puckMat = new THREE.MeshStandardMaterial({
      color: colorHex,
      metalness: 0.5,
      roughness: 0.15,
      emissive: colorHex,
      emissiveIntensity: 0.3,
    });
    const puckMesh = new THREE.Mesh(puckGeo, puckMat);
    puckMesh.rotation.x = Math.PI / 2;
    puckMesh.castShadow = true;
    nodeGroup.add(puckMesh);

    // Canvas face
    const aCanvas = document.createElement("canvas");
    aCanvas.width = 160;
    aCanvas.height = 160;
    const ac = aCanvas.getContext("2d")!;
    ac.fillStyle = iconColor;
    ac.beginPath();
    ac.arc(80, 54, 26, 0, Math.PI * 2);
    ac.fill();
    ac.beginPath();
    ac.arc(80, 146, 52, Math.PI, Math.PI * 2);
    ac.fill();

    const aTex = new THREE.CanvasTexture(aCanvas);
    const faceGeo = new THREE.CircleGeometry(0.21, 32);
    const faceMat = new THREE.MeshBasicMaterial({
      map: aTex,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceMesh.position.z = 0.046;
    nodeGroup.add(faceMesh);

    // Orbit Ring if enabled
    let orbitRing: THREE.Mesh | null = null;
    if (hasOrbitRing) {
      const ringGeo = new THREE.TorusGeometry(0.36, 0.012, 12, 40);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x84cc16,
        transparent: true,
        opacity: 0.65,
      });
      orbitRing = new THREE.Mesh(ringGeo, ringMat);
      orbitRing.rotation.x = Math.PI / 2.6;
      nodeGroup.add(orbitRing);
    }

    return { group: nodeGroup, orbitRing };
  }

  const nodeConfigs = [
    { pos: new THREE.Vector3(-2.6, 1.8, 0.5), bg: 0x064e4a, icon: "#FFFFFF", ring: true, speed: 1.1, phase: 0 },
    { pos: new THREE.Vector3(-1.1, 2.3, 0.7), bg: 0x84cc16, icon: "#FFFFFF", ring: false, speed: 1.3, phase: 1.2 },
    { pos: new THREE.Vector3(0.5, 2.1, 0.4), bg: 0xffffff, icon: "#064e4a", ring: true, speed: 1.0, phase: 2.1 },
    { pos: new THREE.Vector3(2.2, 2.4, 0.6), bg: 0x008f68, icon: "#FFFFFF", ring: true, speed: 1.2, phase: 3.4 },
    { pos: new THREE.Vector3(3.1, 1.2, 0.5), bg: 0x84cc16, icon: "#FFFFFF", ring: false, speed: 0.9, phase: 4.5 },
    { pos: new THREE.Vector3(3.0, -1.2, 0.7), bg: 0x064e4a, icon: "#FFFFFF", ring: false, speed: 1.4, phase: 5.2 },
    { pos: new THREE.Vector3(-2.7, 0.1, 0.8), bg: 0x84cc16, icon: "#FFFFFF", ring: true, speed: 1.1, phase: 2.8 },
  ];

  interface NodeItem {
    group: THREE.Group;
    orbitRing: THREE.Mesh | null;
    baseX: number;
    baseY: number;
    speed: number;
    phase: number;
  }

  const nodes: NodeItem[] = [];

  nodeConfigs.forEach((cfg) => {
    const { group: nGroup, orbitRing } = createAvatarNode(cfg.bg, cfg.icon, cfg.ring);
    nGroup.position.copy(cfg.pos);
    group.add(nGroup);
    nodes.push({
      group: nGroup,
      orbitRing,
      baseX: cfg.pos.x,
      baseY: cfg.pos.y,
      speed: cfg.speed,
      phase: cfg.phase,
    });
  });

  // Connecting network splines
  const nodeConnections = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [6, 0],
    [6, 1],
  ];

  nodeConnections.forEach(([iA, iB]) => {
    const ptA = nodes[iA].group.position;
    const ptB = nodes[iB].group.position;
    const midPt = new THREE.Vector3()
      .addVectors(ptA, ptB)
      .multiplyScalar(0.5)
      .add(new THREE.Vector3(0, 0.12, 0.08));

    const curve = new THREE.CatmullRomCurve3([ptA.clone(), midPt, ptB.clone()]);
    const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
    const tubeMesh = new THREE.Mesh(tubeGeo, lineMat);
    group.add(tubeMesh);
  });

  // Signal pulses traveling between nodes
  const pulseGeo = new THREE.SphereGeometry(0.06, 16, 16);
  const pulseMat = new THREE.MeshBasicMaterial({ color: 0x84cc16 });
  const pulses: { mesh: THREE.Mesh; from: number; to: number; progress: number; speed: number }[] = [];

  for (let p = 0; p < 7; p++) {
    const pMesh = new THREE.Mesh(pulseGeo, pulseMat);
    const conn = nodeConnections[p % nodeConnections.length];
    group.add(pMesh);
    pulses.push({
      mesh: pMesh,
      from: conn[0],
      to: conn[1],
      progress: Math.random(),
      speed: 0.007 + Math.random() * 0.005,
    });
  }

  // ==========================================
  // 2. FLOATING GLASS ANALYTICS PANELS
  // ==========================================
  function createGlassCard(
    title: string,
    metric: string,
    sub: string,
    w = 1.35,
    h = 0.95,
    isChart = false
  ) {
    const cCanvas = document.createElement("canvas");
    cCanvas.width = 540;
    cCanvas.height = 380;
    const cc = cCanvas.getContext("2d")!;

    // Rounded card background with ultra-clean frosted look
    cc.fillStyle = "rgba(255, 255, 255, 0.95)";
    cc.beginPath();
    cc.roundRect(8, 8, 524, 364, 48);
    cc.fill();

    cc.strokeStyle = "rgba(0, 143, 104, 0.25)";
    cc.lineWidth = 6;
    cc.stroke();

    // Top pill badge
    cc.fillStyle = "#E4F8F1";
    cc.beginPath();
    cc.roundRect(36, 36, 180, 36, 18);
    cc.fill();
    cc.fillStyle = "#008F68";
    cc.font = "bold 17px 'DM Sans', sans-serif";
    cc.fillText(title, 52, 60);

    // Big Metric Number
    cc.fillStyle = "#040A08";
    cc.font = "bold 52px 'DM Sans', sans-serif";
    cc.fillText(metric, 36, 136);

    // Subtitle
    cc.fillStyle = "#56615E";
    cc.font = "bold 20px 'DM Sans', sans-serif";
    cc.fillText(sub, 36, 178);

    if (isChart) {
      // Draw 3D Mini Bar Chart
      const bHeights = [35, 55, 80, 110, 145];
      const barW = 42;
      const startX = 36;
      const baseY = 320;

      bHeights.forEach((bh, i) => {
        const bx = startX + i * 92;
        const bGrad = cc.createLinearGradient(0, baseY - bh, 0, baseY);
        bGrad.addColorStop(0, "#84CC16");
        bGrad.addColorStop(1, "#008F68");
        cc.fillStyle = bGrad;
        cc.beginPath();
        cc.roundRect(bx, baseY - bh, barW, bh, 10);
        cc.fill();
      });
    } else {
      // Draw Smooth Neon Sparkline
      cc.strokeStyle = "#84CC16";
      cc.lineWidth = 6;
      cc.lineCap = "round";
      cc.beginPath();
      cc.moveTo(36, 280);
      cc.quadraticCurveTo(150, 240, 260, 270);
      cc.quadraticCurveTo(380, 220, 480, 210);
      cc.stroke();

      cc.fillStyle = "#84CC16";
      cc.beginPath();
      cc.arc(480, 210, 8, 0, Math.PI * 2);
      cc.fill();
    }

    const cTex = new THREE.CanvasTexture(cCanvas);
    cTex.minFilter = THREE.LinearFilter;
    cTex.magFilter = THREE.LinearFilter;

    const shape = createRoundedShape(w, h, 0.16);
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.06,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    });
    const mesh = new THREE.Mesh(geo, glassMat);
    mesh.castShadow = true;

    const faceGeo = new THREE.PlaneGeometry(w - 0.04, h - 0.04);
    const faceMat = new THREE.MeshBasicMaterial({
      map: cTex,
      transparent: true,
      opacity: 0.98,
      side: THREE.DoubleSide,
    });
    const faceMesh = new THREE.Mesh(faceGeo, faceMat);
    faceMesh.position.z = 0.088;
    mesh.add(faceMesh);

    return mesh;
  }

  // Panel 1: Top-Left Floating Panel (Connection Growth)
  const panel1 = createGlassCard("NETWORK REACH", "+486%", "Inbound Opportunities", 1.4, 1.0, true);
  panel1.position.set(-2.8, 1.1, 0.8);
  panel1.rotation.y = 0.18;
  panel1.rotation.x = 0.06;
  group.add(panel1);

  // Panel 2: Bottom-Left Floating Panel (Impressions)
  const panel2 = createGlassCard("VISIBILITY+", "1000%", "More Profile Impressions", 1.45, 0.95, false);
  panel2.position.set(-2.85, -0.9, 0.9);
  panel2.rotation.y = 0.2;
  panel2.rotation.x = -0.05;
  group.add(panel2);

  // Panel 3: Right Floating Panel (Authority Metric)
  const panel3 = createGlassCard("AUTHORITY", "Top 1%", "Industry Ranking", 1.35, 0.95, false);
  panel3.position.set(2.95, -0.3, 0.75);
  panel3.rotation.y = -0.18;
  panel3.rotation.x = 0.04;
  group.add(panel3);

  // Update loop
  const update = (elapsed: number) => {
    // Float nodes and spin orbit rings
    nodes.forEach((n) => {
      n.group.position.y = n.baseY + Math.sin(elapsed * n.speed + n.phase) * 0.07;
      n.group.position.x = n.baseX + Math.cos(elapsed * (n.speed * 0.6) + n.phase) * 0.035;

      if (n.orbitRing) {
        n.orbitRing.rotation.z = elapsed * 1.5;
      }
    });

    // Move signal pulses
    pulses.forEach((pulse) => {
      pulse.progress += pulse.speed;
      if (pulse.progress > 1) pulse.progress = 0;

      const posA = nodes[pulse.from].group.position;
      const posB = nodes[pulse.to].group.position;

      pulse.mesh.position.lerpVectors(posA, posB, pulse.progress);
      pulse.mesh.position.z += Math.sin(pulse.progress * Math.PI) * 0.07;
      pulse.mesh.scale.setScalar(0.75 + Math.sin(pulse.progress * Math.PI) * 0.45);
    });

    // Float glass panels
    panel1.position.y = 1.1 + Math.sin(elapsed * 1.2 + 0.5) * 0.06;
    panel1.rotation.z = Math.sin(elapsed * 0.8) * 0.015;

    panel2.position.y = -0.9 + Math.sin(elapsed * 1.1 + 2.1) * 0.05;
    panel2.rotation.z = Math.cos(elapsed * 0.7) * 0.012;

    panel3.position.y = -0.3 + Math.sin(elapsed * 1.3 + 3.4) * 0.06;
    panel3.rotation.z = -0.01 + Math.sin(elapsed * 1.0) * 0.015;
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
