import livewire from "../image/livewire.png";
import ecommerce from "../image/Screenshot 2025-05-31 131846.png";
import voice from "../image/voice email.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'backend';
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Developed a fully functional, responsive e-commerce web application using React and Redux for state management. The project simulates a real-world online store experience using Fake Store API for product data. Built dynamic UI with Bootstrap for responsive design and modern layout.Integrated Fake Store API to fetch and display product listings, categories, and details. Implemented Redux for efficient global state management across cart, product, and user flows.Added core e-commerce features: product browsing, filtering, add to cart, and cart management.Focused on clean component architecture, reusable code, and smooth user experience",
    image: `${ecommerce}`,
    technologies: ["React", "Redux", "Bootstrap", "Fake API"],
    category: 'web',
    github: 'https://github.com/Sarankumar2622/Ecommecre',
    demo: "https://ecommerce2622.netlify.app/",
  },
  {
    id: 2,
    title: "Live Wire Website",
    description: "Recreated a responsive and visually accurate replica of the LIVEWIRE – A Division of CADD Centre Training Services Pvt Ltd – official website/page to enhance my front-end development skills. Focused on replicating design layout, typography, and component structure to match the original branding and functionality.Implemented responsive UI using modern web standards and design best practices,",
    image: `${livewire}`,
    technologies: ["HTML", "CSS", "Java Script", "jQuery"],
    category: 'web',
    github: 'https://github.com/Sarankumar2622/academicwebsite',
    demo: "https://livewire1.netlify.app/",
  },

  {
    id: 3,
    title: "Voice E-Mail for Visually Challenged",
    description: "A productivity app for managing tasks with categories, reminders, and progress tracking. Features a clean, minimalist UI with gesture-based interactions.",
    image: `${voice}`,
    technologies: ["React Native", "Redux", "Local Storage", "Notifications"],
    category: 'web',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    title: 'Chat Application Backend',
    description: 'A scalable backend for a real-time chat application with message persistence, user presence, and notifications.',
    image: 'https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'Express', 'Socket.io', 'MongoDB'],
    category: 'backend',
    github: 'https://github.com',
  },
];
