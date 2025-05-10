"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import imageBanner from "../../../assets/forestal/imageBanner.png"
import image1 from "../../../assets/forestal/image1.png"
import image2 from "../../../assets/forestal/image2.png"
import imageInferior from "../../../assets/forestal/image6.png"

const ServiciosPublicosPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate()

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } })
  }

  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={imageBanner || "/placeholder.svg"}
            alt="Servicios públicos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Localización y gestión de infraestructura soterrada con IA y RA
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Optimiza la gestión de infraestructura urbana con tecnología de vanguardia para servicios públicos.
            </p>
            <button
              onClick={goToContact}
              className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-up">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Gestión Inteligente de Infraestructura</h2>
                <p className="text-gray-700 leading-relaxed">
                  La gestión de infraestructura soterrada en entornos urbanos presenta desafíos únicos. Nuestra
                  tecnología combina inteligencia artificial y realidad aumentada para revolucionar la forma en que se
                  localiza, mantiene y gestiona la infraestructura subterránea.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Mediante el uso de sensores avanzados, datos históricos y algoritmos de aprendizaje profundo, creamos
                  mapas digitales precisos de la infraestructura soterrada, permitiendo visualizarla en tiempo real a
                  través de dispositivos móviles con realidad aumentada.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Esto reduce significativamente el tiempo y costo de localización, previene daños accidentales durante
                  excavaciones y optimiza los procesos de mantenimiento y reparación.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Aplicaciones principales</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Mapeo digital de redes subterráneas</li>
                  <li>Detección y prevención de fugas</li>
                  <li>Planificación de mantenimiento predictivo</li>
                  <li>Gestión de activos en tiempo real</li>
                  <li>Coordinación de obras y prevención de daños</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
                <img
                  src={image1 || "/placeholder.svg"}
                  alt="Servicios públicos 1"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="100">
                <img
                  src={image2 || "/placeholder.svg"}
                  alt="Servicios públicos 2"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center" data-aos="fade-up">
            Beneficios clave
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="0">
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reducción de incidentes</h3>
              <p className="text-gray-600">Minimiza daños accidentales a infraestructura durante excavaciones.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22V8" />
                  <path d="m5 12-2 2 2 2" />
                  <path d="m19 12 2 2-2 2" />
                  <path d="M5 14h14" />
                  <path d="m17 2-2 2-2-2" />
                  <path d="M14 4h-4v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Eficiencia operativa</h3>
              <p className="text-gray-600">Reduce tiempos de localización y reparación de infraestructura.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Gestión centralizada</h3>
              <p className="text-gray-600">Plataforma unificada para visualizar y gestionar toda la infraestructura.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="text-[#22d3ee] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mantenimiento predictivo</h3>
              <p className="text-gray-600">Anticipa fallos y optimiza el ciclo de vida de la infraestructura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
  className="py-16 bg-[#1f2937] text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${imageInferior || "/placeholder.svg"})`,
  }}
>
  <div className="container mx-auto px-4 text-center bg-black/60 p-6 rounded-md">
    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
      Transforma tu agricultura con tecnología de vanguardia
    </h2>
    <p
      className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Solicita una consulta personalizada y descubre cómo nuestras soluciones pueden optimizar tus cultivos.
    </p>
    <button
      onClick={goToContact}
      className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md transition-colors"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      CONTACTANOS
    </button>
  </div>
</section>

    </div>
  )
}

export default ServiciosPublicosPage
