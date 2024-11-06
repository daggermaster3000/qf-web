import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { MeshToonMaterial, MeshBasicMaterial, DirectionalLight, AmbientLight, BackSide } from 'three';

function Model({ mouse }) {
  const obj = useLoader(GLTFLoader, 'Brain.glb'); // Use GLTFLoader for .glb files
  const modelRef = useRef();
  const targetRotation = useRef({ x: 0, y: 0 });

  // Define cartoon-style material
  const cartoonMaterial = new MeshToonMaterial({
    color: 0xffffff,
    gradientMap: false, // Optional: use a gradient map for different shading
    shininess: 10,
    emissive: 0x00ff00,
    emissiveIntensity: 1,
    flatShading: true,
    opacity: 1,
    transparent: false,
    roughness: 0.8,
    metalness: 0.1,
    wireframe: false,
  });

  // Outline material
  const outlineMaterial = new MeshBasicMaterial({
    color: 0x000000, // Black outline
    side: BackSide,  // Render the back side of the mesh
    opacity: 1,
    transparent: false,
    wireframe: true, // Wireframe for outline effect
    linewidth: 10,    // Outline thickness
  });

  // Lighting setup
  const directionalLightRef = useRef();
  const ambientLightRef = useRef();

  useEffect(() => {
    if (obj && obj.scene) {
      // Create and configure lights only when the object is loaded
      directionalLightRef.current = new DirectionalLight(0xffffff, 1);
      directionalLightRef.current.position.set(0, 0, 20); // Light position
      directionalLightRef.current.castShadow = true;
      directionalLightRef.current.shadow.mapSize.width = 2048;  // Higher value = better shadow quality
      directionalLightRef.current.shadow.mapSize.height = 2048;
      //directionalLightRef.current.shadow.bias = -0.01;  // Reduces shadow acne

      ambientLightRef.current = new AmbientLight(0x404040);  // Soft ambient light for general scene illumination

      // Add lights to the scene
      obj.scene.add(directionalLightRef.current);
      obj.scene.add(ambientLightRef.current);

      obj.scene.rotation.y = Math.PI; // 90 degrees in radians
    }
  }, [obj]);

  // Apply materials to meshes
  useEffect(() => {
    if (obj && obj.scene && obj.scene.children) {
      obj.scene.children.forEach((child) => {
        if (child.isMesh) {
          // Apply cartoon material to the object
          child.material = cartoonMaterial;

          // Enable casting and receiving shadows
          child.castShadow = true;
          child.receiveShadow = true;

          // Create a duplicate mesh for the outline
          const outlineMesh = child.clone();
          outlineMesh.material = outlineMaterial;
          outlineMesh.scale.set(1.05, 1.05, 1.05); // Scale it slightly to create the outline effect
          obj.scene.add(outlineMesh);
        }
      });
    }
  }, [obj]);

  useFrame(() => {
    if (modelRef.current) {
      // Calculate target rotation based on mouse position
      targetRotation.current.x = mouse.current.y * 0.001;
      targetRotation.current.y = mouse.current.x * 0.001;

      // Smoothly interpolate towards the target rotation to create inertia
      modelRef.current.rotation.x += (targetRotation.current.x - modelRef.current.rotation.x) * 0.05;
      modelRef.current.rotation.y += (targetRotation.current.y - modelRef.current.rotation.y) * 0.05;
    }
  });

  return <primitive ref={modelRef} object={obj.scene} scale={2} />;
}

export default Model;
