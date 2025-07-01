import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);

  // Update filtered projects whenever activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category && project.category.toLowerCase() === activeFilter.toLowerCase()
      );
      setVisibleProjects(filtered);
    }
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animateElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const categories = ['all', 'mobile', 'web', 'backend'];

  // For debugging
  console.log('Active filter:', activeFilter);
  console.log('Visible projects:', visibleProjects);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one demonstrates different skills
            and technologies in my development arsenal.
          </p>
        </div>
{/* 
        <div className="flex justify-center mb-8 animate-on-scroll opacity-0">
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No projects available for this category.
            </div>
          ) : (
            visibleProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex flex-col animate-on-scroll opacity-0 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative group h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-end space-x-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                            aria-label="GitHub Repository"
                          >
                            <GitHub className="h-5 w-5 text-white" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="h-5 w-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="pt-2 mt-auto border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {project.category}
                    </span>
                    <a
                      href={project.demo || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      Learn more
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 