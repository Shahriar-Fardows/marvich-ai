import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Swal from "sweetalert2"

export const Contact = () => {
  // Form state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Log form data to console

    // Show sweet alert
    Swal.fire({
      title: "¡Mensaje Enviado!",
      text: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#06b6d4",
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-white">CONTACTO</h2>
          <h3 className="text-4xl font-bold text-cyan-400">HABLEMOS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Left side - Map and Contact Info */}
          <div className="animate-fade-right order-1 ">
            {/* Map at the top */}
            <div className="mb-8">
              <div className="bg-gray-700 rounded-lg h-80 overflow-hidden shadow-lg">
                {/* This would be a map in a real implementation */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53231.43021538343!2d-70.59993507832033!3d-33.41827010000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf2c2c9b61d5%3A0x8f1b6b9a96f8680e!2sLas%20Condes%2C%20Santiago%20Metropolitan%20Region%2C%20Chile!5e0!3m2!1sen!2s!4v1714149371889!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la oficina"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-semibold text-white">Teléfono</h5>
                  <p className="text-gray-300">+562 32341267</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-700/50 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-semibold text-white">Email</h5>
                  <p className="text-gray-300">contacto@marvich-ai.cl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="animate-fade-left order-1 md:order-2">
            <div className="bg-gray-700/30 p-4 md:p-12  rounded-lg shadow-lg backdrop-blur-sm">
              <h4 className="text-2xl font-bold mb-6 text-white">Envíenos un mensaje</h4>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre y Apellido
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Su nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Su email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Website
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Asunto del mensaje"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Su mensaje"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 w-full md:w-auto"
                  >
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
