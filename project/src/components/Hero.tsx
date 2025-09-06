import React, { useEffect, useState } from 'react';
import { ChevronDown, Cpu } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circuit Board Background */}
        <div className="circuit-board-bg">
          {/* Background circuit traces */}
          <div className="bg-traces">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="bg-trace"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${50 + Math.random() * 100}px`,
                  height: '1px',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
          
          {/* Main Chip Assembly */}
          <div className="main-chip-container">
            {/* PCB Base */}
            <div className="pcb-base">
              {/* Circuit traces leading to chip */}
              <div className="pcb-traces">
                {/* Horizontal traces */}
                <div className="pcb-trace horizontal trace-h1"></div>
                <div className="pcb-trace horizontal trace-h2"></div>
                <div className="pcb-trace horizontal trace-h3"></div>
                <div className="pcb-trace horizontal trace-h4"></div>
                
                {/* Vertical traces */}
                <div className="pcb-trace vertical trace-v1"></div>
                <div className="pcb-trace vertical trace-v2"></div>
                <div className="pcb-trace vertical trace-v3"></div>
                <div className="pcb-trace vertical trace-v4"></div>
                
                {/* Diagonal traces */}
                <div className="pcb-trace diagonal trace-d1"></div>
                <div className="pcb-trace diagonal trace-d2"></div>
              </div>
              
              {/* Connection pads */}
              <div className="connection-pads">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className="connection-pad"
                    style={{
                      left: i < 8 ? `${12.5 * i + 12.5}%` : 
                            i < 16 ? '87.5%' :
                            i < 24 ? `${87.5 - 12.5 * (i - 16)}%` : '12.5%',
                      top: i < 8 ? '12.5%' :
                           i < 16 ? `${12.5 * (i - 8) + 12.5}%` :
                           i < 24 ? '87.5%' : `${87.5 - 12.5 * (i - 24)}%`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Central Processor Chip */}
              <div className="processor-chip">
                <div className="chip-substrate">
                  {/* Die surface with circuit patterns */}
                  <div className="die-surface">
                    {/* Functional blocks */}
                    <div className="functional-blocks">
                      <div className="func-block cpu-core"></div>
                      <div className="func-block cache-l1"></div>
                      <div className="func-block cache-l2"></div>
                      <div className="func-block memory-ctrl"></div>
                      <div className="func-block io-ctrl"></div>
                      <div className="func-block power-mgmt"></div>
                    </div>
                    
                    
                    
                    {/* Binary data streams */}
                    <div className="data-streams">
                      <div className="data-stream stream-1">
                        <span>10110100</span>
                        <span>11001010</span>
                        <span>01010110</span>
                      </div>
                      <div className="data-stream stream-2">
                        <span>11010011</span>
                        <span>00110101</span>
                        <span>10101100</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chip label */}
                  <div className="chip-label">
                    <div className="chip-model">RTL-5000X</div>
                    <div className="chip-specs">32-bit RISC-V</div>
                  </div>
                </div>
                
                {/* Chip glow effects */}
                <div className="chip-glow-outer"></div>
                <div className="chip-glow-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="container mx-auto mb-24 mt-1 px-6 text-center">
          <h1 className={`text-5xl md:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-400">Design &</span>
            
            <span className="text-blue-400"> Verification</span> 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Engineer
            </span>
          </h1>
        </div>
        <div>
          <br />
          <p className={`text-xl md:text-2xl text-gray-300 mb-0 mt-32 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Designing the future of semiconductor technology with cutting-edge
            <span className="text-cyan-400"> digital circuits</span> and
            <span className="text-purple-400"> system-on-chip</span> solutions
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="#projects"
              className="px-8 mx-2 mt-4 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 mx-2 mt-4 py-4 border-2 border-purple-500 text-purple-400 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;