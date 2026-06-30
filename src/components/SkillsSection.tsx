import React, { useEffect, useRef } from "react";

interface Skill {
  name: string;
  level: number;
  category: "Core Technologies" | "Front-End Skills" | "Back-End Skills" | "Other Relevant Skills";
}

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Core Technologies
    { name: "React Native", level: 95, category: "Core Technologies" },
    { name: "React.js", level: 92, category: "Core Technologies" },
    { name: "TypeScript", level: 85, category: "Core Technologies" },
    { name: "JavaScript (ES6+)", level: 90, category: "Core Technologies" },
    { name: "Redux Toolkit", level: 90, category: "Core Technologies" },
    { name: "RESTful APIs", level: 95, category: "Core Technologies" },
    { name: "Core Python", level: 70, category: "Core Technologies" },

    // Front-End Skills
    { name: "HTML5 / CSS3", level: 90, category: "Front-End Skills" },
    { name: "Material-UI", level: 85, category: "Front-End Skills" },
    { name: "Component-Based Architecture", level: 90, category: "Front-End Skills" },

    // Back-End Skills
    { name: "Node.js", level: 90, category: "Back-End Skills" },
    { name: "Express.js", level: 90, category: "Back-End Skills" },
    { name: "Socket.io", level: 90, category: "Back-End Skills" },
    { name: "WebRTC", level: 75, category: "Back-End Skills" },
    { name: "JWT Authentication", level: 85, category: "Back-End Skills" },

    // Other Relevant Skills
    { name: "MongoDB", level: 88, category: "Other Relevant Skills" },
    { name: "MySQL / MS SQL", level: 85, category: "Other Relevant Skills" },
    { name: "Prisma ORM", level: 80, category: "Other Relevant Skills" },
    { name: "Firebase (Auth, Firestore, FCM)", level: 88, category: "Other Relevant Skills" },
    { name: "Git & GitHub", level: 90, category: "Other Relevant Skills" },
    { name: "Postman & Swagger", level: 85, category: "Other Relevant Skills" },
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
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.width
                  }%`;
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = [
    { id: "Core Technologies", name: "Core Technologies" },
    { id: "Front-End Skills", name: "Front-End Skills" },
    { id: "Back-End Skills", name: "Back-End Skills" },
    { id: "Other Relevant Skills", name: "Other Relevant Skills" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I specialize in React Native development with a strong foundation in
            related technologies and tools.
          </p>
        </div>

        <div className="animate-on-scroll opacity-0">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className="progress-bar bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "0%" }}
                          data-width={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
