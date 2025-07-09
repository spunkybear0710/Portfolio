import { Mail, Rocket, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle floating-animation" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="particle floating-animation" style={{ left: '20%', top: '80%', animationDelay: '1s' }} />
        <div className="particle floating-animation" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
        <div className="particle floating-animation" style={{ left: '70%', top: '70%', animationDelay: '3s' }} />
        <div className="particle floating-animation" style={{ left: '50%', top: '10%', animationDelay: '4s' }} />
      </div>

      {/* Deep Space Background */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Deep space nebula" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="glow-text">TANUJ</span>
          <span className="text-primary ml-4">KUMAR</span>
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-gray-300">Computer Science Student & Developer</p>
        <p className="text-lg mb-8 text-gray-400 max-w-2xl mx-auto">
          Passionate about creating innovative solutions through code. Specializing in Java development, 
          web technologies, and cloud computing with a track record of hackathon victories.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-primary flex items-center gap-2"
          >
            <Mail size={20} />
            Get In Touch
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <Rocket size={20} />
            View Projects
          </button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://linkedin.com/in/tanuj-kumar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <Linkedin />
          </a>
          <a 
            href="https://github.com/tanuj-kumar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl text-gray-400 hover:text-primary transition-colors duration-300"
          >
            <Github />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
