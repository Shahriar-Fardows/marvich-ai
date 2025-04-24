import { BrainCircuit, CuboidIcon as Cube3d, PlugIcon as Pipeline, LineChart, Database, Shield } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const Solutions = () => {
    const solutions = [
        {
          title: "Inteligencia Artificial",
          description:
            "Nuestras Soluciones de AI y machine learning se aplican a datos espaciales capturados por diferentes sensores para extraer información valiosa y automatizar procesos.",
          icon: <BrainCircuit className="w-16 h-16 text-cyan-400" />,
        },
        {
          title: "Gemelos digitales BIM",
          description:
            "Capture solo una vez, utilice muchas veces y para diferentes aplicaciones. Creamos modelos digitales precisos de sus activos físicos para optimizar operaciones.",
          icon: <Cube3d className="w-16 h-16 text-cyan-400" />,
        },
        {
          title: "Ingeniería de servicios públicos",
          description:
            "Contamos con la mejor tecnología de identificación de infraestructura subterránea para aplicaciones de mantenimiento y planificación urbana.",
          icon: <Pipeline className="w-16 h-16 text-cyan-400" />,
        },
        {
          title: "Análisis predictivo",
          description:
            "Anticipe tendencias y comportamientos futuros con nuestros modelos predictivos que ayudan a tomar decisiones proactivas y estratégicas.",
          icon: <LineChart className="w-16 h-16 text-cyan-400" />,
        },
        {
          title: "Gestión de datos espaciales",
          description:
            "Almacenamiento, procesamiento y análisis de grandes volúmenes de datos geoespaciales con tecnologías optimizadas para rendimiento.",
          icon: <Database className="w-16 h-16 text-cyan-400" />,
        },
        {
          title: "Seguridad y cumplimiento",
          description:
            "Nuestras soluciones garantizan el cumplimiento de normativas y estándares de seguridad en el manejo de datos sensibles y críticos.",
          icon: <Shield className="w-16 h-16 text-cyan-400" />,
        },
      ]
    
      return (
        <section id="solutions" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className=" text-white">NUESTRAS</h2>
              <h3 className="text-4xl font-bold text-cyan-400">SOLUCIONES</h3>
            </div>
    
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={true}
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
              modules={[Pagination, Navigation]}
              className="solutions-swiper "
            >
              {solutions.map((solution, index) => (
                <SwiperSlide key={index}>
                  <div className="card flex flex-col items-center text-center h-full">
                    <div className="mb-6">{solution.icon}</div>
                    <h4 className="text-xl font-bold mb-4 text-white">{solution.title}</h4>
                    <p className="text-gray-300 mb-6 flex-grow">{solution.description}</p>
                    <button className="mt-auto bg-gray-700 hover:bg-gray-600 text-cyan-400 font-medium py-2 px-4 rounded-md transition-all duration-300">
                      Más Información
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    );
};

export default Solutions;