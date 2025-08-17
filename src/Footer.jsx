import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // Smooth scroll to the section
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
        
        {/* Navigation Links */}
        <div className="flex space-x-8 text-lg font-medium">
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className="hover:text-white transition cursor-pointer"
          >
            Home
          </a>
          <a 
            href="#helplines" 
            onClick={(e) => handleNavClick(e, "#helplines")}
            className="hover:text-white transition cursor-pointer"
          >
            Helplines
          </a>
          <a 
            href="#resources" 
            onClick={(e) => handleNavClick(e, "#resources")}
            className="hover:text-white transition cursor-pointer"
          >
            Resources
          </a>
          <a 
            href="#assessment" 
            onClick={(e) => handleNavClick(e, "#assessment")}
            className="hover:text-white transition cursor-pointer"
          >
            Assessment
          </a>
        </div>

        {/* Social Links */}
        <div className="flex space-x-10 text-3xl">
          <a 
            href="mailto:dikshakanojia2536@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
          <a 
            href="https://www.linkedin.com/in/diksha-kanojia1/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/Diksha-Kanojia" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Branding / Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} ReachOut. All rights reserved.
        </p>
      </div>
    </footer>
  );
}