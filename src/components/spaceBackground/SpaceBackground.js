import React, { useEffect, useRef } from "react";
import "./SpaceBackground.scss";

const SpaceBackground = () => {
  console.log("SpaceBackground component rendered");
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const shootingStarsRef = useRef([]);
  const nebulaRef = useRef(null);


  useEffect(() => {
    console.log("Canvas ref:", canvasRef.current);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      

      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    

    createStars();
    

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawStars(ctx);
      updateAndDrawShootingStars(ctx);
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    

    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.5) {
        createShootingStar();
      }
    }, 3000 + Math.random() * 5000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarInterval);
    };
  }, []);
  
  
  const createStars = () => {
    const canvas = canvasRef.current;
    const stars = [];
    
    
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: 0.003 + Math.random() * 0.03,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
    
    starsRef.current = stars;
  };
  
  
  const createShootingStar = () => {
    const canvas = canvasRef.current;
    
    
    const startX = Math.random() * canvas.width;
    const startY = Math.random() * (canvas.height / 2);
    
    
    const angle = (Math.PI / 4) + (Math.random() * Math.PI / 2);
    
    
    const speed = 5 + Math.random() * 10;
    const length = 50 + Math.random() * 80;
    
    shootingStarsRef.current.push({
      x: startX,
      y: startY,
      angle: angle,
      speed: speed,
      length: length,
      opacity: 1,
      
      trail: [],
      
      maxTrail: 10,
      
      fade: 0.02 + Math.random() * 0.02
    });
  };
  
  
  const updateAndDrawShootingStars = (ctx) => {
    const canvas = canvasRef.current;
    const shootingStars = shootingStarsRef.current;
    
    
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const star = shootingStars[i];
      
      
      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      
      
      star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });
      
      
      if (star.trail.length > star.maxTrail) {
        star.trail.shift();
      }
      
      
      star.opacity -= star.fade;
      
      
      if (star.trail.length > 1 && star.opacity > 0) {
        ctx.beginPath();
        
        
        const gradient = ctx.createLinearGradient(
          star.trail[0].x, star.trail[0].y,
          star.x, star.y
        );
        
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(star.trail[0].x, star.trail[0].y);
        
        
        for (let j = 1; j < star.trail.length; j++) {
          ctx.lineTo(star.trail[j].x, star.trail[j].y);
        }
        
        ctx.stroke();
        
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }
      
      
      if (star.x < 0 || star.x > canvas.width || 
          star.y < 0 || star.y > canvas.height || 
          star.opacity <= 0) {
        shootingStars.splice(i, 1);
      }
    }
  };
  
  
  const drawStars = (ctx) => {
    starsRef.current.forEach(star => {
      
      star.twinklePhase += star.twinkleSpeed;
      const twinkleFactor = 0.5 + 0.5 * Math.sin(star.twinklePhase);
      const currentOpacity = 0.2 + star.opacity * twinkleFactor;
      
      
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
      ctx.fill();
    });
  };

  return (
    <div className="space-background">
      <canvas ref={canvasRef} className="stars-canvas"></canvas>
      <div className="nebula-overlay"></div>
    </div>
  );
};

export default SpaceBackground;