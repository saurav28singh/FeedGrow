"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function WhyFeedGrow3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
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

    let animId: number;
    let isDisposed = false;

    const width = container.clientWidth || 440;
    const height = container.clientHeight || 420;
    const aspect = width / height;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 50);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x008f68, 2.2);
    dirLight.position.set(4, 5, 4);
    scene.add(dirLight);

    const limeLight = new THREE.PointLight(0x84cc16, 2.5, 12);
    limeLight.position.set(-3, -2, 3);
    scene.add(limeLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Core Sphere (Frosted Emerald Glass)
    const coreGeo = new THREE.SphereGeometry(0.85, 32, 32);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0x008f68,
      metalness: 0.2,
      roughness: 0.1,
      transmission: 0.75,
      transparent: true,
      opacity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner glowing core
    const innerGeo = new THREE.SphereGeometry(0.42, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x84cc16 });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // 2. Orbital Rings
    const ring1Geo = new THREE.TorusGeometry(1.4, 0.024, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x008f68,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.7, 0.02, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x84cc16,
      metalness: 0.7,
      roughness: 0.25,
      transparent: true,
      opacity: 0.85,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    group.add(ring2);

    // 3. Orbiting Profile Nodes
    function createProfileNode(iconText: string, color: number) {
      const pGroup = new THREE.Group();
      const pGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.08, 24);
      const pMat = new THREE.MeshStandardMaterial({
        color,
        metalness: 0.6,
        roughness: 0.2,
      });
      const pMesh = new THREE.Mesh(pGeo, pMat);
      pMesh.rotation.x = Math.PI / 2;
      pGroup.add(pMesh);

      const pCanvas = document.createElement("canvas");
      pCanvas.width = 128;
      pCanvas.height = 128;
      const pc = pCanvas.getContext("2d")!;
      pc.fillStyle = "#FFFFFF";
      pc.beginPath();
      pc.arc(64, 46, 20, 0, Math.PI * 2);
      pc.fill();
      pc.beginPath();
      pc.arc(64, 116, 40, Math.PI, Math.PI * 2);
      pc.fill();

      const pTex = new THREE.CanvasTexture(pCanvas);
      const faceGeo = new THREE.CircleGeometry(0.2, 24);
      const faceMat = new THREE.MeshBasicMaterial({ map: pTex, transparent: true });
      const faceMesh = new THREE.Mesh(faceGeo, faceMat);
      faceMesh.position.z = 0.045;
      pGroup.add(faceMesh);

      return pGroup;
    }

    const node1 = createProfileNode("VP Growth", 0x064e4a);
    const node2 = createProfileNode("Director", 0x008f68);
    const node3 = createProfileNode("Lead Eng", 0x84cc16);
    group.add(node1);
    group.add(node2);
    group.add(node3);

    // 4. Floating 3D Geometric Accents (Chamfered cubes & toruses)
    const accent1Geo = new THREE.TorusGeometry(0.22, 0.05, 12, 32);
    const accent1Mat = new THREE.MeshStandardMaterial({ color: 0x84cc16, metalness: 0.85 });
    const accent1 = new THREE.Mesh(accent1Geo, accent1Mat);
    accent1.position.set(-1.8, 1.4, 0.4);
    group.add(accent1);

    const accent2Geo = new THREE.OctahedronGeometry(0.18);
    const accent2Mat = new THREE.MeshStandardMaterial({ color: 0x008f68, metalness: 0.75 });
    const accent2 = new THREE.Mesh(accent2Geo, accent2Mat);
    accent2.position.set(1.9, -1.3, 0.5);
    group.add(accent2);

    // Parallax mouse tracking
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.4;
      targetRotX = -y * 0.3;
    };

    const onMouseLeave = () => {
      targetRotX = 0;
      targetRotY = 0;
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0 && renderer && camera) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    let clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Lerp mouse rotation
      group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

      // Orbit rings spin
      ring1.rotation.z = elapsed * 0.4;
      ring2.rotation.z = -elapsed * 0.35;

      // Orbiting nodes position
      const r1 = 1.4;
      node1.position.set(Math.cos(elapsed * 0.7) * r1, Math.sin(elapsed * 0.7) * r1 * 0.5, Math.sin(elapsed * 0.7) * 0.6);

      const r2 = 1.7;
      node2.position.set(Math.cos(-elapsed * 0.5 + 2.0) * r2, Math.sin(-elapsed * 0.5 + 2.0) * r2 * 0.4, Math.cos(-elapsed * 0.5) * 0.5);

      node3.position.set(Math.sin(elapsed * 0.6 + 4.0) * 1.5, Math.cos(elapsed * 0.6 + 4.0) * 1.1, Math.sin(elapsed * 0.5) * 0.4);

      // Core pulse
      const coreScale = 1.0 + Math.sin(elapsed * 2.0) * 0.04;
      coreMesh.scale.setScalar(coreScale);

      // Accent spin
      accent1.rotation.x += 0.01;
      accent1.rotation.y += 0.015;
      accent2.rotation.y += 0.012;
      accent2.rotation.z += 0.014;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-80 flex items-center justify-center bg-emerald-50/50 rounded-2xl">
        <div className="text-center font-bold text-emerald-800">Why FeedGrow 3D</div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="3D Dimensional Network Visualization"
    >
      <canvas ref={canvasRef} className="w-full h-full block outline-none" />
      {/* Floating LinkedIn Trust Badges */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs border border-gray-100 shadow-md rounded-xl py-2 px-3 text-xs font-bold text-[#040A08] pointer-events-none animate-bounce">
        ✨ 35+ new followers today
      </div>
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-xs border border-gray-100 shadow-md rounded-xl py-2 px-3 text-xs font-bold text-[#008F68] pointer-events-none">
        🚀 High-Value Inbound Leads
      </div>
    </div>
  );
}
