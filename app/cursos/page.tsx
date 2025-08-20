import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {  Monitor, Home, Check } from 'lucide-react'

export default function CursosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      
      <section className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Cursos</h1>
          <p className="text-xl">Aprende con los mejores profesores, online o a domicilio</p>
        </div>
      </section>

      {/* Courses */}
      {/* Esta sección heredará 'bg-background' correctamente */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* Violin Course */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/imgs/banner-gral.jpg"
                  alt="Curso de violín"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                {/* El Badge por defecto de Shadcn se adapta bien */}
                <Badge className="mb-4">Instrumento de Cuerda</Badge>
                <h2 className="text-3xl font-bold mb-4">Curso de Violín</h2>
                <p className="text-muted-foreground mb-6">
                  Domina el violín desde cero o perfecciona tu técnica. Nuestro programa incluye 
                  técnica de arco, postura, lectura musical y repertorio clásico y contemporáneo.
                </p>
                
                <div className="space-y-4 mb-6">
                 
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Técnica de arco y digitación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Lectura de partituras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Repertorio clásico y moderno</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Preparación para exámenes</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900">
                    <Monitor className="w-4 h-4 mr-2" />
                    Clase Online
                  </Button>
                  {/* El botón 'outline' ya se adapta por defecto */}
                  <Button size="lg" variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Clase a Domicilio
                  </Button>
                </div>
              </div>
            </div>

            {/* Singing Course  */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="md:order-2">
                <Image
                  src="/imgs/banner-gral.jpg"
                  alt="Curso de canto"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:order-1">
                <Badge className="mb-4">Técnica Vocal</Badge>
                <h2 className="text-3xl font-bold mb-4">Curso de Canto</h2>
                <p className="text-muted-foreground mb-6">
                  Desarrolla tu voz con técnicas profesionales. Aprende respiración, afinación, 
                  proyección vocal y expresión artística en diferentes géneros musicales.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Técnicas de respiración</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Afinación y oído musical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Interpretación y expresión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Repertorio variado</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900">
                    <Monitor className="w-4 h-4 mr-2" />
                    Clase Online
                  </Button>
                  <Button size="lg" variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Clase a Domicilio
                  </Button>
                </div>
              </div>
            </div>

          
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/imgs/banner-gral.jpg"
                  alt="Curso de guitarra"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <Badge className="mb-4">Instrumento Popular</Badge>
                <h2 className="text-3xl font-bold mb-4">Curso de Guitarra</h2>
                <p className="text-muted-foreground mb-6">
                  Aprende guitarra acústica o eléctrica. Desde acordes básicos hasta técnicas 
                  avanzadas, incluyendo diferentes estilos musicales como rock, pop, folk y clásico.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Acordes y progresiones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Técnicas de rasgueo y punteo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Escalas y improvisación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-500" />
                    <span>Canciones populares</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900">
                    <Monitor className="w-4 h-4 mr-2" />
                    Clase Online
                  </Button>
                  <Button size="lg" variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Clase a Domicilio
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Precios</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card> 
              <CardHeader className="text-center">
               
                <Monitor className="w-12 h-12 mx-auto text-teal-600 dark:text-teal-400 mb-4" />
                <CardTitle className="text-2xl">Clases Online</CardTitle>
                <CardDescription>Aprende desde la comodidad de tu hogar</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">70 Bs/hora</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
                    <span>Clases individuales</span>
                  </li>
                   
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900">
                  Reservar Clase Online
                </Button>
              </CardContent>
            </Card>

            
            <Card className="relative border-teal-300 dark:border-teal-700 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-teal-600">Más Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <Home className="w-12 h-12 mx-auto text-teal-600 dark:text-teal-400 mb-4" />
                <CardTitle className="text-2xl">Clases a Domicilio</CardTitle>
                <CardDescription>Profesor en tu hogar (La Paz)</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-4">100 Bs/hora</div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-500" />
                    <span>Clases individuales</span>
                  </li>
                  {/* ... (los otros checks ya se adaptan) ... */}
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white dark:text-slate-900">
                  Reservar Clase a Domicilio
                </Button>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 dark:bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¡Reserva tu Primera Clase!</h2>
          <p className="text-xl mb-8">Primera clase gratuita para nuevos estudiantes</p>
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
            Contactar Ahora
          </Button>
        </div>
      </section>
    </div>
  )
}