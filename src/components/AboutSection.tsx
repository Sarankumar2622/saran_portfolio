import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="relative">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Developer working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <p className="text-white text-center">
                  <span className="block text-2xl font-bold">1.5+</span>
                  <span className="text-sm">Years Exp.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              React Native & Full-Stack Developer
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am a dedicated React Native and Full-Stack Developer with 1.5+ years of professional experience building and deploying scalable cross-platform mobile applications for Android and iOS, as well as responsive web applications.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Throughout my career, I've worked on diverse platforms ranging from B2B Dental Clinic platforms and B2C Travel Booking systems, to Healthcare platforms, Matrimony platforms, and HRMS applications. I am highly proficient in React Native, React.js, Node.js, Express.js, Socket.io, Firebase, and databases like MongoDB, MySQL, and MS SQL.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I am passionate about clean component architecture, performance optimization, real-time communication (Socket.io, WebRTC), and delivering seamless, user-centric digital solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Amudhalakshmi Systems (2025 - Present)</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Kodukku Classifieds (2024 - 2025)</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">M.C.A (Salem) – 2024</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">B.Sc. Mathematics (Vellore) – 2022</span>
              </div>
            </div>

            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;