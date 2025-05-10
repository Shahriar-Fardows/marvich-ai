"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import image1 from "../../../assets/agricultura/image1.png"
import image2 from "../../../assets/agricultura/image2.png"
import image5 from "../../../assets/agricultura/inferior.png"
import imageBanner from "../../../assets/agricultura/superior.png"

const AgriculturaPage = () => {
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
    <div className="bg-[#1f2937]">
      {/* Hero Section with Background Image */}
      <section className="relative  min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={imageBanner || "/placeholder.svg"}
            alt="Agricultura regenerativa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#22d3ee] mb-4">
              Agricultura regenerativa con inteligencia artificial geoespacial
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Optimiza tus cultivos y regenera tus suelos con monitoreo continuo basado en IA geoespacial.
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
                <h2 className="text-3xl font-bold text-[#22d3ee] mb-6">Agricultura de Precisión</h2>
                <p className="text-white leading-relaxed">
                  Transforma tu agricultura tradicional en regenerativa con tecnología de vanguardia. Nuestras
                  soluciones de monitoreo continuo te permiten optimizar el uso de recursos, mejorar la salud del suelo
                  y aumentar la productividad de tus cultivos.
                </p>
                <p className="text-white leading-relaxed mt-4">
                  Utilizamos datos de múltiples fuentes como satélites, drones y sensores en campo para crear un sistema
                  de monitoreo integral que te proporciona información en tiempo real sobre el estado de tus cultivos,
                  niveles de humedad, salud del suelo y más.
                </p>
                <p className="text-white leading-relaxed mt-4">
                  Nuestros algoritmos de inteligencia artificial analizan estos datos para identificar patrones,
                  predecir problemas potenciales y recomendar acciones específicas para cada área de tu campo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#22d3ee] mb-4">Áreas de aplicación</h3>
                <ul className="list-disc pl-6 space-y-2 text-white [&>li::marker]:text-[#22d3ee]">
                  <li>Monitoreo de salud de cultivos</li>
                  <li>Análisis de calidad y regeneración del suelo</li>
                  <li>Optimización de riego y uso de agua</li>
                  <li>Detección temprana de plagas y enfermedades</li>
                  <li>Planificación de siembra y cosecha</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={image1 || "/placeholder.svg"} alt="Agricultura 1" className="w-full h-64 object-cover" />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="100">
                <img src={image2 || "/placeholder.svg"} alt="Agricultura 2" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
     <section className="py-16 bg-[#111827]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center" data-aos="fade-up">
      Beneficios clave
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="border border-gray-700 p-8 rounded-xl shadow-md text-white" data-aos="fade-up" data-aos-delay="0">
        <div className="text-[#22d3ee] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Agricultura sostenible</h3>
        <p>Reduce el impacto ambiental mientras mejoras la productividad.</p>
      </div>

      {/* Card 2 */}
      <div className="border border-gray-700 p-8 rounded-xl shadow-md text-white" data-aos="fade-up" data-aos-delay="100">
        <div className="text-[#22d3ee] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Optimización de recursos</h3>
        <p>Reduce costos con un uso más eficiente de agua, fertilizantes y pesticidas.</p>
      </div>

      {/* Card 3 */}
      <div className="border border-gray-700 p-8 rounded-xl shadow-md text-white" data-aos="fade-up" data-aos-delay="200">
        <div className="text-[#22d3ee] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M16.5 9.4 7.55 4.24" />
            <polyline points="3.29 7 12 12 20.71 7" />
            <line x1="12" y1="22" x2="12" y2="12" />
            <circle cx="18.5" cy="15.5" r="2.5" />
            <path d="M20.27 17.27 22 19" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Aumento de rendimiento</h3>
        <p>Incrementa la productividad y calidad de tus cultivos con decisiones basadas en datos.</p>
      </div>

      {/* Card 4 */}
      <div className="border border-gray-700 p-8 rounded-xl shadow-md text-white" data-aos="fade-up" data-aos-delay="300">
        <div className="text-[#22d3ee] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#22d3ee] mb-2">Regeneración del suelo</h3>
        <p>Mejora la salud y fertilidad del suelo a largo plazo.</p>
      </div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section
  className="py-16 bg-[#1f2937] text-white bg-cover bg-center"
  style={{
    backgroundImage: `url(${image5 || "/placeholder.svg"})`,
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

export default AgriculturaPage
