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
    title: "Cuckoodent (B2B Dental Clinic Platform)",
    description: "A comprehensive B2B Dental Clinic Platform featuring multi-vendor workflows, appointment management, and administrative controls to streamline clinic operations.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Fire Base", "PHP Laraval", "Mysql", "Redux"],
    category: 'mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.cuckoodent.app',
  },
  {
    id: 2,
    title: "Wyndo (B2C Travel Booking Platform)",
    description: "A B2C travel booking platform featuring trip creation, vendor management, and customer booking features designed for a seamless travel planning experience.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Fire Base", "PHP Laraval", "Socket.io", "Mysql", "Redux"],
    category: 'mobile',
  },
  {
    id: 3,
    title: "Health Umbrella (Healthcare Platform)",
    description: "A healthcare booking platform that delivers physiotherapy, homecare, and medical service booking features with user-friendly scheduling and provider management.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Fire Base", "PHP Laraval", "Socket.io", "Mysql", "Redux"],
    category: 'mobile',
  },
  {
    id: 4,
    title: "Thirukalyanam (Matrimony Platform)",
    description: "A matrimony platform providing profile management, matchmaking, and user engagement features with secure authentication and privacy controls.",
    image: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "PHP Laravel", "Fire Base", "Mysql", "Socket.io", "TailwindCSS"],
    category: 'web',
    demo: 'https://www.thirukalyanam.in/',
  },
  {
    id: 5,
    title: "Kodukku",
    description: "Kodukku is the all-in-one app designed to simplify your life by connecting you with your community. Whether you're looking to buy, sell, donate blood, find a job, stay updated on local events, or share your talents, Kodukku has everything you need in one place.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Socket.io", "Fire Base", "Mysql", "FCM", "Redux"],
    category: 'mobile',
    demo: 'https://play.google.com/store/apps/details?id=com.kodukkuoffcials&pcampaignid=web_share',
  },
  // {
  //   id: 6,
  //   title: "E-Commerce Website",
  //   description: "Developed a fully functional, responsive e-commerce web application using React and Redux for state management. Integrated Fake Store API to fetch and display product listings.",
  //   image: `${ecommerce}`,
  //   technologies: ["React", "Redux", "Bootstrap", "Fake API"],
  //   category: 'web',
  //   github: 'https://github.com/Sarankumar2622/Ecommecre',
  //   demo: "https://ecommerce2622.netlify.app/",
  // },
  // {
  //   id: 7,
  //   title: "Live Wire Website",
  //   description: "Recreated a responsive and visually accurate replica of the LIVEWIRE official website/page to match the original branding and functionality.",
  //   image: `${livewire}`,
  //   technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  //   category: 'web',
  //   github: 'https://github.com/Sarankumar2622/academicwebsite',
  //   demo: "https://livewire1.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Voice E-Mail for Visually Challenged",
  //   description: "An innovative voice-assisted email system designed for visually challenged individuals, utilizing speech-to-text and text-to-speech technologies for email management.",
  //   image: `${voice}`,
  //   technologies: ["React Native", "Speech-to-Text", "Text-to-Speech", "Local Storage"],
  //   category: 'mobile',
  //   github: 'https://github.com/Sarankumar2622',
  // },
];
