import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, CheckCircle2, GraduationCap, MapPin, Rocket, Sparkles } from 'lucide-react';
import profilePic from '../image/profile(2).jpeg';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-fadeInUp');
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const details = [
    { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu' },
    { icon: Briefcase, label: 'Current Role', value: 'Software Developer' },
    { icon: Award, label: 'Experience', value: '1.5+ Years' },
    { icon: GraduationCap, label: 'Education', value: 'M.C.A - 2024' },
  ];

  const strengths = [
    'Cross-platform Android and iOS app development using React Native.',
    'Clean frontend architecture with React.js, TypeScript, and reusable components.',
    'Backend integration with Node.js, Express.js, Firebase, SQL, and REST APIs.',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950"
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,182,212,0.10),rgba(16,185,129,0.10),rgba(244,63,94,0.08))]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center animate-on-scroll opacity-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
            About Me
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
            Building <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 bg-clip-text text-transparent">Useful Digital Products</span>
          </h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500" />
        </div>

        <div className="animate-on-scroll opacity-0 mx-auto max-w-6xl overflow-hidden rounded-lg border border-white/80 bg-white/85 shadow-2xl shadow-emerald-500/10 backdrop-blur dark:border-gray-800 dark:bg-gray-900/85">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                <Sparkles className="h-4 w-4" />
                React Native & Full-Stack Developer
              </div>

              <h3 className="mb-5 text-2xl font-bold leading-snug text-gray-950 dark:text-white md:text-3xl">
                I create mobile-first applications with clean UI, strong APIs, and practical business workflows.
              </h3>

              <div className="space-y-4 leading-8 text-gray-700 dark:text-gray-300">
                <p>
                  I am a dedicated React Native and Full-Stack Developer with 1.5+ years of professional experience building scalable Android, iOS, and web applications.
                </p>
                <p>
                  My work includes HRMS, classifieds, healthcare, travel booking, matrimony, property management, and e-commerce platforms. I focus on smooth user experiences, secure authentication, realtime communication, push notifications, and reliable API integrations.
                </p>
              </div>

              <div className="mt-7 grid gap-3">
                {strengths.map((strength) => (
                  <div key={strength} className="flex gap-3 rounded-lg border border-emerald-100 bg-gradient-to-r from-cyan-50/80 to-emerald-50/80 p-3 text-gray-700 dark:border-gray-800 dark:from-gray-950 dark:to-gray-900 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/35"
              >
                Contact Me
                <Rocket className="h-5 w-5" />
              </a>
            </div>

            <div className="relative border-t border-emerald-100 bg-gradient-to-br from-cyan-50 via-emerald-50 to-rose-50 p-6 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950 lg:border-l lg:border-t-0 md:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(6,182,212,0.12),rgba(16,185,129,0.10),rgba(244,63,94,0.10))]" />
              <div className="relative">
                <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-white bg-white p-1 shadow-xl shadow-emerald-500/20 dark:border-gray-800 dark:bg-gray-950 sm:h-52 sm:w-52">
                  <img
                    src={profilePic}
                    alt="Sarankumar M"
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>

                <div className="mb-6 text-center">
                  <h4 className="text-2xl font-bold text-gray-950 dark:text-white">Sarankumar M</h4>
                  <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                    React Native Developer | MERN Stack
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {details.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-lg border border-white/80 bg-white/85 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/85">
                        <Icon className="mb-3 h-5 w-5 text-emerald-500" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                        <p className="font-bold text-gray-950 dark:text-white">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
