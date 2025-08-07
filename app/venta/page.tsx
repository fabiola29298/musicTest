import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Truck, Shield } from 'lucide-react'

export default function VentaPage() {
  const products = [
    {
      id: 1,
      name: "Armónica Hohner Special 20",
      price: 45,
      originalPrice: 55,
      category: "Armónicas",
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg?height=300&width=300",
      description: "Armónica diatónica profesional en Do mayor. Ideal para blues, folk y rock.",
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Teclado Yamaha PSR-E373",
      price: 280,
      originalPrice: 320,
      category: "Teclados",
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=300",
      description: "Teclado de 61 teclas con 622 voces y 205 estilos. Perfecto para principiantes.",
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "Estuche Rígido para Violín 4/4",
      price: 85,
      originalPrice: 100,
      category: "Estuches",
      rating: 4.7,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      description: "Estuche rígido con interior acolchado. Máxima protección para tu violín.",
      inStock: true
    },
    {
      id: 4,
      name: "Cuerdas D'Addario EJ16 Guitarra",
      price: 12,
      originalPrice: 15,
      category: "Cuerdas",
      rating: 4.6,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      description: "Juego de cuerdas de bronce fosforado para guitarra acústica. Calibre light.",
      inStock: true
    },
    {
      id: 5,
      name: "Armónica Cromática Hohner CX-12",
      price: 180,
      originalPrice: 210,
      category: "Armónicas",
      rating: 4.9,
      reviews: 45,
      image: "/placeholder.svg?height=300&width=300",
      description: "Armónica cromática de 12 agujeros. Sonido profesional para jazz y clásico.",
      inStock: false
    },
    {
      id: 6,
      name: "Teclado Casio CT-X700",
      price: 220,
      originalPrice: 250,
      category: "Teclados",
      rating: 4.5,
      reviews: 78,
      image: "/placeholder.svg?height=300&width=300",
      description: "Teclado de 61 teclas con tecnología AiX Sound Source. 600 tonos incluidos.",
      inStock: true
    },
    {
      id: 7,
      name: "Estuche Blando Guitarra Acústica",
      price: 35,
      originalPrice: 45,
      category: "Estuches",
      rating: 4.4,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      description: "Funda acolchada con correas ajustables. Bolsillo frontal para accesorios.",
      inStock: true
    },
    {
      id: 8,
      name: "Cuerdas Ernie Ball Violín",
      price: 25,
      originalPrice: 30,
      category: "Cuerdas",
      rating: 4.7,
      reviews: 92,
      image: "/placeholder.svg?height=300&width=300",
      description: "Juego completo de cuerdas para violín 4/4. Sonido brillante y duradero.",
      inStock: true
    }
  ]

  const categories = ["Todos", "Armónicas", "Teclados", "Estuches", "Cuerdas"]
  const featuredProducts = products.filter(product => product.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tienda Musical</h1>
          <p className="text-xl">Instrumentos y accesorios de calidad para tu aprendizaje musical</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Truck className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-semibold">Envío Gratuito</h3>
                <p className="text-sm text-gray-600">En compras mayores a $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-semibold">Garantía</h3>
                <p className="text-sm text-gray-600">1 año en todos los productos</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-semibold">Calidad Premium</h3>
                <p className="text-sm text-gray-600">Solo marcas reconocidas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Productos Destacados</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-red-600">
                      Oferta
                    </Badge>
                    {!product.inStock && (
                      <Badge className="absolute top-4 right-4 bg-gray-600">
                        Agotado
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <Badge className="mb-2">{product.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({product.reviews})</span>
                    </div>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    </div>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? "Agregar al Carrito" : "Agotado"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Todos los Productos</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className={category === "Todos" ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-2 left-2 bg-red-600">
                      -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="absolute top-2 right-2 bg-gray-600">
                      Agotado
                    </Badge>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <Badge className="w-fit mb-2">{product.category}</Badge>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3 text-sm">
                    {product.description}
                  </CardDescription>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-bold text-purple-600">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-3 h-3 mr-2" />
                    {product.inStock ? "Agregar" : "Agotado"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas Asesoría?</h2>
          <p className="text-xl mb-8">Nuestros expertos te ayudan a elegir el instrumento perfecto</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Contactar Asesor
          </Button>
        </div>
      </section>
    </div>
  )
}
