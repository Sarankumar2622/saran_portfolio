import React, { useEffect, useRef } from "react";
import { Briefcase, CalendarDays, CheckCircle2, Layers3, MapPin, Rocket, Sparkles } from "lucide-react";
import amrithaaLogo from "../image/amrithaa.webp";
import kodukkuLogo from "../image/kodukku.webp";

interface Experience {
  role: string;
  company: string;
  period: string;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  logo: string;
}

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences: Experience[] = [
    {
      role: "React Native Developer",
      company: "Kodukku Classifieds Private Limited",
      period: "Oct 2024 - Sep 2025",
      type: "Community, classifieds, HRMS and marketing applications",
      logo: kodukkuLogo,
      summary:
        "Contributed to Kodukku, an all-in-one community platform that helps users buy, sell, donate blood, discover jobs, follow local events, and share talents from a single mobile experience.",
      highlights: [
        "Developed and enhanced cross-platform HRMS and marketing applications using React Native.",
        "Implemented real-time chat with Socket.io and Express.js to improve internal communication and collaboration.",
        "Integrated Firebase Authentication, FCM push notifications, and MS SQL for secure and reliable data management.",
        "Built and consumed RESTful APIs for seamless frontend and backend communication.",
        "Deployed and maintained mobile applications on Google Play Store and Apple App Store.",
      ],
      technologies: ["React Native", "React.js", "TypeScript", "JavaScript", "Node.js", "Express.js", "Socket.io", "Firebase", "FCM", "MS SQL", "REST APIs", "Git", "GitHub"],
    },
    {
      role: "Software Developer",
      company: "Amudhalakshmi Systems PVT. LTD",
      period: "Oct 2025 - Present",
      type: "Healthcare, travel, property, matrimony, e-commerce and classifieds",
      logo: amrithaaLogo,
      summary:
        "Developing and maintaining web and mobile applications across multiple product domains with a focus on scalable workflows, clean user experiences, and practical business features.",
      highlights: [
        "Built and maintained applications across healthcare, travel, property management, matrimony, e-commerce, and classified domains.",
        "Cuspix: Developed B2B dental clinic workflows, multi-vendor features, appointment management, and administrative controls.",
        "Wyndo: Built travel booking modules including trip creation, vendor management, and customer booking flows.",
        "Health Umbrella: Delivered physiotherapy, homecare, and medical service booking features.",
        "Thirukalyanam: Implemented profile management, matchmaking flows, and user engagement features for a matrimony platform.",
      ],
      technologies: ["React Native", "React.js", "TypeScript", "Node.js", "Express.js", "REST APIs", "Firebase", "SQL", "Git", "GitHub"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fadeInUp");
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-cyan-50/50 to-emerald-50 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),rgba(16,185,129,0.08),rgba(244,63,94,0.08))]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center animate-on-scroll opacity-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
            Career Journey
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-950 dark:text-white md:text-4xl">
            Professional <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="mx-auto mb-6 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500" />
          <p className="text-gray-700 dark:text-gray-300">
            Hands-on experience building mobile and web products across community, HRMS, healthcare, travel, and business workflow platforms.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-rose-500 md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.company}
                className="animate-on-scroll opacity-0 relative overflow-hidden rounded-lg border border-white/80 bg-white/85 p-6 shadow-xl shadow-emerald-500/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 dark:border-gray-800 dark:bg-gray-900/85 dark:hover:border-emerald-500/60 md:ml-14 md:p-8"
              >
                <div className="absolute right-0 top-0 h-28 w-28 bg-gradient-to-bl from-emerald-400/20 to-transparent" />
                <div className="absolute -left-[4.5rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-emerald-500 to-rose-500 text-white shadow-lg md:flex">
                  {index === 0 ? <Rocket className="h-5 w-5" /> : <Briefcase className="h-5 w-5" />}
                </div>

                <div className="relative mb-6 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-white p-2 shadow-md dark:border-gray-800 dark:bg-gray-950">
                      <img src={experience.logo} alt={`${experience.company} logo`} className="h-full w-full object-contain" />
                    </div>
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                        {experience.company}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                        {experience.role}
                      </h3>
                      <p className="mt-2 flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <MapPin className="mt-1 h-4 w-4 shrink-0 text-rose-500" />
                        {experience.type}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-500/20">
                    <CalendarDays className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>

                <p className="relative mb-6 rounded-lg border border-emerald-100 bg-gradient-to-r from-cyan-50 to-emerald-50 p-4 leading-7 text-gray-700 dark:border-gray-800 dark:from-gray-950 dark:to-gray-900 dark:text-gray-300">
                  {experience.summary}
                </p>

                <div className="relative mb-6 grid gap-3">
                  {experience.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                      <span className="leading-7">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                    <Layers3 className="h-4 w-4 text-emerald-500" />
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-emerald-200 bg-white px-3 py-1.5 text-sm font-semibold text-gray-700 shadow-sm dark:border-emerald-500/20 dark:bg-gray-950 dark:text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 rounded-lg border border-white/80 bg-white/75 p-5 shadow-lg backdrop-blur dark:border-gray-800 dark:bg-gray-900/75 md:grid-cols-3 animate-on-scroll opacity-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-500 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-bold text-gray-950 dark:text-white">1.5+ Years</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Domains</p>
                <p className="font-bold text-gray-950 dark:text-white">6+ Product Areas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-rose-500 text-white">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Delivery</p>
                <p className="font-bold text-gray-950 dark:text-white">Web + Mobile Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
