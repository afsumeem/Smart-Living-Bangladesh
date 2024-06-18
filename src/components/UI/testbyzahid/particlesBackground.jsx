import React, { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const size = Math.random() * 60 + 20 + "px";
      bubble.style.width = size;
      bubble.style.height = size;
      bubble.style.left = Math.random() * 100 + "vw";
      bubble.style.backgroundColor = ` rgba(
        ${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.6
      )`;
      document.body.appendChild(bubble);

      bubble.addEventListener("animationend", () => {
        bubble.remove();
      });
    };

    const interval = setInterval(createBubble, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ParticleBackground;
