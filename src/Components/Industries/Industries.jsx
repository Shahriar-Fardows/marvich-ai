import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import image5 from "../../assets/image5.jpg"
import image6 from "../../assets/image6.jpg"
import image7 from "../../assets/image7.jpg"
import image8 from "../../assets/image8.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Industries = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex)
  const swiperRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

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

  const industries = [
    {
      image: image5,
      title: "Forestal",
      description: "Nuestras soluciones de monitoreo remoto del ciclo forestal cbmbina iåSinas avanzadas técnicas.",
      buttonTitle: "Más información",
      buttonLink: "/industries/forestal",
    },
    {
      image: image6,
      title: "Municipal y Servicios Publicos",
      description: "Ayudan a municipios y empresas a incorporar sus actividades que cuenten informacion oportuna.",
      buttonTitle: "Más información",
      buttonLink: "/industries/municipal",
    },
    {
      image: image7,
      title: "Construccion",
      description: "Objetivo es realizar la evaluación digital y remota del avance de una obra.",
      buttonTitle: "Más información",
      buttonLink: "/industries/construccion",
    },
    {
      image: image8,
      title: "Electricidad",
      description: "Ofresemos el servicio de monitoreo a lineas Eléctricas, ductos y vias férreas.",
      buttonTitle: "Más información",
      buttonLink: "/industries/servicios",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-white">INDUSTRIAS QUE</h2>
          <h3 className="text-4xl font-bold text-cyan-400">APOYAMOS</h3>
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
              el: ".industry-pagination",
              bulletClass: "w-3 h-3 rounded-full bg-gray-600 inline-block mx-1 cursor-pointer transition-colors",
              bulletActiveClass: "!bg-cyan-500",
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            className="industries-swiper"
          >
            {industries.map((industry, index) => (
              <SwiperSlide key={index}>
                <div data-aos="zoom-in-up"
                  className="relative overflow-hidden rounded-lg group h-80 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Content overlay - always visible on mobile, visible on hover for desktop */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent 
                    ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
                    transition-opacity duration-300 flex flex-col justify-end p-6`}
                  >
                    <h4 className="text-white text-xl font-bold mb-2">{industry.title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                    <a
                      href={industry.buttonLink}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 inline-block w-fit"
                    >
                      {industry.buttonTitle}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination */}
          <div className="flex justify-center mt-8">
            <div className="industry-pagination !w-fit mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
