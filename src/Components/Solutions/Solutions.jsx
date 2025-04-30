

import { useState, useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const AISection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // State for managing dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null)

  // Toggle dropdown function
  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null)
    } else {
      setOpenDropdown(index)
    }
  }

  // Content for the three cards based on client requirements
  const cards = [
    {
      title: "Qué procesamos",
      description: "Capturamos y procesamos datos geoespaciales de múltiples sensores:",
      image: "https://cdn.sanity.io/images/hvd5n54p/production/74fa61adf60d257013c87faa56b522df2e7b0503-700x700.jpg?w=307&auto=format",
      caption: "Imágenes satelitales y datos geoespaciales",
      dropdownContent: [
        "Imágenes satelitales ópticas e hiperespectrales",
        "Ortofotos",
        "LIDAR",
        "Radar GPR",
        "Imágenes 360",
      ],
      
    },
    {
      title: "Cómo lo hacemos",
      description:
        "Usamos modelos de deep learning entrenados para detectar, clasificar y vectorizar automáticamente objetos y cambios en el terreno",
      image: "https://cdn.sanity.io/images/hvd5n54p/production/8f91fd0dd656a31b2861a8fe1af756dc252dff14-480x480.jpg?w=307&auto=format",
      caption: "Procesamiento con inteligencia artificial",
      dropdownContent: [
        "Desde pequeños plantines hasta grandes infraestructuras",
        "Procesamiento masivo en minutos u horas",
        "Fusión de datos multifuente",
      ],
      
    },
    {
      title: "Para qué lo hacemos",
      description: "Para que puedas tomar decisiones inteligentes, rápidas y sostenibles",
      image: "https://cdn.sanity.io/images/hvd5n54p/production/4c120115b62a94c8be06330d3302d59cbb01a842-683x683.png?w=307&auto=format",
      caption: "Visualización de datos y análisis",
      dropdownContent: [
        "Visualización en dashboards interactivos",
        "Alertas tempranas",
        "Análisis por API integrada",
        "Automatización de reportes y acciones correctivas",
      ],
      
    },
  ]

  return (
    <section id="ai-section" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Automatizamos el monitoreo remoto geoespacial con inteligencia artificial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                {index === 0 ? "Look broader." : index === 1 ? "Look closer." : "Look deeper."}
              </h3>

              <div className="relative overflow-hidden rounded-xl border-2 border-cyan-400 flex-grow mb-4">
                <img
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                    <p className="text-gray-300 text-sm">{card.caption}</p>
                  </div>
                </div>
              </div>

              {/* Description text below the image */}
              <p className="text-gray-300 mb-4">{card.description}</p>

              {/* Dropdown button */}
              <div className="relative w-full mt-auto">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-cyan-400 font-medium py-3 px-4 rounded-md transition-all duration-300 hover:text-white flex items-center justify-between group"
                >
                  <span>Más información</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${openDropdown === index ? "rotate-180" : ""} group-hover:text-white`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Dropdown content */}
                {openDropdown === index && (
                  <div className="absolute z-10 w-full mt-2 bg-gray-800 rounded-md shadow-lg py-4 px-6 text-left transform transition-all duration-300 ease-in-out">
                    <ul className="space-y-2">
                      {card.dropdownContent.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-200 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                        
                         <span>{item}</span>
                         
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AISection
