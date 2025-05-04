import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const GeospatialHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto md:text-center">
          {/* Main title with animation */}
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            data-aos="fade-right"
          >
            <span className="block mb-2 sm:mb-3">Tu ventaja estratégica:</span>
            <span className="block mb-2 sm:mb-3">datos geoespaciales que se</span>

            {/* Highlighted text with responsive sizing */}
            <span className="text-cyan-400 block my-3 sm:my-4 md:my-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold tracking-tight">
              convierten en
            </span>

            <span className="block">acciones concretas.</span>
          </h1>

          {/* Subtitle with animation */}
          <p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mt-6 sm:mt-8 md:mt-10"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Capture, comprenda, analice y visualice los fenómenos del mundo real para impulsar decisiones inteligentes
            de acuerdo con sus ubicaciones.
          </p>
        </div>
      </div>

      {/* Optional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-black/30 mix-blend-overlay"></div>

      {/* Optional subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(to right, #06b6d4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </section>
  )
}

export default GeospatialHero
