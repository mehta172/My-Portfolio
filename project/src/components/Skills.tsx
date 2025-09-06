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

  const technologyCategories = [
    {
      title: "Design & Verification",
      technologies: [
        "Verilog",
        "RTL Design",
        "Digital Electronics",
        "System Verilog", 
        "UVM",
        "Perl",
        "Lint",
        "CDC"
      ]
    },
    {
      title: "Protocols",
      technologies: [
        "AXI",
        "UART", 
        "SPI",
        "I2C"
      ]
    },
    {
      title: "EDA Tools",
      technologies: [
        "Xilinx Vivado",
        "Synopsys VCS",
        "Quartus Prime", 
        "QuestaSim",
        "Spyglass"
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
          {technologyCategories.map((category, categoryIndex) => (
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
                
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30 hover:bg-blue-600/30 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {[
            { label: "Projects Completed", value: "10+" },
            { label: "Years Experience", value: "1.7+" }
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