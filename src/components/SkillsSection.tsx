import React, { useEffect, useRef } from "react";
import { Code2, Palette, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: "Core Technologies" | "Front-End Skills" | "Back-End Skills" | "Other Relevant Skills";
  logo: string;
  logoClass?: string;
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: "React Native", level: 95, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "React.js", level: 92, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", level: 85, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "JavaScript ES6+", level: 90, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Redux Toolkit", level: 90, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "RESTful APIs", level: 95, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    { name: "Core Python", level: 70, category: "Core Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },

    { name: "HTML5", level: 90, category: "Front-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", level: 90, category: "Front-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Material UI", level: 85, category: "Front-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
    { name: "Component Architecture", level: 90, category: "Front-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

    { name: "Node.js", level: 90, category: "Back-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: 90, category: "Back-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", logoClass: "dark:invert" },
    { name: "Socket.io", level: 90, category: "Back-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", logoClass: "dark:invert" },
    { name: "WebRTC", level: 75, category: "Back-End Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg" },
    { name: "JWT Authentication", level: 85, category: "Back-End Skills", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jsonwebtokens.svg", logoClass: "dark:invert" },

    { name: "MongoDB", level: 88, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", level: 85, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MS SQL", level: 85, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "Prisma ORM", level: 80, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", logoClass: "dark:invert" },
    { name: "Firebase", level: 88, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Git", level: 90, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", level: 90, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", logoClass: "dark:invert" },
    { name: "Postman", level: 85, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Swagger", level: 85, category: "Other Relevant Skills", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");

            const progressBars = entry.target.querySelectorAll(".progress-bar");
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.width}%`;
              }, 70 * index);
            });
          }
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

  const categories = [
    { id: "Core Technologies", name: "Core Technologies", icon: Code2, gradient: "from-cyan-500 to-emerald-500" },
    { id: "Front-End Skills", name: "Front-End Skills", icon: Palette, gradient: "from-emerald-500 to-lime-500" },
    { id: "Back-End Skills", name: "Back-End Skills", icon: Server, gradient: "from-indigo-500 to-cyan-500" },
    { id: "Other Relevant Skills", name: "Other Relevant Skills", icon: Wrench, gradient: "from-rose-500 to-orange-500" },
  ] as const;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/60 dark:from-gray-950 dark:via-gray-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 animate-on-scroll opacity-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400">
            Technical Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-950 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A focused React Native and MERN toolkit for building polished mobile interfaces, stable APIs, and maintainable production features.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0 space-y-12">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.id}>
                <div className="mb-6 flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${category.gradient} text-white shadow-lg shadow-emerald-500/10`}>
                    <CategoryIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="group rounded-lg border border-white/80 bg-white/85 p-5 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-gray-800 dark:bg-gray-900/80 dark:hover:border-emerald-500/50"
                      >
                        <div className="mb-4 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-emerald-100 bg-white p-2 shadow-md transition-transform duration-300 group-hover:scale-105 dark:border-gray-800 dark:bg-gray-950">
                              <img
                                src={skill.logo}
                                alt={`${skill.name} logo`}
                                className={`h-full w-full object-contain ${skill.logoClass ?? ""}`}
                                loading="lazy"
                              />
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                          <div
                            className="progress-bar h-2.5 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-rose-500 transition-all duration-1000 ease-out"
                            style={{ width: "0%" }}
                            data-width={skill.level}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
