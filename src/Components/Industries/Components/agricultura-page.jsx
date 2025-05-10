
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"


const AgriculturaPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })

    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

   const navigate = useNavigate();

  const goToContact = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };


  return (
    <div className="bg-[#f8fafc]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/placeholder.svg?height=800&width=1600"
            alt="Agricultura regenerativa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Agricultura de Precisión</h2>
                <p className="text-gray-700 leading-relaxed">
                  Transforma tu agricultura tradicional en regenerativa con tecnología de vanguardia. Nuestras
                  soluciones de monitoreo continuo te permiten optimizar el uso de recursos, mejorar la salud del suelo
                  y aumentar la productividad de tus cultivos.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Utilizamos datos de múltiples fuentes como satélites, drones y sensores en campo para crear un sistema
                  de monitoreo integral que te proporciona información en tiempo real sobre el estado de tus cultivos,
                  niveles de humedad, salud del suelo y más.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nuestros algoritmos de inteligencia artificial analizan estos datos para identificar patrones,
                  predecir problemas potenciales y recomendar acciones específicas para cada área de tu campo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Áreas de aplicación</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
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
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultura 1"
                  className="w-full h-64 object-cover"
                />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="100">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Agricultura 2"
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Agricultura sostenible</h3>
              <p className="text-gray-600">Reduce el impacto ambiental mientras mejoras la productividad.</p>
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
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Optimización de recursos</h3>
              <p className="text-gray-600">
                Reduce costos con un uso más eficiente de agua, fertilizantes y pesticidas.
              </p>
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
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                  <path d="M16.5 9.4 7.55 4.24" />
                  <polyline points="3.29 7 12 12 20.71 7" />
                  <line x1="12" y1="22" x2="12" y2="12" />
                  <circle cx="18.5" cy="15.5" r="2.5" />
                  <path d="M20.27 17.27 22 19" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Aumento de rendimiento</h3>
              <p className="text-gray-600">
                Incrementa la productividad y calidad de tus cultivos con decisiones basadas en datos.
              </p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Regeneración del suelo</h3>
              <p className="text-gray-600">Mejora la salud y fertilidad del suelo a largo plazo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1f2937] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Transforma tu agricultura con tecnología de vanguardia
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Solicita una consulta personalizada y descubre cómo nuestras soluciones pueden optimizar tus cultivos.
          </p>
           <button
      onClick={goToContact}
      className="bg-[#22d3ee] hover:bg-[#0ea5e9] text-white font-medium py-3 px-8 rounded-md transition-colors"
    >
      CONTACTANOS
    </button>
        </div>
      </section>

      {/* Bottom Image */}
      <div className="w-full h-64">
        <img
          src="/placeholder.svg?height=400&width=1600"
          alt="Agricultura inferior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Back to Services */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-[#22d3ee] hover:text-[#0ea5e9] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Volver a servicios
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AgriculturaPage
