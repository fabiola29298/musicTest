import Link from "next/link"
import { Music, MessageCircle, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
               {/* El icono de música ya estaba bien */}
               <Music className="h-8 w-8 text-teal-600 dark:text-teal-400" />
              
              <span className="text-xl font-bold text-foreground">Vibrato Academia</span>
            </div>
            
            <p className="mb-6 max-w-md">
              La mejor academia de música online de Bolivia. Aprende violín, canto y guitarra 
              con profesores expertos desde la comodidad de tu hogar o con clases a domicilio.
            </p>
            <div className="flex space-x-4">
             <Link 
                href="https://wa.me/59170000000" 
                className="text-muted-foreground hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link 
                href="https://www.tiktok.com/@vibratoacademia" 
                className="text-muted-foreground hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* El `fill="currentColor"` es genial, se adaptará automáticamente al color del texto */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link 
                href="https://www.instagram.com/vibratoacademia" 
                className="text-muted-foreground hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://www.facebook.com/vibratoacademia" 
                className="text-muted-foreground hover:text-blue-400 transition-colors"
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
             <h3 className="text-lg font-semibold mb-4 text-foreground">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nuestros Cursos
                </Link>
              </li>
              <li>
                <Link href="/cultura" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog y Eventos
                </Link>
              </li>
              <li>
                <Link href="/venta" className="text-muted-foreground hover:text-foreground transition-colors">
                  Tienda Musical
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Contacto</h3>
             <ul className="space-y-2">
              <li>La Paz, Bolivia</li>
              <li>WhatsApp: +591 7000-0000</li>
              <li>Email: info@vibratoacademia.com</li>
              <li>Horarios: Lun-Sáb 9:00-20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          {/* El texto aquí ya hereda 'text-muted-foreground' */}
          <p>&copy; 2024 Vibrato Academia de Música Online. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}