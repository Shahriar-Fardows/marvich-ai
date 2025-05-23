import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import image2 from "../../assets/tran2.png"

const GeospatialHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="w-full bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Single background image */}
      <div
        className="absolute inset-0 w-full h-full "
        style={{
          backgroundImage: `url(${image2 || "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main title with animation */}
          <h1
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            data-aos="fade-right"
          >
            <span className="block mb-2 sm:mb-3">Tu ventaja estratégica:</span>
             {/* Highlighted text with responsive sizing */}
             <span className="text-cyan-400 block my-3 sm:my-4 md:my-6 text-5xl sm:text-6xl md:text-8xl  font-extrabold tracking-tight">
             datos geoespaciales
            </span>
            <span className="block mb-2 sm:mb-3"> que se convierten en</span>
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
    </section>
  )
}

export default GeospatialHero
