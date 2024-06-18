// src/AnimatedGradient.js
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const AnimatedGradient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, geometry, material, mesh;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const init = () => {
      // Create scene
      scene = new THREE.Scene();

      // Create camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 1;

      // Create renderer
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
      renderer.setSize(width, height);

      // Create geometry
      geometry = new THREE.PlaneGeometry(2, 2, 1, 1);

      // Create material
      material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 1.0 },
        },
        vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          void main() {
            vec2 st = gl_FragCoord.xy / vec2(${width.toFixed(
              1
            )}, ${height.toFixed(1)});
            vec3 color = vec3(0.5 + 0.5 * cos(time + st.xyx + vec3(0, 2, 4)));
            gl_FragColor = vec4(color, 1.0);
          }
        `,
      });

      // Create mesh
      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Start animation loop
      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Update uniform time
      material.uniforms.time.value += 0.001;

      // Render the scene
      renderer.render(scene, camera);
    };

    init();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AnimatedGradient;
