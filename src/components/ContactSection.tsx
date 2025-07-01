import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

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

    const animateElements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animateElements?.forEach((el) => observer.observe(el));

    return () => {
      animateElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs.send(
      'service_ju3ybxq',
      'template_7wsag62',
      formData, // { name, email, subject, message }
      '6m9L1GAajeJwchpL4'
    )
    .then(() => {
      setIsSubmitting(false);
      setSubmitMessage("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitMessage(""), 3000);
    })
    .catch((error) => {
      setIsSubmitting(false);
      console.error("Email sending error:", error);
      setSubmitMessage("Something went wrong. Please try again.");
      setTimeout(() => setSubmitMessage(""), 3000);
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Email",
      value: "sarankumar2622@gmail.com.com",
      link: "mailto:sarankumar2622@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Phone",
      value: "+91 93442 28737",
      link: "tel:+91 93442 28737",
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Location",
      value: "Chennai",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Sarankumar2622",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sarankumar-m-15188b260/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{" "}
            <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations. Reach out to me!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/3 animate-on-scroll opacity-0">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400">
                        {item.title}
                      </h4>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 animate-on-scroll opacity-0">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me A Message
              </h3>

              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="sarankumar"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="inline-flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
