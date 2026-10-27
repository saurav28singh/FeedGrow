"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const isSupported = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
      );
      if (!isSupported) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isDisposed = false;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ==========================================
    // 1. SCENE, CAMERA, RENDERER
    // ==========================================
    const width = container.clientWidth || 720;
    const height = container.clientHeight || 680;
    const aspect = width / height;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(34, aspect, 0.1, 100);
    const updateCameraDistance = (a: number) => {
      if (a < 0.6) return 16.0;
      if (a < 0.75) return 14.5;
      if (a < 1.0) return 13.2;
      return 12.0;
    };
    camera.position.set(0.05, 0.12, updateCameraDistance(aspect));

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Root Transformation Group
    const rootGroup = new THREE.Group();
    rootGroup.scale.set(0.85, 0.85, 0.85);
    rootGroup.position.set(0.05, 0.05, 0);
    scene.add(rootGroup);

    // ==========================================
    // 2. STUDIO LIGHTING
    // ==========================================
    const ambientLight = new THREE.AmbientLight(0xf0fdf8, 2.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(-6, 9, 8);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x008f68, 2.8);
    rimLight.position.set(6, 6, -3);
    scene.add(rimLight);

    const limeGlow = new THREE.PointLight(0x84cc16, 3.0, 18);
    limeGlow.position.set(3.2, 3.5, 3.0);
    scene.add(limeGlow);

    const fillLight = new THREE.DirectionalLight(0x064e4a, 1.4);
    fillLight.position.set(0, -6, 4);
    scene.add(fillLight);

    // Helper: 2D Rounded Rect Shape for Extrusions
    function createRoundedRectShape(w: number, h: number, r: number) {
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

    const textureLoader = new THREE.TextureLoader();

    // ==========================================
    // 3. GROUND SHADOW PLANE
    // ==========================================
    const floorShadowGeo = new THREE.PlaneGeometry(9.0, 4.2);
    const floorCanvas = document.createElement("canvas");
    floorCanvas.width = 512;
    floorCanvas.height = 256;
    const fCtx = floorCanvas.getContext("2d")!;
    const fGrad = fCtx.createRadialGradient(256, 128, 20, 256, 128, 240);
    fGrad.addColorStop(0, "rgba(0, 78, 60, 0.34)");
    fGrad.addColorStop(0.4, "rgba(0, 143, 104, 0.16)");
    fGrad.addColorStop(0.8, "rgba(6, 78, 74, 0.05)");
    fGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    fCtx.fillStyle = fGrad;
    fCtx.fillRect(0, 0, 512, 256);
    const floorTex = new THREE.CanvasTexture(floorCanvas);
    const floorMat = new THREE.MeshBasicMaterial({
      map: floorTex,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    const floorMesh = new THREE.Mesh(floorShadowGeo, floorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.set(0.2, -2.45, 0.3);
    rootGroup.add(floorMesh);

    // ==========================================
    // 4. CENTRAL 3D GLOSSY TILE ("in" emblem)
    // Placed behind and slightly above the man's head/right shoulder
    // ==========================================
    const centralGroup = new THREE.Group();
    const baseTileRotX = 0.16;
    const baseTileRotY = -0.28;
    const baseTileRotZ = 0.04;
    centralGroup.rotation.set(baseTileRotX, baseTileRotY, baseTileRotZ);
    centralGroup.position.set(1.35, 0.60, -0.45);
    rootGroup.add(centralGroup);

    // Central Tile Box Geometry
    const tileShape = createRoundedRectShape(3.3, 3.3, 0.65);
    const tileGeo = new THREE.ExtrudeGeometry(tileShape, {
      depth: 0.52,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 1,
      bevelSize: 0.14,
      bevelThickness: 0.14,
    });
    tileGeo.center();

    const tileMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x008f68,
      emissive: 0x004532,
      emissiveIntensity: 0.32,
      roughness: 0.11,
      metalness: 0.10,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.95,
    });

    const tileMesh = new THREE.Mesh(tileGeo, tileMaterial);
    tileMesh.castShadow = true;
    tileMesh.receiveShadow = true;
    centralGroup.add(tileMesh);

    // Raised 3D White "in" Networking Symbol
    const symbolMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.12,
      metalness: 0.05,
      emissive: 0xffffff,
      emissiveIntensity: 0.08,
    });

    const symbolGroup = new THREE.Group();
    symbolGroup.position.set(0, 0, 0.38);

    // Dot of 'i'
    const dotShape = new THREE.Shape();
    dotShape.absarc(0, 0, 0.22, 0, Math.PI * 2, false);
    const dotGeo = new THREE.ExtrudeGeometry(dotShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035,
    });
    const dotMesh = new THREE.Mesh(dotGeo, symbolMaterial);
    dotMesh.position.set(-0.72, 0.65, 0);
    dotMesh.castShadow = true;
    symbolGroup.add(dotMesh);

    // Stem of 'i'
    const stemShape = createRoundedRectShape(0.42, 1.02, 0.09);
    const stemGeo = new THREE.ExtrudeGeometry(stemShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035,
    });
    const stemMesh = new THREE.Mesh(stemGeo, symbolMaterial);
    stemMesh.position.set(-0.72, -0.22, 0);
    stemMesh.castShadow = true;
    symbolGroup.add(stemMesh);

    // 'n' Glyph (Typographic path with smooth arches)
    const nShape = new THREE.Shape();
    nShape.moveTo(-0.28, -0.74);
    nShape.lineTo(-0.28, 0.09);
    nShape.bezierCurveTo(-0.28, 0.33, 0.28, 0.33, 0.28, 0.33);
    nShape.bezierCurveTo(0.28, 0.33, 0.84, 0.33, 0.84, 0.09);
    nShape.lineTo(0.84, -0.74);
    nShape.lineTo(0.44, -0.74);
    nShape.lineTo(0.44, -0.04);
    nShape.bezierCurveTo(0.44, 0.09, 0.28, 0.09, 0.28, 0.09);
    nShape.bezierCurveTo(0.28, 0.09, 0.14, 0.09, 0.14, -0.04);
    nShape.lineTo(0.14, -0.74);
    nShape.closePath();

    const nGeo = new THREE.ExtrudeGeometry(nShape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035,
    });
    const nMesh = new THREE.Mesh(nGeo, symbolMaterial);
    nMesh.position.set(0.08, 0, 0);
    nMesh.castShadow = true;
    symbolGroup.add(nMesh);

    centralGroup.add(symbolGroup);

    // ==========================================
    // 5. 3D CURVED GROWTH ARROW (Sweeping up to top-right)
    // ==========================================
    const arrowGroup = new THREE.Group();
    rootGroup.add(arrowGroup);

    const arrowCurvePoints = [
      new THREE.Vector3(-0.3, -0.5, -0.7),
      new THREE.Vector3(0.8, 0.5, -0.5),
      new THREE.Vector3(1.8, 1.6, -0.3),
      new THREE.Vector3(2.4, 2.5, 0.0),
      new THREE.Vector3(2.9, 3.2, 0.25),
    ];
    const arrowCurve = new THREE.CatmullRomCurve3(arrowCurvePoints, false, "centripetal");

    const arrowShaftGeo = new THREE.TubeGeometry(arrowCurve, 64, 0.20, 16, false);
    const arrowMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x84cc16,
      emissive: 0x008f68,
      emissiveIntensity: 0.38,
      roughness: 0.15,
      metalness: 0.20,
      clearcoat: 0.95,
      clearcoatRoughness: 0.07,
    });
    const arrowShaftMesh = new THREE.Mesh(arrowShaftGeo, arrowMaterial);
    arrowShaftMesh.castShadow = true;
    arrowGroup.add(arrowShaftMesh);

    // Sharp 3D Arrowhead at peak
    const peakPos = arrowCurvePoints[arrowCurvePoints.length - 1];
    const tangent = arrowCurve.getTangent(1.0).normalize();

    const headGroup = new THREE.Group();
    headGroup.position.copy(peakPos);

    const headShape = new THREE.Shape();
    headShape.moveTo(0, 0.78);
    headShape.lineTo(0.58, -0.40);
    headShape.lineTo(0.20, -0.26);
    headShape.lineTo(0.20, -0.58);
    headShape.lineTo(-0.20, -0.58);
    headShape.lineTo(-0.20, -0.26);
    headShape.lineTo(-0.58, -0.40);
    headShape.closePath();

    const headGeo = new THREE.ExtrudeGeometry(headShape, {
      depth: 0.28,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    headGeo.center();

    const headMesh = new THREE.Mesh(headGeo, arrowMaterial);
    const defaultUp = new THREE.Vector3(0, 1, 0);
    const quat = new THREE.Quaternion().setFromUnitVectors(defaultUp, tangent);
    headGroup.quaternion.copy(quat);
    headGroup.add(headMesh);
    headMesh.castShadow = true;
    arrowGroup.add(headGroup);

    // ==========================================
    // 6. SEATED PROFESSIONAL CHARACTER & FURNITURE
    // High-resolution 3D character plane anchored in 3D coordinate space
    // ==========================================
    const characterGroup = new THREE.Group();
    // Positioned at lower-middle, Z = 0.40
    characterGroup.position.set(0.10, -0.80, 0.40);
    rootGroup.add(characterGroup);

    const characterGeo = new THREE.PlaneGeometry(5.7, 5.7);
    const characterTexture = textureLoader.load(
      "/images/seated_character_3d.png",
      () => {
        if (!isDisposed) renderer.render(scene, camera);
      }
    );
    characterTexture.colorSpace = THREE.SRGBColorSpace;
    characterTexture.minFilter = THREE.LinearMipmapLinearFilter;

    const characterMat = new THREE.MeshBasicMaterial({
      map: characterTexture,
      transparent: true,
      alphaTest: 0.02,
      depthWrite: true,
    });
    const characterMesh = new THREE.Mesh(characterGeo, characterMat);
    characterGroup.add(characterMesh);

    // ==========================================
    // 7. FOUR FLOATING GLASSMORPHISM ANALYTICS CARDS
    // ==========================================
    interface FloatingCard {
      group: THREE.Group;
      baseX: number;
      baseY: number;
      baseZ: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      phase: number;
      freq: number;
      amp: number;
      parallaxFactor: number;
    }
    const cardsList: FloatingCard[] = [];

    function createGlassCard(
      w: number,
      h: number,
      pos: THREE.Vector3,
      rot: THREE.Vector3,
      drawContent: (ctx: CanvasRenderingContext2D, cW: number, cH: number) => void,
      parallaxFactor: number
    ) {
      const cardGroup = new THREE.Group();
      cardGroup.position.copy(pos);
      cardGroup.rotation.set(rot.x, rot.y, rot.z);
      rootGroup.add(cardGroup);

      // Frosted Glass Beveled Slab
      const cShape = createRoundedRectShape(w, h, 0.22);
      const cGeo = new THREE.ExtrudeGeometry(cShape, {
        depth: 0.06,
        bevelEnabled: true,
        bevelSegments: 4,
        steps: 1,
        bevelSize: 0.02,
        bevelThickness: 0.02,
      });
      cGeo.center();

      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.90,
        roughness: 0.12,
        metalness: 0.05,
        clearcoat: 0.7,
        clearcoatRoughness: 0.08,
        transmission: 0.20,
      });
      const glassMesh = new THREE.Mesh(cGeo, glassMat);
      glassMesh.castShadow = true;
      glassMesh.receiveShadow = true;
      cardGroup.add(glassMesh);

      // Front Vector Canvas Plate
      const canvasW = 1024;
      const canvasH = Math.round((1024 * h) / w);
      const texCanvas = document.createElement("canvas");
      texCanvas.width = canvasW;
      texCanvas.height = canvasH;
      const ctx = texCanvas.getContext("2d")!;

      ctx.clearRect(0, 0, canvasW, canvasH);
      const grad = ctx.createLinearGradient(0, 0, canvasW, canvasH);
      grad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
      grad.addColorStop(1, "rgba(240, 253, 248, 0.95)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(0, 0, canvasW, canvasH, 48);
      ctx.fill();

      ctx.strokeStyle = "rgba(0, 143, 104, 0.22)";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.roundRect(6, 6, canvasW - 12, canvasH - 12, 44);
      ctx.stroke();

      drawContent(ctx, canvasW, canvasH);

      const texture = new THREE.CanvasTexture(texCanvas);
      texture.generateMipmaps = true;
      texture.needsUpdate = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;

      const plateGeo = new THREE.ShapeGeometry(cShape);
      const posAttr = plateGeo.attributes.position;
      const uvs = new Float32Array(posAttr.count * 2);
      for (let i = 0; i < posAttr.count; i++) {
        const u = (posAttr.getX(i) + w / 2) / w;
        const v = (posAttr.getY(i) + h / 2) / h;
        uvs[i * 2] = u;
        uvs[i * 2 + 1] = v;
      }
      plateGeo.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

      const plateMat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.99,
        depthWrite: true,
      });
      const plateMesh = new THREE.Mesh(plateGeo, plateMat);
      plateMesh.position.set(0, 0, 0.052);
      plateMesh.renderOrder = 2;
      cardGroup.add(plateMesh);

      // Drop shadow plane behind
      const shadowGeo = new THREE.PlaneGeometry(w * 1.25, h * 1.25);
      const sCanvas = document.createElement("canvas");
      sCanvas.width = 128;
      sCanvas.height = 128;
      const sCtx = sCanvas.getContext("2d")!;
      const sGrad = sCtx.createRadialGradient(64, 64, 10, 64, 64, 60);
      sGrad.addColorStop(0, "rgba(6, 78, 74, 0.22)");
      sGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      sCtx.fillStyle = sGrad;
      sCtx.fillRect(0, 0, 128, 128);
      const sTex = new THREE.CanvasTexture(sCanvas);
      const sMat = new THREE.MeshBasicMaterial({
        map: sTex,
        transparent: true,
        opacity: 0.70,
      });
      const sMesh = new THREE.Mesh(shadowGeo, sMat);
      sMesh.position.set(0, -0.06, -0.08);
      cardGroup.add(sMesh);

      cardsList.push({
        group: cardGroup,
        baseX: pos.x,
        baseY: pos.y,
        baseZ: pos.z,
        rotX: rot.x,
        rotY: rot.y,
        rotZ: rot.z,
        phase: Math.random() * Math.PI * 2,
        freq: 0.8 + Math.random() * 0.4,
        amp: 0.07 + Math.random() * 0.03,
        parallaxFactor,
      });

      return cardGroup;
    }

    // --- CARD 1: FOLLOWERS (+482%) Top-Left ---
    createGlassCard(
      2.25,
      1.70,
      new THREE.Vector3(-2.40, 1.65, 0.90),
      new THREE.Vector3(0.10, 0.14, -0.04),
      (ctx) => {
        ctx.fillStyle = "#556461";
        ctx.font = "600 48px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("Followers", 85, 140);

        ctx.fillStyle = "#040A08";
        ctx.font = "800 108px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("+482%", 85, 275);

        ctx.fillStyle = "#008F68";
        ctx.font = "700 52px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("↗ +6.3%", 85, 370);

        // 5 Ascending Green Bars with Glossy Highlights
        const barStartX = 510;
        const barBaseY = 620;
        const barWidth = 72;
        const barGap = 24;
        const barHeights = [130, 210, 300, 390, 480];

        for (let i = 0; i < 5; i++) {
          const bx = barStartX + i * (barWidth + barGap);
          const bh = barHeights[i];
          const by = barBaseY - bh;

          const barGrad = ctx.createLinearGradient(bx, by, bx, barBaseY);
          barGrad.addColorStop(0, "#84CC16");
          barGrad.addColorStop(1, "#008F68");
          ctx.fillStyle = barGrad;
          ctx.beginPath();
          ctx.roundRect(bx, by, barWidth, bh, 16);
          ctx.fill();

          ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
          ctx.beginPath();
          ctx.roundRect(bx + 4, by + 4, barWidth - 8, 14, 7);
          ctx.fill();
        }
      },
      1.2
    );

    // --- CARD 2: PROFILE IMPRESSIONS (1.2M+) Top-Right ---
    createGlassCard(
      2.30,
      1.65,
      new THREE.Vector3(3.10, 1.25, 0.95),
      new THREE.Vector3(0.05, -0.16, 0.04),
      (ctx) => {
        ctx.fillStyle = "#556461";
        ctx.font = "600 48px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("Profile Impressions", 75, 140);

        ctx.fillStyle = "#008F68";
        ctx.font = "800 106px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("↗ 1.2M+", 75, 275);

        ctx.fillStyle = "#008F68";
        ctx.font = "700 52px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("+62%", 75, 365);

        // Wavy Green Line Chart with Fill
        ctx.strokeStyle = "#008F68";
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(70, 560);
        ctx.bezierCurveTo(280, 570, 520, 480, 720, 510);
        ctx.bezierCurveTo(810, 525, 890, 450, 950, 410);
        ctx.stroke();

        ctx.lineTo(950, 640);
        ctx.lineTo(70, 640);
        ctx.closePath();
        const waveGrad = ctx.createLinearGradient(0, 410, 0, 640);
        waveGrad.addColorStop(0, "rgba(0, 143, 104, 0.25)");
        waveGrad.addColorStop(1, "rgba(0, 143, 104, 0)");
        ctx.fillStyle = waveGrad;
        ctx.fill();
      },
      1.15
    );

    // --- CARD 3: CONNECTIONS (8.2K) Bottom-Left ---
    createGlassCard(
      2.35,
      1.45,
      new THREE.Vector3(-2.60, -0.85, 1.20),
      new THREE.Vector3(-0.06, 0.10, -0.02),
      (ctx) => {
        const drawAvatarIcon = (x: number, y: number, r: number, fill: string) => {
          ctx.fillStyle = fill;
          ctx.beginPath();
          ctx.arc(x, y - r * 0.45, r * 0.45, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(x, y + r * 0.7, r * 0.7, Math.PI * 1.1, Math.PI * 1.9);
          ctx.fill();
        };

        drawAvatarIcon(115, 310, 48, "#064E4A");
        drawAvatarIcon(185, 310, 48, "#84CC16");
        drawAvatarIcon(150, 260, 58, "#008F68");

        const textX = 300;
        ctx.fillStyle = "#556461";
        ctx.font = "600 46px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("Connections", textX, 170);

        ctx.fillStyle = "#040A08";
        ctx.font = "800 110px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("8.2K", textX, 310);

        ctx.fillStyle = "#008F68";
        ctx.font = "700 50px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("↗ +37%", textX, 400);

        // Subtle green sparkline
        ctx.strokeStyle = "#84CC16";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(80, 520);
        ctx.bezierCurveTo(320, 550, 600, 460, 940, 490);
        ctx.stroke();
      },
      1.3
    );

    // --- CARD 4: OPPORTUNITIES (+3X) Bottom-Right ---
    createGlassCard(
      2.35,
      1.45,
      new THREE.Vector3(3.05, -0.85, 1.15),
      new THREE.Vector3(-0.05, -0.12, 0.03),
      (ctx) => {
        // Green Briefcase Icon
        ctx.fillStyle = "#008F68";
        ctx.beginPath();
        ctx.roundRect(75, 200, 160, 130, 22);
        ctx.fill();

        ctx.strokeStyle = "#008F68";
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.roundRect(110, 160, 90, 55, 14);
        ctx.stroke();

        ctx.fillStyle = "#84CC16";
        ctx.fillRect(142, 232, 26, 34);

        const textX = 290;
        ctx.fillStyle = "#556461";
        ctx.font = "600 46px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("Opportunities", textX, 170);

        ctx.fillStyle = "#040A08";
        ctx.font = "800 110px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("+3X", textX, 310);

        ctx.fillStyle = "#008F68";
        ctx.font = "600 46px 'Plus Jakarta Sans', sans-serif";
        ctx.fillText("More Chances", textX, 400);

        // Subtle green wave
        ctx.strokeStyle = "#008F68";
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(80, 510);
        ctx.bezierCurveTo(300, 540, 620, 460, 940, 480);
        ctx.stroke();
      },
      1.25
    );

    // ==========================================
    // 8. FLOATING NETWORK NODES & ORBITAL GLOW LINES
    // ==========================================
    const networkGroup = new THREE.Group();
    rootGroup.add(networkGroup);

    const orbitCurve1 = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-2.8, 0.4, 0.6),
        new THREE.Vector3(-1.4, 2.8, -0.2),
        new THREE.Vector3(1.8, 2.6, 0.3),
        new THREE.Vector3(3.2, -0.2, 0.3),
        new THREE.Vector3(0.8, -1.8, 0.8),
        new THREE.Vector3(-2.8, 0.4, 0.6),
      ],
      true,
      "centripetal"
    );

    const orbitTubeGeo1 = new THREE.TubeGeometry(orbitCurve1, 80, 0.018, 12, true);
    const orbitMat1 = new THREE.MeshBasicMaterial({
      color: 0x84cc16,
      transparent: true,
      opacity: 0.65,
    });
    const orbitMesh1 = new THREE.Mesh(orbitTubeGeo1, orbitMat1);
    networkGroup.add(orbitMesh1);

    const orbitCurve2 = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(-2.4, 1.8, -0.5),
        new THREE.Vector3(0.7, 3.1, 0.2),
        new THREE.Vector3(2.8, 1.4, -0.3),
        new THREE.Vector3(1.4, -1.2, 0.6),
        new THREE.Vector3(-1.8, -1.0, 0.5),
        new THREE.Vector3(-2.4, 1.8, -0.5),
      ],
      true,
      "centripetal"
    );
    const orbitTubeGeo2 = new THREE.TubeGeometry(orbitCurve2, 80, 0.014, 12, true);
    const orbitMat2 = new THREE.MeshBasicMaterial({
      color: 0x008f68,
      transparent: true,
      opacity: 0.48,
    });
    const orbitMesh2 = new THREE.Mesh(orbitTubeGeo2, orbitMat2);
    networkGroup.add(orbitMesh2);

    // Profile Avatar Puck Nodes
    interface AvatarNode {
      group: THREE.Group;
      basePos: THREE.Vector3;
      phase: number;
    }
    const avatarNodes: AvatarNode[] = [];

    const nodeImages = [
      "/images/revamp_img/followers_img2.png", // Top Center
      "/images/revamp_img/followers_img1.png", // Left
      "/images/revamp_img/PreetiBhagat.jpeg",  // Top Right
      "/images/revamp_img/SachinSeth.jpeg",    // Middle Right
      "/images/revamp_img/followers_img1.png", // Far Left
    ];

    const nodePositions = [
      new THREE.Vector3(0.7, 2.8, 0.45),
      new THREE.Vector3(-2.8, 0.35, 0.60),
      new THREE.Vector3(3.1, 2.5, 0.40),
      new THREE.Vector3(2.5, 0.15, 0.55),
      new THREE.Vector3(-3.4, 1.2, 0.50),
    ];

    nodePositions.forEach((pos, idx) => {
      const nGroup = new THREE.Group();
      nGroup.position.copy(pos);

      const puckGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.08, 32);
      const puckMat = new THREE.MeshStandardMaterial({
        color: 0x064e4a,
        roughness: 0.15,
        metalness: 0.4,
      });
      const puckMesh = new THREE.Mesh(puckGeo, puckMat);
      puckMesh.rotation.x = Math.PI / 2;
      nGroup.add(puckMesh);

      const aTex = textureLoader.load(nodeImages[idx % nodeImages.length]);
      aTex.colorSpace = THREE.SRGBColorSpace;
      const faceGeo = new THREE.CircleGeometry(0.26, 32);
      const faceMat = new THREE.MeshBasicMaterial({
        map: aTex,
      });
      const faceMesh = new THREE.Mesh(faceGeo, faceMat);
      faceMesh.position.set(0, 0, 0.045);
      nGroup.add(faceMesh);

      const rimGeo = new THREE.TorusGeometry(0.30, 0.016, 12, 32);
      const rimMat = new THREE.MeshBasicMaterial({
        color: idx % 2 === 0 ? 0x84cc16 : 0x008f68,
        transparent: true,
        opacity: 0.85,
      });
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      nGroup.add(rimMesh);

      networkGroup.add(nGroup);
      avatarNodes.push({
        group: nGroup,
        basePos: pos.clone(),
        phase: idx * 1.2,
      });
    });

    // ==========================================
    // 9. GLOSSY GREEN ACCENT SPHERES
    // ==========================================
    interface FloatingSphere {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      freq: number;
      amp: number;
      phase: number;
    }
    const spheresList: FloatingSphere[] = [];

    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x008f68,
      emissive: 0x004e38,
      emissiveIntensity: 0.32,
      roughness: 0.08,
      metalness: 0.35,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 0.95,
    });

    const sphereConfigs = [
      { pos: new THREE.Vector3(-1.4, -1.8, 2.1), r: 0.36, amp: 0.10 }, // Foreground large shiny sphere
      { pos: new THREE.Vector3(-0.9, 3.2, 0.2), r: 0.20, amp: 0.07 },
      { pos: new THREE.Vector3(1.6, 3.3, -0.3), r: 0.22, amp: 0.08 },
      { pos: new THREE.Vector3(3.6, 2.0, 0.6), r: 0.24, amp: 0.08 },
      { pos: new THREE.Vector3(3.8, -0.4, 0.4), r: 0.20, amp: 0.06 },
    ];

    sphereConfigs.forEach((cfg, i) => {
      const sGeo = new THREE.SphereGeometry(cfg.r, 32, 32);
      const sMesh = new THREE.Mesh(sGeo, sphereMaterial);
      sMesh.position.copy(cfg.pos);
      sMesh.castShadow = true;
      rootGroup.add(sMesh);

      spheresList.push({
        mesh: sMesh,
        basePos: cfg.pos.clone(),
        freq: 0.7 + i * 0.15,
        amp: cfg.amp,
        phase: i * 0.85,
      });
    });

    // ==========================================
    // 10. POINTER TRACKING & INTERACTIVE PARALLAX
    // ==========================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetMouseX = (x - 0.5) * 2;
      targetMouseY = (y - 0.5) * 2;
    };

    const handlePointerLeave = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    window.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mouseleave", handlePointerLeave);

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      const newAspect = w / h;
      camera.aspect = newAspect;
      camera.position.z = updateCameraDistance(newAspect);
      camera.updateProjectionMatrix();

      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener("resize", handleResize);

    // ==========================================
    // 11. ANIMATION LOOP
    // ==========================================
    const clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      const motionScale = prefersReducedMotion ? 0.1 : 1.0;

      // Gentle root parallax
      rootGroup.rotation.y = currentMouseX * 0.08 * motionScale;
      rootGroup.rotation.x = -currentMouseY * 0.06 * motionScale;

      // Central tile floating
      const tileHover = Math.sin(elapsedTime * 1.2) * 0.04 * motionScale;
      centralGroup.position.y = 0.60 + tileHover;
      centralGroup.rotation.x = baseTileRotX + currentMouseY * 0.06 * motionScale;
      centralGroup.rotation.y = baseTileRotY + currentMouseX * 0.08 * motionScale;

      // Seated character breathing / parallax
      characterGroup.position.y = -0.80 + Math.sin(elapsedTime * 1.0) * 0.02 * motionScale;
      characterGroup.position.x = 0.10 + currentMouseX * 0.04 * motionScale;

      // Floating cards multi-plane parallax & wave
      cardsList.forEach((c) => {
        const hoverY = Math.sin(elapsedTime * c.freq + c.phase) * c.amp * motionScale;
        const hoverX = Math.cos(elapsedTime * (c.freq * 0.8) + c.phase) * (c.amp * 0.5) * motionScale;

        c.group.position.y = c.baseY + hoverY - currentMouseY * 0.18 * c.parallaxFactor * motionScale;
        c.group.position.x = c.baseX + hoverX + currentMouseX * 0.20 * c.parallaxFactor * motionScale;
      });

      // Growth arrow floating
      arrowGroup.position.y = Math.sin(elapsedTime * 1.1 + 0.4) * 0.04 * motionScale;

      // Avatar nodes hover
      avatarNodes.forEach((node) => {
        const hover = Math.sin(elapsedTime * 1.4 + node.phase) * 0.04 * motionScale;
        node.group.position.y = node.basePos.y + hover;
      });

      // Emerald spheres float and rotate
      spheresList.forEach((s) => {
        const hover = Math.sin(elapsedTime * s.freq + s.phase) * s.amp * motionScale;
        s.mesh.position.y = s.basePos.y + hover;
        s.mesh.rotation.y += 0.005 * motionScale;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("resize", handleResize);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (obj.geometry) obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((mat) => mat.dispose());
          } else if (obj.material) {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-[440px] sm:h-[520px] md:h-[600px] flex items-center justify-center rounded-3xl bg-gradient-to-br from-[#F0FDF8] to-white border border-[#008F68]/20 p-8 text-center shadow-lg">
        <div>
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#008F68] text-white flex items-center justify-center font-bold text-2xl shadow-md">
            in
          </div>
          <h3 className="text-xl font-bold text-[#040A08]">FeedGrow 3D Experience</h3>
          <p className="text-sm text-[#556461] mt-2 max-w-sm">
            Experience managed LinkedIn visibility, executive thought leadership, and guaranteed growth.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[320px] flex items-center justify-center select-none overflow-hidden lg:overflow-visible"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-grab active:cursor-grabbing outline-none"
      />
    </div>
  );
}
