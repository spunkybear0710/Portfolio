import { Calculator, Users, Satellite, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Web-Based BMI Calculator",
      icon: <Calculator className="text-primary text-2xl" />,
      description: "Developed a responsive web application using JavaScript and HTML/CSS to calculate Body Mass Index (BMI). Integrated logic to provide personalized dietary suggestions based on BMI categories, enhancing user engagement.",
      technologies: ["JavaScript", "HTML/CSS", "Responsive Design"]
    },
    {
      title: "Student Management System",
      icon: <Users className="text-primary text-2xl" />,
      description: "Built a comprehensive web application for managing student records, including functionalities for adding, updating, and deleting student information. Implemented features to generate and download student reports in CSV format, streamlining administrative tasks.",
      technologies: ["Web Application", "CRUD Operations", "CSV Export"]
    },
    {
      title: "Lunar Crater Detection",
      icon: <Satellite className="text-primary text-2xl" />,
      description: "Engineered a system to detect and analyze lunar craters using deep convolutional neural networks. Utilized Terrain Mapping Camera images from the Chandrayaan-2 mission to train and validate the model, achieving high accuracy in crater identification. (SIH project)",
      technologies: ["Deep Learning", "CNN", "Computer Vision"]
    },
    {
      title: "DDoS Attack Prevention",
      icon: <Shield className="text-primary text-2xl" />,
      description: "Designed a cloud-based architecture model to detect and prevent DDoS activities. Implemented real-time monitoring and alert systems to enhance security measures against potential DDoS threats. (under development)",
      technologies: ["Cloud Security", "Real-time Monitoring", "Architecture Design"]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Nebula Background */}
      <div className="absolute inset-0 opacity-25">
        <img 
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Nebula" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title fade-in">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card p-6 fade-in">
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-bold ml-3">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
