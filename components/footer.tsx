import Link from "next/link"
import { Music, MessageCircle, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Music className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold">Vibrato Academia</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La mejor academia de música online de Bolivia. Aprende violín, canto y guitarra 
              con profesores expertos desde la comodidad de tu hogar o con clases a domicilio.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://wa.me/59170000000" 
                className="text-gray-300 hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link 
                href="https://www.tiktok.com/@vibratoacademia" 
                className="text-gray-300 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link 
                href="https://www.instagram.com/vibratoacademia" 
                className="text-gray-300 hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://www.facebook.com/vibratoacademia" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-gray-300 hover:text-white transition-colors">
                  Nuestros Cursos
                </Link>
              </li>
              <li>
                <Link href="/cultura" className="text-gray-300 hover:text-white transition-colors">
                  Blog y Eventos
                </Link>
              </li>
              <li>
                <Link href="/venta" className="text-gray-300 hover:text-white transition-colors">
                  Tienda Musical
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-300">
              <li>La Paz, Bolivia</li>
              <li>WhatsApp: +591 7000-0000</li>
              <li>Email: info@vibratoacademia.com</li>
              <li>Horarios: Lun-Sáb 9:00-20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Vibrato Academia de Música Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
