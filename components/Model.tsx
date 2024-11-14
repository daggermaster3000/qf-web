import React, { useRef, useEffect } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import { MeshToonMaterial, MeshBasicMaterial, BackSide } from 'three';
import { Mesh, Object3D } from 'three';
import { MutableRefObject } from 'react';

type ModelProps = {
  mouse: MutableRefObject<{
    x: number;
    y: number;
  }>;
};



function Model({ mouse }: ModelProps){
  const obj = useLoader(GLTFLoader, 'Brain.glb'); // Use GLTFLoader for .glb files
  const modelRef = useRef<Object3D | null>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  // Define cartoon-style material
  const cartoonMaterial = new MeshToonMaterial({
    color: 0xffffff,
    //gradientMap: false, // Optional: use a gradient map for different shading
    //shininess: 10,
    emissive: 0x00ff00,
    emissiveIntensity: 1,
    //flatShading: true,
    opacity: 1,
    transparent: true,
    //roughness: 0.8,
    //metalness: 1,
    wireframe: true,
  });

  // Outline material
  const outlineMaterial = new MeshBasicMaterial({
    color: 0x000000, // Black outline
    side: BackSide,  // Render the back side of the mesh
    opacity: 1,
    transparent: true,
    wireframe: false, // Wireframe for outline effect
    //linewidth: 1,    // Outline thickness
  });

  // Lighting setup
  // const directionalLightRef = useRef();
  // const ambientLightRef = useRef();

  useEffect(() => {
    if (obj && obj.scene) {
      // Create and configure lights only when the object is loaded
      // directionalLightRef.current = new DirectionalLight(0xffffff, 1);
      // directionalLightRef.current.position.set(0, 0, 20); // Light position
      // directionalLightRef.current.castShadow = true;
      // directionalLightRef.current.shadow.mapSize.width = 2048;  // Higher value = better shadow quality
      // directionalLightRef.current.shadow.mapSize.height = 2048;
      // //directionalLightRef.current.shadow.bias = -0.01;  // Reduces shadow acne

      // ambientLightRef.current = new AmbientLight(0x404040);  // Soft ambient light for general scene illumination

      // // Add lights to the scene
      // obj.scene.add(directionalLightRef.current);
      // obj.scene.add(ambientLightRef.current);

      obj.scene.rotation.y = Math.PI; // 90 degrees in radians
    }
  }, [obj]);

  // Apply materials to meshes
  useEffect(() => {
    if (obj && obj.scene && obj.scene.children) {
      obj.scene.children.forEach((child: Object3D) => {
        if ((child as Mesh).isMesh) {
          const mesh = child as Mesh;

          // Apply cartoon material to the original mesh
          mesh.material = cartoonMaterial;

          // Create the outline mesh
          const outlineMesh = mesh.clone();
          outlineMesh.material = outlineMaterial;

          // Scale up the outline mesh slightly
          outlineMesh.scale.multiplyScalar(1.05);

          // Add the outline mesh as a child of the original mesh's parent
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
