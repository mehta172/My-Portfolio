import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Cpu, Zap, Shield, Clock } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "32-bit RISC-V Processor",
      description: "Complete implementation of RISC-V RV32I instruction set with 5-stage pipeline, branch prediction, and cache hierarchy.",
      image: "https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg",
      technologies: ["SystemVerilog", "UVM", "Synopsys DC", "RISC-V"],
      features: ["5-stage Pipeline", "Branch Prediction", "L1/L2 Cache", "AXI4 Interface"],
      performance: { frequency: "1.2 GHz", power: "150 mW", area: "2.5 mm²" },
      icon: <Cpu className="text-blue-400" size={24} />,
      category: "Processor Design"
    },
    {
      title: "Low-Power DDR4 Controller",
      description: "High-performance memory controller with advanced power management, achieving 40% power reduction while maintaining throughput.",
      image: "https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg",
      technologies: ["Verilog", "Cadence", "DDR4", "DFT"],
      features: ["Power Gating", "Dynamic Voltage Scaling", "ECC Support", "QoS Management"],
      performance: { frequency: "1.6 GHz", power: "75 mW", area: "1.8 mm²" },
      icon: <Zap className="text-cyan-400" size={24} />,
      category: "Memory Design"
    },
    {
      title: "Cryptographic Accelerator",
      description: "Hardware implementation of AES-256, RSA, and ECC algorithms with side-channel attack protection and high throughput.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      technologies: ["VHDL", "Xilinx", "AES", "RSA", "ECC"],
      features: ["Multi-Algorithm", "Side-Channel Protection", "Key Management", "DMA Interface"],
      performance: { frequency: "800 MHz", power: "200 mW", area: "3.2 mm²" },
      icon: <Shield className="text-purple-400" size={24} />,
      category: "Security"
    },
    {
      title: "Clock Domain Crossing Bridge",
      description: "Robust CDC solution for multi-clock systems with automated metastability detection and advanced synchronization schemes.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      technologies: ["SystemVerilog", "SVA", "Formal Verification", "CDC"],
      features: ["Metastability Detection", "FIFO Synchronizers", "Handshake Protocol", "Formal Proven"],
      performance: { frequency: "2.0 GHz", power: "25 mW", area: "0.5 mm²" },
      icon: <Clock className="text-green-400" size={24} />,
      category: "Infrastructure"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Innovative RTL designs pushing the boundaries of performance and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-blue-500/30 overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {project.icon}
                    <span className="text-gray-300 text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Performance:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-700/30 rounded-lg p-2">
                      <div className="text-blue-400 font-bold text-sm">{project.performance.frequency}</div>
                      <div className="text-gray-400 text-xs">Frequency</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-2">
                      <div className="text-cyan-400 font-bold text-sm">{project.performance.power}</div>
                      <div className="text-gray-400 text-xs">Power</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-2">
                      <div className="text-purple-400 font-bold text-sm">{project.performance.area}</div>
                      <div className="text-gray-400 text-xs">Area</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm">
                    <Github size={16} />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg transition-colors duration-300 text-sm">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;