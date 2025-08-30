import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Zap, Award } from 'lucide-react';

const About = () => {
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

  const highlights = [
    {
      icon: <Cpu className="text-blue-400" size={32} />,
      title: "Digital Design Expert",
      description: "Specialized in RTL design, verification, and synthesis with 5+ years experience"
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "High-Performance Systems",
      description: "Optimized designs achieving 20% better power efficiency and 30% speed improvement"
    },
    {
      icon: <Award className="text-purple-400" size={32} />,
      title: "Industry Recognition",
      description: "Published researcher with 12+ papers in top-tier VLSI conferences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur-sm" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className={`text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionate about pushing the boundaries of semiconductor technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-gray-700/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="text-blue-400" size={120} />
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated RTL design engineer with a passion for creating innovative semiconductor 
              solutions. My expertise spans across RTL design, digital circuit implementation, and 
              optimization, with a focus on high-performance and low-power systems.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gray-800/50">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;