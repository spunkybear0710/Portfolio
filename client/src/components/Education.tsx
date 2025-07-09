const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
      institution: "Gyan Ganga College of Technology, Jabalpur, Madhya Pradesh",
      details: "Graduation year: 2027"
    },
    {
      degree: "Senior Secondary (Class 12)",
      institution: "DAV Public School, Cantonment Area, Gaya, Bihar",
      details: "Graduated: 2023 | Achieved 80% in CBSE examinations"
    },
    {
      degree: "Secondary (Class 10)",
      institution: "National Herald Public School",
      details: "Graduated: 2021 | Secured 94.2% in CBSE board examinations"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      {/* Starfield Background */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Starfield" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title fade-in">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <div key={index} className="timeline-item fade-in">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{education.degree}</h3>
                <p className="text-gray-400 mb-2">{education.institution}</p>
                <p className="text-gray-300">{education.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
