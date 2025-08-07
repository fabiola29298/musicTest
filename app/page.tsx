import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Music, Users, Award, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Vibrato Academia de Música Online
              </h1>
              <p className="text-xl mb-8">
                Aprende música desde casa o en persona con nuestros profesores expertos. 
                Clases de violín, canto y guitarra adaptadas a tu ritmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                  Reserva tu Primera Clase
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Ver Cursos
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/music-teacher.png"
                alt="Profesor de música con instrumentos"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Vibrato Academia?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Music className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Clases Online y Presenciales</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Flexibilidad total: aprende desde casa o recibe clases a domicilio
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Profesores Expertos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Instructores certificados con años de experiencia en enseñanza musical
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Método Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clases adaptadas a tu nivel y objetivos musicales específicos
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>Horarios Flexibles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Programa tus clases según tu disponibilidad de tiempo
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Cursos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/violin-lessons.png"
                  alt="Clases de violín"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Curso de Violín</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Desde principiante hasta avanzado. Técnica, teoría y repertorio clásico y moderno.
                </CardDescription>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/singing-lessons-microphone.png"
                  alt="Clases de canto"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Curso de Canto</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Desarrolla tu voz con técnicas profesionales. Respiración, afinación y expresión.
                </CardDescription>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image
                  src="/acoustic-guitar-lesson.png"
                  alt="Clases de guitarra"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle>Curso de Guitarra</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Guitarra acústica y eléctrica. Acordes, escalas y tu estilo musical favorito.
                </CardDescription>
                <Button className="w-full">Ver Detalles</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/cursos">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Ver Todos los Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para comenzar tu viaje musical?</h2>
          <p className="text-xl mb-8">Reserva tu primera clase gratuita y descubre tu potencial musical</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Reservar Clase Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
