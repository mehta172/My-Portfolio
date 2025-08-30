import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Design & Verification",
      skills: [
        { name: "Verilog/SystemVerilog", level: 95 },
        { name: "VHDL", level: 90 },
        { name: "UVM", level: 85 },
        { name: "System Verilog Assertions", level: 88 }
      ]
    },
    {
      title: "EDA Tools",
      skills: [
        { name: "Synopsys DC", level: 92 },
        { name: "Cadence Genus", level: 88 },
        { name: "Mentor Graphics", level: 85 },
        { name: "Xilinx Vivado", level: 90 }
      ]
    },
    {
      title: "Specializations",
      skills: [
        { name: "Digital Signal Processing", level: 87 },
        { name: "Memory Design", level: 83 },
        { name: "Low Power Design", level: 89 },
        { name: "Clock Domain Crossing", level: 91 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900/10" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive expertise across the VLSI design flow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200 + 300}ms` }}
            >
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 100 + 800}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years Experience", value: "5+" },
            { label: "Research Papers", value: "12" },
            { label: "Patents Filed", value: "3" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 1200}ms` }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;