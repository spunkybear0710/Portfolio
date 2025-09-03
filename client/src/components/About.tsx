import { MapPin, GraduationCap, University, Trophy, Medal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Cosmic particles" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 fade-in">
            <h3 className="text-2xl font-bold mb-4 text-primary">Career Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Motivated and detail-oriented  Computer Science student with a strong 
              foundation in Java programming and API web development along with DevOps. Proficient in building RESTful APIs 
              and developing web applications using Java frameworks such as Spring Boot.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Demonstrated ability to apply object-oriented design principles and collaborate effectively 
              in team environments. Eager to leverage technical skills and academic knowledge to contribute 
              to innovative software development projects.
            </p>
          </div>
          
          <div className="glass-card p-8 fade-in">
            <h3 className="text-2xl font-bold mb-6 text-primary">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-primary mr-3" size={20} />
                <span>Jabalpur, Madhya Pradesh</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="text-primary mr-3" size={20} />
                <span>B.Tech Computer Science (2027)</span>
              </div>
              <div className="flex items-center">
                <University className="text-primary mr-3" size={20} />
                <span>Gyan Ganga College of Technology</span>
              </div>
              <div className="flex items-center">
                <Trophy className="text-primary mr-3" size={20} />
                <span>Oracle Hackathon Winner 2024</span>
              </div>
              <div className="flex items-center">
                <Medal className="text-primary mr-3" size={20} />
                <span>SIH 2024 Participant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
