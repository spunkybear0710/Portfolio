const Experience = () => {
  const experiences = [
    {
      title: "Team Lead – Smart India Hackathon (SIH) 2024 Finalist",
      organization: "Smart India Hackathon (SIH)",
      year: "2024",
      description: "As the team leader, I guided our multidisciplinary team through the rigorous selection process, culminating in our participation in the SIH 2024 Grand Finale. We tackled real-world challenges, applying our skills in Java, DSA, and web development to devise innovative solutions. This experience honed my leadership, problem-solving, and collaborative abilities."
    },
    {
      title: "Winner – Oracle Cloud Computing Hackathon 2024",
      organization: "Oracle Cloud Computing Hackathon",
      year: "2024",
      description: "Under my leadership, our team clinched first place in the Oracle Cloud Computing Hackathon. We developed a scalable cloud-based application utilizing Oracle Cloud Infrastructure (OCI) services, demonstrating proficiency in cloud computing and teamwork."
    },
    {
      title: "Participant – Genathon 2024",
      organization: "College-Level Hackathon",
      year: "2024",
      description: "Engaged in Genathon 2024, a college-level hackathon, where we collaborated to develop a web application addressing campus-related issues. This experience enhanced my skills in full-stack development and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Starfield" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title fade-in">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-4">{experience.organization} | {experience.year}</p>
                <p className="text-gray-300 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
