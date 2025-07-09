import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 70, proficiency: "Intermediate" },
        { name: "C++", level: 65, proficiency: "Intermediate" },
        { name: "Python", level: 40, proficiency: "Basic" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 85, proficiency: "Advanced" },
        { name: "CSS", level: 80, proficiency: "Advanced" },
        { name: "JavaScript", level: 75, proficiency: "Intermediate" },
        { name: "RESTful APIs", level: 70, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 70, proficiency: "Intermediate" },
        { name: "SQL", level: 75, proficiency: "Intermediate" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 40, proficiency: "Basic" },
        { name: "Git", level: 70, proficiency: "Intermediate" },
        { name: "GitHub", level: 75, proficiency: "Intermediate" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              if (width) {
                (bar as HTMLElement).style.width = width + '%';
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      {/* Cosmic Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Cosmic particles" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={skillsRef}>
        <h2 className="section-title fade-in">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-6 fade-in">
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.proficiency}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        data-width={skill.level}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
