import React, { useEffect, useRef, useState } from "react";
import { Github as GitHub, Linkedin, Mail, FileText } from "lucide-react";
import profilePic from "../image/profile.jpg";
import pdf from "../image/Arunkumar.pdf"

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Handle the 3D card effect for profile picture
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setMousePosition({ x: rotateY, y: rotateX });
  };

  // Track cursor for interactive background effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas-based dynamic background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Create a color palette based on theme
        const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
        
        // Interactive with cursor
        const dx = this.x - cursorPosition.x;
        const dy = this.y - cursorPosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 10;
          this.x += Math.cos(angle) * force;
          this.y += Math.sin(angle) * force;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.4;
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between particles
      ctx.strokeStyle = 'rgba(120, 120, 240, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.globalAlpha = (120 - distance) / 500;
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      // Draw 3D grid effect
      const gridSize = 50;
      const gridDepth = 5;
      
      ctx.strokeStyle = 'rgba(100, 100, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      // Horizontal lines with perspective
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const waveY = y + Math.sin(x / 200 + Date.now() / 1000) * 15;
          ctx.lineTo(x, waveY);
        }
        ctx.stroke();
      }
      
      // Vertical lines with perspective
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 5) {
          const waveX = x + Math.sin(y / 200 + Date.now() / 1200) * 15;
          ctx.lineTo(waveX, y);
        }
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [cursorPosition]);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GitHub className="h-5 w-5" />,
      href:"https://github.com/arunkumar02002", 
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href:"https://www.linkedin.com/in/arun-kumar-b9aaa4330/",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:arunmichael2002@email.com",
    },
    { name: "Resume", icon: <FileText className="h-5 w-5" />,
      href: `${pdf}`, // path to your PDF file
      target: "_blank",        },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Canvas-based 3D interactive background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      />
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 3D Floating geometric shapes */}
        <div className="absolute w-64 h-64 -top-10 -right-10 bg-blue-500/10 dark:bg-blue-500/5 rounded-3xl transform rotate-12 animate-float backdrop-blur-3xl"></div>
        <div className="absolute w-72 h-72 bottom-32 -left-20 bg-purple-500/10 dark:bg-purple-500/5 rounded-full transform -rotate-12 animate-float animation-delay-2000 backdrop-blur-3xl"></div>
        <div className="absolute w-80 h-80 top-1/3 right-1/4 bg-pink-500/10 dark:bg-pink-500/5 rounded-lg transform rotate-45 animate-float animation-delay-4000 backdrop-blur-3xl"></div>
        
        {/* Bokeh light effects */}
        {Array.from({ length: 20 }).map((_, index) => (
          <div 
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'float 15s infinite ease-in-out'
            }}
          />
        ))}
        
        {/* Animated gradient rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 rounded-full border-[2px] border-blue-400/30 dark:border-blue-500/30 animate-spinSlow"></div>
          <div className="absolute inset-[30px] rounded-full border-[1px] border-purple-400/20 dark:border-purple-500/20 animate-reverse-spinSlow"></div>
          <div className="absolute inset-[60px] rounded-full border-[3px] border-pink-400/20 dark:border-pink-500/20 animate-spinSlow animation-delay-2000"></div>
          <div className="absolute inset-[90px] rounded-full border-[1px] border-indigo-400/10 dark:border-indigo-500/10 animate-reverse-spinSlow animation-delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 p-8 rounded-2xl shadow-lg">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 animate-slideInLeft">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slideInLeft animation-delay-300">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Sarankumar
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 animate-slideInLeft animation-delay-500">
              React Native Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl animate-slideInLeft animation-delay-700">
              I build exceptional mobile applications with React Native and
              create robust backends using Node.js, Express and MongoDB. Let's
              turn your ideas into reality.
            </p>

            <div className="flex flex-wrap gap-4 animate-slideInLeft animation-delay-900">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-105"
              >
                View Projects
              </a>
            </div>

            <div className="mt-8 flex space-x-4 animate-slideInLeft animation-delay-1000">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transform"
                  aria-label={link.name}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center animate-on-scroll opacity-0">
          {/* Enhanced 3D Tilt Card Effect with lighting */}
          <div 
            ref={cardRef}
            className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePosition({ x: 0, y: 0 });
            }}
          >
            {/* Glowing effects around the profile */}
            <div className="absolute inset-[-60px] rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl animate-pulse"></div>
            
            {/* Rotating orbital elements */}
            <div className="absolute inset-[-10px] rounded-full border-[6px] border-dashed border-blue-400/30 dark:border-blue-700/30 animate-spinSlow z-0" />
            <div className="absolute inset-[-30px] rounded-full border-[2px] border-purple-300/30 dark:border-purple-500/30 animate-reverse-spinSlow" />
            <div className="absolute inset-[-50px] rounded-full border-[1px] border-pink-300/20 dark:border-pink-500/20 animate-spinSlow animation-delay-2000" />

            {/* Enhanced 3D Profile Card with depth */}
            <div 
              className="relative z-10 w-full h-full rounded-full shadow-2xl transition-all duration-200 ease-out transform-gpu"
              style={{
                transform: isHovering 
                  ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.05, 1.05, 1.05)` 
                  : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                backgroundImage: 'linear-gradient(140deg, #3b82f6, #8b5cf6, #ec4899)',
                padding: '6px',
                boxShadow: isHovering 
                  ? `0 25px 50px -12px rgba(0, 0, 0, 0.4), 
                     ${mousePosition.x/5}px ${mousePosition.y/5}px 30px rgba(79, 70, 229, 0.4)`
                  : '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Card Content with 3D layered effect */}
              <div className="rounded-full w-full h-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden"
                style={{
                  boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)'
                }}
              >
                <img
                  src={profilePic}
                  alt="Developer"
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110"
                  style={{
                    transform: isHovering 
                      ? `translateX(${-mousePosition.x/10}px) translateY(${-mousePosition.y/10}px)` 
                      : 'translateX(0) translateY(0)'
                  }}
                />
              </div>
              
              {/* 3D lighting and reflection effects */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent transition-opacity duration-300"
                style={{ 
                  opacity: isHovering ? 0.6 : 0,
                  transform: `translateX(${-mousePosition.x/2}px) translateY(${-mousePosition.y/2}px)` 
                }}
              />
              
              {/* Subtle inner glow effect */}
              <div 
                className="absolute inset-[6px] rounded-full"
                style={{
                  boxShadow: isHovering 
                    ? `inset ${-mousePosition.x/10}px ${-mousePosition.y/10}px 20px rgba(255,255,255,0.2)` 
                    : 'inset 0 0 0 rgba(255,255,255,0)'
                }}
              />
            </div>
            
            {/* Enhanced floating tech badges with perspective */}
            <div 
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-float animation-delay-1000"
              style={{
                transform: isHovering 
                  ? `translateX(${-mousePosition.x/5}px) translateY(${-mousePosition.y/5}px) scale(1.05)` 
                  : 'translateX(0) translateY(0) scale(1)'
              }}
            >
              Android Developer
            </div>
            <div 
              className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-float animation-delay-2000"
              style={{
                transform: isHovering 
                  ? `translateX(${-mousePosition.x/7}px) translateY(${-mousePosition.y/7}px) scale(1.05)` 
                  : 'translateX(0) translateY(0) scale(1)'
              }}
            >
              Node.js
            </div>
            <div 
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-float"
              style={{
                transform: isHovering 
                  ? `translateX(${-mousePosition.x/6}px) translateY(${-mousePosition.y/6}px) scale(1.05)` 
                  : 'translateX(0) translateY(0) scale(1)'
              }}
            >
              Android Studio
            </div>
            
            {/* New tech badge with different position */}
            <div 
              className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-float animation-delay-3000"
              style={{
                transform: isHovering 
                  ? `translateX(${-mousePosition.x/8}px) translateY(${-mousePosition.y/8}px) scale(1.05)` 
                  : 'translateX(0) translateY(0) scale(1)'
              }}
            >
              React Native
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-blue-500 dark:border-blue-400 flex justify-center">
          <div className="w-1 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
