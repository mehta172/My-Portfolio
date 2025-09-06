import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Design & Verification Engineer",
      company: "Chipspirit Technologies Pvt. Ltd.",
      location: "Ambala, Haryana",
      duration: "August-2024 - Present",
      description: "I have contributed to both Design Verification and RTL Design projects.",
      achievements: [
        "Developed AXI Stream based Asynchronous FIFO with the Gray pointer synchronized logic for internal project",
        "Developed various complex Designs and debug various issues on a Client project",
        "Developed UVM testbench environment for Funtional Verification of complex ASIC designs and achieved 99.5% Functional coverage",
        "Developed UVM testbench environment for functional verification of FPGA based internal projet and achieved 95% Functional coverage",
        "Performed synthesis, linting and CDC analysis for design validation"
      ],
      technologies: ["Verilog","SystemVerilog", "UVM", "Synopsys VCS", "Vivado", "QuestaSim"]
    },
    {
      title: "Design & Verification Intern",
      company: "Chipspirit Technologies Pvt. Ltd.",
      location: "Ambala, Haryana",
      duration: "Jan-2024 - July-2024",
      description: "Specialized in complex SoC verification, developing comprehensive testbenches and ensuring first-silicon success for high-volume consumer products.",
      achievements: [
        "Achieved 99.5% functional coverage on 2 major SoC projects",
        "Developed reusable UVM-based verification IP reducing project time by 30%",
        "Identified and resolved 200+ critical bugs before tape-out",
        "Established verification methodology adopted company-wide"
      ],
      technologies: ["UVM", "SystemVerilog", "Functionall Verification", "Coverage Analysis", "Synopsys VCS", "Verdi", "QuestaSim"]
    },
    /*{
      title: "Digital Design Engineer",
      company: "StartupChip Inc",
      location: "San Jose, CA",
      duration: "2018 - 2019",
      description: "Full-stack VLSI engineer responsible for RTL design, synthesis, timing closure, and physical implementation of custom digital signal processing blocks.",
      achievements: [
        "Designed and implemented 5 DSP IP blocks for IoT applications",
        "Achieved timing closure on 7nm technology with 20% margin",
        "Optimized area utilization by 25% through architectural improvements",
        "Collaborated with analog team for mixed-signal integration"
      ],
      technologies: ["Verilog", "Synopsys DC", "Primetime", "7nm PDK", "DSP Design"]
    }*/
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/5" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Building innovative semiconductor solutions across industry-leading companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 300 + 300}ms` }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-blue-500/30 p-8 transition-all duration-300 hover:transform hover:scale-105 group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {exp.title}
                          </h3>
                          <h4 className="text-xl text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-white font-semibold mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;