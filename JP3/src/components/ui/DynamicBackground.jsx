import React, { useEffect, useRef }  from 'react'

export default function DynamicBackground({
  circles = [
    { x: "10%", y: "50%", color: "rgba(0,123,255,0.15)", size: "60%" },
    { x: "90%", y: "10%", color: "rgba(0,123,255,0.2)", size: "55%" },
    { x: "80%", y: "110%", color: "rgba(0,123,255,0.1)", size: "50%" },
    { x: "40%", y: "90%", color: "rgba(0,123,255,0.14)", size: "58%" },
  ],
  baseColor = "#0a0a0f",
  children,
}) {
  const canvasRef = useRef(null);

  const gradients = circles.map(c =>
    `radial-gradient(circle at ${c.x} ${c.y}, ${c.color} 0%, transparent ${c.size})`
  ).join(',');

  const backgroundStyle = {
    backgroundColor: baseColor,
    backgroundImage: `${gradients}, radial-gradient(circle at center, rgba(255,255,255,0.01) 0%, transparent 100%)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: -2,
  };

  const wrapperStyle = {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Crear partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2
      });
    }

    const drawStar = (x, y, size, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size, 0);
      ctx.closePath();
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.shadowColor = `rgba(255,255,255,${alpha})`;
      ctx.shadowBlur = 3;
      ctx.fill();
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        drawStar(p.x, p.y, p.size, p.alpha);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={backgroundStyle}></div>
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: -1
      }} />
      <div style={contentStyle}>{children}</div>
    </div>
  );
}
