import video from "../../assets/video/homepage-hero.mp4"
const Hero = () => {
  // Define colors for styling
  const colors = {
    primary: "text-cyan-400",
    bg: "bg-cyan-500",
    bgLight: "bg-cyan-500/20",
    hover: "hover:bg-cyan-600",
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        {/* Video background */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container mx-auto px-4 z-10 w-full">
        <div className="flex flex-col items-center py-10">
          {/* Text section - static content */}
          <div data-aos="fade-up" className="w-full">
            <div className="opacity-100 transform translate-y-0">
              {/* Technology tag above title */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors.bgLight} ${colors.primary}`}
              >
                Geospatial AI
              </div>

              <h1 className="text-3xl md:text-2xl lg:text-4xl font-bold mb-6 leading-tight max-w-4xl">
                <span className="text-cyan-400">
                Inteligencia Artificial Geoespacial: Automatización del monitoreo geoespacial: De
                los datos geoespaciales al despliegue de acciones precisas.
                </span>
              </h1>

              <p className="text-gray-300 mb-8 text-lg max-w-4xl">
                Nuestra solución de extremo a extremo basada en modelos de inteligencia artificial optimiza procesos,
                transformando datos visuales de sensores avanzados (fotografías aéreas, imágenes satelitales, LIDAR,
                radar, etc ) para la toma de decisiones críticas en tiempo útil.
              </p>

              <div className="">
                {/* Button with link */}
                <a
                  href="/contacto"
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${colors.bg} text-white ${colors.hover} inline-block`}
                >
                  Ponte en contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
