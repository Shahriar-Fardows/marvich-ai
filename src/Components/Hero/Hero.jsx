import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [textAnimation, setTextAnimation] = useState("fadeOut")
  const swiperRef = useRef(null)

  const heroSlides = [
    {
      tag: "Geospatial AI",
      title: "Inteligencia Artificial Geoespacial",
      subtitle: "",
      description:
        "Somos un lider regional en la combinacion de tecnologias geoespaciales,Inteligencia artificial y sensores remotos para construir soluciones innovadores y resolver problemas desafiantes.",
      buttonText: "Ponte en contacto",
      buttonLink: "/contacto",
      image: image1,
      color: "cyan",
    },
    {
      tag: "Business Intelligence",
      title: "Decisiones poderosas hechas fáciles",
      subtitle: "",
      description: "Comprenda, analice y visualice los fenómenos del mundo real de acuerdo con sus ubicaciones.",
      buttonText: "Ponte en contacto",
      buttonLink: "/soluciones",
      image: image2,
      color: "purple",
    },
    {
      tag: "AI Technology",
      title: "Transforme la productividady el valor de sus activos",
      subtitle: "",
      description:
        "Una plataforma de inteligencia artificial geoespacial (GeoA) para ayudar a nuestros partners a automatizar la loboriosa observación manual y tomar decisiones informadas rapidamente.",
      buttonText: "Ponte en contacto",
      buttonLink: "/servicios",
      image: image3,
      color: "emerald",
    },
  ]

  // Effect to handle text transition
  useEffect(() => {
    // First fade out
    setTextAnimation("fadeOut")

    // Then fade in after a short delay
    const timer = setTimeout(() => {
      setTextAnimation("fadeIn")
    }, 400)

    return () => clearTimeout(timer)
  }, [activeIndex])

  // Custom navigation
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext()
    }
  }

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev()
    }
  }

  // Get current slide color
  const currentColor = heroSlides[activeIndex].color || "cyan"
  const colorMap = {
    cyan: {
      primary: "text-cyan-400",
      bg: "bg-cyan-500",
      bgLight: "bg-cyan-500/20",
      hover: "hover:bg-cyan-600",
    },
    purple: {
      primary: "text-purple-400",
      bg: "bg-purple-500",
      bgLight: "bg-purple-500/20",
      hover: "hover:bg-purple-600",
    },
    emerald: {
      primary: "text-emerald-400",
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-500/20",
      hover: "hover:bg-emerald-600",
    },
  }

  const colors = colorMap[currentColor]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with circuit pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBzdHJva2U9IiMxQkJGQjgiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjQ1IiBjeT0iMzAiIHI9IjIiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjE1IiByPSIyIi8+PGNpcmNsZSBjeD0iMzAiIGN5PSI0NSIgcj0iMiIvPjxwYXRoIGQ9Ik0zMCAxNUwxNSAzME0zMCAxNUw0NSAzME0zMCA0NUwxNSAzME0zMCA0NUw0NSAzMCIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 w-full">
        <div className="flex flex-col md:flex-row items-center py-10 gap-8">
          {/* Text section - animated content changes */}
          <div data-aos="fade-right" className="md:w-1/2 relative">
            <div
              className={`transition-all duration-500 ${
                textAnimation === "fadeIn"
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-4"
              }`}
            >
              {/* Technology tag above title */}
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${colors.bgLight} ${colors.primary}`}
              >
                {heroSlides[activeIndex].tag}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">{heroSlides[activeIndex].title}</span>
                {heroSlides[activeIndex].subtitle && (
                  <>
                    <br />
                    <span className={colors.primary}>{heroSlides[activeIndex].subtitle}</span>
                  </>
                )}
              </h1>
              <p className="text-gray-300 mb-8 text-lg max-w-xl">{heroSlides[activeIndex].description}</p>

              <div className="flex items-center gap-4">
                {/* Button with link */}
                <a
                  href={heroSlides[activeIndex].buttonLink}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${colors.bg} text-white ${colors.hover} inline-block`}
                >
                  {heroSlides[activeIndex].buttonText}
                </a>

                {/* Custom navigation dots */}
                <div className="flex items-center gap-2 ml-4">
                  {heroSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => swiperRef.current.swiper.slideTo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? `${colors.bg} w-6` : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image section with custom navigation - Fixed dimensions */}
          <div data-aos="fade-left" className="md:w-1/2 mt-10 md:mt-0 relative ">
            {/* Custom navigation arrows */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-20">
              <button
                onClick={goToPrevSlide}
                className="w-10 h-10 rounded-full bg-gray-800/80 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors"
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-20">
              <button
                onClick={goToNextSlide}
                className="w-10 h-10 rounded-full bg-gray-800/80 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors"
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <Swiper
              ref={swiperRef}
              spaceBetween={0}
              centeredSlides={true}
              effect={"fade"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: null, // Disable default pagination
              }}
              navigation={false} // Disable default navigation
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="hero-image-swiper"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    {/* Image with fixed dimensions */}
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="rounded-lg shadow-lg object-cover w-[90vw] md:w-[100vh] h-[50vh]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
