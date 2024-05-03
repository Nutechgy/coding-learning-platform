import React, { useEffect } from 'react';

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    const fontSize = 20;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      draw();
    }

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height);
    }

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return <canvas id="matrix-canvas" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default MatrixBackground;
