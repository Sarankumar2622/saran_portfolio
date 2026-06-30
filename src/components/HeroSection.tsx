import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Github as GitHub, Linkedin, Mail, Smartphone, Server, Sparkles } from "lucide-react";
import profilePic from "../image/profile(2).jpeg";
import pdf from "../image/Sarankumar.pdf";

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setMousePosition({ x: (centerX - x) / 12, y: (y - centerY) / 12 });
  };

  useEffect(() => {
    const handleCursor = (e: MouseEvent) => {
      cursorPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleCursor);
    return () => window.removeEventListener("mousemove", handleCursor);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame = 0;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const points = Array.from({ length: 72 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: Math.random() * 0.45 - 0.225,
      vy: Math.random() * 0.45 - 0.225,
      r: Math.random() * 1.8 + 0.8,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.08)");
      gradient.addColorStop(0.45, "rgba(16, 185, 129, 0.07)");
      gradient.addColorStop(1, "rgba(244, 63, 94, 0.08)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      points.forEach((point, index) => {
        const dx = point.x - cursorPosition.current.x;
        const dy = point.y - cursorPosition.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          point.x += dx / 90;
          point.y += dy / 90;
        }

        point.x += point.vx;
        point.y += point.vy;

        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r, 0, Math.PI * 2);
        ctx.fillStyle = index % 3 === 0 ? "rgba(6, 182, 212, 0.46)" : index % 3 === 1 ? "rgba(16, 185, 129, 0.42)" : "rgba(244, 63, 94, 0.38)";
        ctx.fill();
      });

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(15, 118, 110, ${(125 - distance) / 1000})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fadeInUp");
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
    { name: "GitHub", icon: <GitHub className="h-5 w-5" />, href: "https://github.com/Sarankumar2622" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/sarankumar-m-15188b260/" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, href: "mailto:sarankumar2622@gmail.com" },
  ];

  const highlights = [
    { icon: <Smartphone className="h-5 w-5" />, label: "Mobile Apps", value: "Android & iOS" },
    { icon: <Server className="h-5 w-5" />, label: "Backend", value: "MERN APIs" },
    { icon: <Sparkles className="h-5 w-5" />, label: "Experience", value: "1.5+ Years" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-slate-50 pt-24 dark:bg-gray-950"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.14),transparent_30%)]" />

      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] flex-col items-center justify-between gap-12 px-4 py-12 md:flex-row md:py-16">
        <div className="w-full md:w-[56%]">
          <div className="animate-on-scroll opacity-0 transition-all duration-1000">
            <p className="mb-4 inline-flex items-center rounded-full border border-emerald-500/20 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur dark:bg-gray-900/70 dark:text-emerald-300">
              React Native Developer | MERN Stack
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-gray-950 dark:text-white md:text-6xl lg:text-6xl">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 bg-clip-text text-transparent">Sarankumar M</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300 md:text-xl">
              I build scalable cross-platform mobile apps and reliable MERN backends with clean UI, strong API integration, and production-ready delivery.
            </p>

            <div className="mb-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-lg border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-emerald-500 to-rose-500 text-white">
                    {item.icon}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="font-bold text-gray-950 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={pdf}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/35"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 font-semibold text-gray-900 shadow-md backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:text-emerald-700 dark:border-gray-700 dark:bg-gray-900/80 dark:text-white dark:hover:text-emerald-300"
              >
                View Projects
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            
          </div>
        </div>

        <div className="w-full md:w-[44%] flex justify-center animate-on-scroll opacity-0">
          <div
            ref={cardRef}
            className="relative flex h-[300px] w-[300px] items-center justify-center perspective-1000 md:h-[390px] md:w-[390px]"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePosition({ x: 0, y: 0 });
            }}
          >
            <div className="absolute inset-[-18px] rounded-full border border-cyan-400/30" />
            <div className="absolute inset-[-42px] rounded-full border border-emerald-400/25" />
            <div className="absolute inset-[-66px] rounded-full border border-rose-400/20" />

            <div
              className="relative z-10 h-full w-full rounded-full p-1.5 shadow-2xl transition-all duration-200 ease-out transform-gpu"
              style={{
                transform: isHovering
                  ? `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.04, 1.04, 1.04)`
                  : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                backgroundImage: "linear-gradient(135deg, #06b6d4, #10b981, #f43f5e)",
              }}
            >
              <div className="h-full w-full overflow-hidden rounded-full bg-white dark:bg-gray-950">
                <img
                  src={profilePic}
                  alt="Sarankumar M"
                  className="h-full w-full rounded-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="absolute -left-2 top-8 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold text-white shadow-lg md:-left-8">React Native</div>
            <div className="absolute -right-2 top-16 rounded-full bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-lg md:-right-8">1.5+ Years</div>
            <div className="absolute bottom-6 left-0 rounded-full bg-rose-500 px-4 py-2 text-xs font-bold text-white shadow-lg md:-left-6">MERN Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
