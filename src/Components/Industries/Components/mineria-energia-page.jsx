import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import imageBanner from "../../../assets/forestal/imageBanner.png"
import image1 from "../../../assets/forestal/image1.png"
import image2 from "../../../assets/forestal/image2.png"
import imageInferior from "../../../assets/forestal/image6.png"

const MineriaEnergiaPage = () => {
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
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={imageBanner || "/placeholder.svg"} alt="Minería y energía" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Análisis avanzado de operaciones mineras y energéticas
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Optimiza la eficiencia, seguridad y sostenibilidad de tus operaciones con inteligencia artificial
              geoespacial.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Transformación Digital en Minería y Energía</h2>
                <p className="text-gray-700 leading-relaxed">
                  Las operaciones mineras y energéticas enfrentan desafíos únicos en términos de eficiencia, seguridad y
                  sostenibilidad. Nuestra plataforma de inteligencia artificial geoespacial proporciona una visión
                  integral y en tiempo real de tus activos y operaciones.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Mediante el análisis de imágenes satelitales, datos de sensores terrestres y drones, nuestra
                  tecnología permite monitorear continuamente grandes extensiones de terreno, detectar anomalías,
                  optimizar la extracción de recursos y minimizar el impacto ambiental.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Nuestras soluciones se adaptan a las necesidades específicas de cada operación, proporcionando
                  información accionable para mejorar la toma de decisiones en todos los niveles.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Áreas de aplicación</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Monitoreo de operaciones y activos</li>
                  <li>Detección de cambios y anomalías</li>
                  <li>Evaluación de impacto ambiental</li>
                  <li>Optimización de extracción y producción</li>
                  <li>Gestión de riesgos y seguridad</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={image1 || "/placeholder.svg"} alt="Minería 1" className="w-full h-64 object-cover" />
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg" data-aos="fade-left" data-aos-delay="100">
                <img src={image2 || "/placeholder.svg"} alt="Minería 2" className="w-full h-64 object-cover" />
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
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reducción de costos</h3>
              <p className="text-gray-600">Optimiza operaciones y reduce gastos operativos.</p>
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Mayor seguridad</h3>
              <p className="text-gray-600">Detecta riesgos potenciales antes de que se conviertan en problemas.</p>
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
              <h3 className="text-xl font-bold text-gray-800 mb-2">Sostenibilidad</h3>
              <p className="text-gray-600">Minimiza el impacto ambiental y mejora la gestión de recursos.</p>
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
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Cumplimiento normativo</h3>
              <p className="text-gray-600">Facilita el cumplimiento de regulaciones ambientales y de seguridad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1f2937] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Lleva tus operaciones al siguiente nivel
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Solicita una evaluación personalizada y descubre cómo nuestra tecnología puede transformar tus operaciones
            mineras y energéticas.
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

      {/* Bottom Image */}
      <div className="w-full h-64">
        <img src={imageInferior || "/placeholder.svg"} alt="Minería inferior" className="w-full h-full object-cover" />
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

export default MineriaEnergiaPage
