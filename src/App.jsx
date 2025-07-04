import React, { useState, useEffect } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      url: 'https://mail.google.com/mail/?view=cm&to=support@donet.co&su=Hello%20from%20your%20website',
      bgGradient: 'from-red-500 to-red-600',

    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/donet_co',
      bgGradient: 'from-pink-500 to-orange-500',

    },
    {
      icon: 'fab fa-x-twitter',
      name: 'X',
      url: 'https://x.com/donet_co',
      bgGradient: 'from-gray-800 to-black',

    },
    {
      icon: 'fab fa-discord',
      name: 'Discord',
      url: 'https://discord.gg/Rw4jbwAtjD',
      bgGradient: 'from-indigo-500 to-purple-600',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div
        className="absolute w-64 h-64 bg-gradient-radial from-yellow-500/5 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 text-center pt-16 sm:pt-0">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[15rem] font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4 tracking-tight leading-none animate-pulse">
              COMING
            </h1>
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 bg-clip-text text-transparent tracking-wider">
              SOON
            </h2>
          </div>

          <div className="max-w-3xl mx-auto mb-16 sm:mb-20">
            <p className="text-gray-300 text-base sm:text-lg md:text-2xl font-light leading-relaxed px-4">
              Sesuatu yang luar biasa sedang dalam persiapan.
              <span className="text-yellow-400 font-medium block mt-2"> Bersiaplah untuk pengalaman yang tak terlupakan.</span>
            </p>
          </div>
        </main>

        <footer className="p-6 sm:p-8 lg:p-12 bg-gradient-to-t from-black/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
                Follow Our Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center p-4 sm:p-6 lg:p-8 bg-gray-800/40 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/10"
                >
                  <div className={`w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${social.bgGradient} flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <i className={`${social.icon} text-white text-lg sm:text-3xl transition-all duration-300`}></i>
                  </div>

                  <span className="text-sm sm:text-base font-semibold text-gray-300 group-hover:text-white transition-colors mb-1 sm:mb-2">
                    {social.name}
                  </span>

                  {/* <span className="text-xs sm:text-sm text-yellow-400 font-medium text-center">
                    {social.description}
                  </span> */}

                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-yellow-400/0 group-hover:border-yellow-400/20 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            <div className="text-center pt-6 sm:pt-8 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm mb-2">
                Stay connected for the latest updates
              </p>
              <p className="text-gray-600 text-xs">
                © 2025 Made with 💛 in Indonesia
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;