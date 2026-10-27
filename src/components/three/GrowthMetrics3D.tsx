"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function GrowthMetrics3D() {
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

    const width = container.clientWidth || 220;
    const height = container.clientHeight || 220;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 50);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x008f68, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const limeLight = new THREE.PointLight(0x84cc16, 2.8, 10);
    limeLight.position.set(-2, -2, 2.5);
    scene.add(limeLight);

    const group = new THREE.Group();
    scene.add(group);

    // 1. 3D Star / Shield Emblem Geometry
    function createStarShape(points: number, innerR: number, outerR: number) {
      const shape = new THREE.Shape();
      const step = Math.PI / points;
      for (let i = 0; i < 2 * points; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const angle = i * step - Math.PI / 2;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      shape.closePath();
      return shape;
    }

    const starShape = createStarShape(5, 0.42, 0.88);
    const starGeo = new THREE.ExtrudeGeometry(starShape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    starGeo.center();

    // Metallic emerald & gold material
    const starMat = new THREE.MeshStandardMaterial({
      color: 0x008f68,
      metalness: 0.85,
      roughness: 0.18,
      emissive: 0x004e38,
      emissiveIntensity: 0.4,
    });
    const starMesh = new THREE.Mesh(starGeo, starMat);
    group.add(starMesh);

    // 2. Dual Concentric Orbit Rings (Inspired by reference website)
    const ring1Geo = new THREE.TorusGeometry(1.22, 0.024, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x84cc16,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x4d7c0f,
      emissiveIntensity: 0.35,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 2.8;
    group.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(1.36, 0.018, 16, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x008f68,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 3. Orbiting Micro Spheres (Photons)
    const orbiterGeo = new THREE.SphereGeometry(0.075, 16, 16);
    const orbiterMat = new THREE.MeshBasicMaterial({ color: 0x84cc16 });
    const orbiter1 = new THREE.Mesh(orbiterGeo, orbiterMat);
    const orbiter2 = new THREE.Mesh(orbiterGeo, orbiterMat);
    group.add(orbiter1);
    group.add(orbiter2);

    // Parallax
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = x * 0.6;
      targetRotX = -y * 0.4;
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

    const clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Lerp mouse parallax
      group.rotation.y += (targetRotY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotX - group.rotation.x) * 0.05;

      // Star gentle bobbing and rotation
      starMesh.rotation.z = Math.sin(elapsed * 0.8) * 0.08;
      starMesh.rotation.y = Math.sin(elapsed * 1.1) * 0.15;
      starMesh.position.y = Math.sin(elapsed * 1.5) * 0.06;

      // Rings spin
      ring1.rotation.z = elapsed * 0.6;
      ring2.rotation.z = -elapsed * 0.45;

      // Orbiting photons
      orbiter1.position.set(Math.cos(elapsed * 1.2) * 1.22, Math.sin(elapsed * 1.2) * 0.6, Math.sin(elapsed * 1.2) * 0.7);
      orbiter2.position.set(Math.cos(-elapsed * 1.0 + 3.14) * 1.36, Math.sin(-elapsed * 1.0 + 3.14) * 0.7, Math.cos(-elapsed * 1.0) * 0.6);

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
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex items-center justify-center cursor-grab active:cursor-grabbing mx-auto select-none"
      aria-label="3D Guaranteed Growth Emblem"
    >
      <canvas ref={canvasRef} className="w-full h-full block outline-none" />
    </div>
  );
}
