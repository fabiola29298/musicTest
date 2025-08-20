import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function CulturaPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Eventos Musicales del 6 de Agosto en La Paz",
      excerpt: "Celebra el día de La Paz con increíbles presentaciones musicales en toda la ciudad. Conciertos, recitales y actividades culturales.",
      date: "2024-08-06",
      category: "Eventos",
      image: "/la-paz-music-festival.png",
      featured: true
    },
    {
      id: 2,
      title: "Eventos de Fin de Semana: 10 y 11 de Agosto",
      excerpt: "No te pierdas los mejores eventos musicales del fin de semana. Desde jazz hasta música folclórica boliviana.",
      date: "2024-08-10",
      category: "Eventos",
      image: "/bolivia-music-weekend.png",
      featured: true
    },
    {
      id: 3,
      title: "La Importancia de la Música Folclórica Boliviana",
      excerpt: "Descubre la riqueza cultural de Bolivia a través de sus ritmos tradicionales y cómo influyen en la educación musical moderna.",
      date: "2024-08-05",
      category: "Cultura",
      image: "/bolivian-folk-instruments.png"
    },
    {
      id: 4,
      title: "Beneficios de Aprender Música Online",
      excerpt: "Explora las ventajas de la educación musical virtual y cómo la tecnología está revolucionando el aprendizaje musical.",
      date: "2024-08-03",
      category: "Educación",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 5,
      title: "Técnicas de Respiración para Cantantes",
      excerpt: "Aprende las técnicas fundamentales de respiración que todo cantante debe dominar para mejorar su rendimiento vocal.",
      date: "2024-08-01",
      category: "Técnica",
      image: "/placeholder.svg?height=200&width=300"
    },
    {
      id: 6,
      title: "Historia del Violín en Bolivia",
      excerpt: "Un recorrido por la historia del violín en Bolivia y su influencia en la música académica y popular del país.",
      date: "2024-07-28",
      category: "Historia",
      image: "/placeholder.svg?height=200&width=300"
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

 return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
     
      <section className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cultura Musical</h1>
          <p className="text-xl">Eventos, noticias y contenido cultural sobre el mundo de la música</p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Eventos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  {/* El Badge rojo para eventos funciona bien en ambos modos */}
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                   
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>La Paz, Bolivia</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline">Leer Más</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Últimas Publicaciones</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  
                  <Badge className="absolute top-4 left-4 bg-teal-600 dark:bg-teal-800 text-white dark:text-teal-100">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm">Leer Más</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Próximos Eventos</h2>
          <div className="space-y-6">
            
            <Card className="border-l-4 border-l-teal-600 dark:border-l-teal-400">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Concierto de Estudiantes - Recital de Fin de Mes</CardTitle>
                    <CardDescription>Presentación de nuestros estudiantes más destacados</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>30 de Agosto, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>19:00 hrs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>Teatro Municipal</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            
            <Card className="border-l-4 border-l-green-600 dark:border-l-green-500">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">Masterclass de Violín con Maestro Internacional</CardTitle>
                    <CardDescription>Clase magistral abierta al público</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-green-600 dark:text-green-500" />
                      <span>15 de Septiembre, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600 dark:text-green-500" />
                      <span>16:00 hrs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-green-600 dark:text-green-500" />
                      <span>Cupos limitados</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
     
      <section className="bg-teal-600 dark:bg-teal-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Mantente Informado</h2>
          <p className="text-xl mb-8">Suscríbete para recibir las últimas noticias y eventos musicales</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Tu email"
              className="flex-1 text-foreground"
            />
            <Button className="bg-white text-teal-600 hover:bg-gray-100">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}