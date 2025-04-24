import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Bot, Camera, Layers3, LayoutDashboard, Network ,  } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)
  const swiperRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  console.log(isMobile)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const solutions = [
    {
        title: "Inteligencia Artificial",
        description:
          "Nuestras Soluciones de AI y machine learning se aplican a datos espaciales capturados por diferentes sensores para extraer información valiosa y automatizar procesos.",
        icon: <Bot className="w-16 h-16 text-cyan-400" />, // AI related
      },
      {
        title: "Gemelos digitales BIM",
        description:
          "Capture solo una vez, utilice muchas veces y para diferentes aplicaciones. Creamos modelos digitales precisos de sus activos físicos para optimizar operaciones.",
        icon: <Layers3 className="w-16 h-16 text-cyan-400" />, // BIM and 3D Models
      },
      {
        title: "Ingeniería de servicios públicos",
        description:
          "Contamos con la mejor tecnología de identificación de infraestructura subterránea para aplicaciones de mantenimiento y planificación urbana.",
        icon: <Network className="w-16 h-16 text-cyan-400" />, // Urban/Infra planning
      },
      {
        title: "Dashboard y apps",
        description:
          "Hemos contruido un ecosistema modular resolver retos o problemas que van desde ...",
        icon: <LayoutDashboard className="w-16 h-16 text-cyan-400" />, // Dashboard related
      },
      {
        title: "Fotografia y lidaraerotransportado",
        description:
          "Nuestros servicios cubren toda la cadena deproduccion de datos espaciales ...",
        icon: <Camera className="w-16 h-16 text-cyan-400" />, // Photography and LiDAR
      },
      
    
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-white">NUESTRAS</h2>
          <h3 className="text-4xl font-bold text-cyan-400">SOLUCIONES</h3>
        </div>

        <div className="relative">
          {/* Custom navigation arrows */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-10 h-10 rounded-full bg-gray-800/80 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors border border-gray-700"
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

          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-10 h-10 rounded-full bg-gray-800/80 text-white flex items-center justify-center backdrop-blur-sm hover:bg-gray-700 transition-colors border border-gray-700"
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
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".solutions-pagination",
              bulletClass: "w-3 h-3 rounded-full bg-gray-600 inline-block mx-1 cursor-pointer transition-colors",
              bulletActiveClass: "!bg-cyan-500",
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="solutions-swiper"
          >
            {solutions.map((solution, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-gray-800 rounded-lg p-8 h-full group hover:bg-gray-700 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">{solution.title}</h4>
                    <p className="text-gray-300 mb-6 flex-grow">{solution.description}</p>
                    <button className="mt-auto bg-gray-700 hover:bg-gray-600 text-cyan-400 font-medium py-2 px-4 rounded-md transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                      Más Información
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="flex justify-center mt-8">
            <div className="solutions-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
