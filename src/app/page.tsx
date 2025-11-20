import Link from 'next/link'
import { ArrowRight, Shield, Truck, Clock, Star, Smartphone, Laptop, Gamepad2, Headphones, Watch, Tablet, Zap, Award } from 'lucide-react'

export default function HomePage() {
  const featuredCategories = [
    {
      name: 'Smartphones',
      icon: Smartphone,
      description: 'Los últimos modelos',
      href: '/products?category=SMARTPHONES'
    },
    {
      name: 'Laptops',
      icon: Laptop,
      description: 'Potencia y portabilidad',
      href: '/products?category=LAPTOPS'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      description: 'Para verdaderos gamers',
      href: '/products?category=GAMING'
    },
    {
      name: 'Audio',
      icon: Headphones,
      description: 'Sonido de alta calidad',
      href: '/products?category=AUDIO'
    },
    {
      name: 'Smartwatches',
      icon: Watch,
      description: 'Tecnología wearable',
      href: '/products?category=SMARTWATCHES'
    },
    {
      name: 'Tablets',
      icon: Tablet,
      description: 'Creatividad y productividad',
      href: '/products?category=TABLETS'
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Compra Segura',
      description: 'Transacciones 100% seguras con encriptación avanzada'
    },
    {
      icon: Truck,
      title: 'Envío Rápido',
      description: 'Entrega express en 24-48 horas'
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Atención al cliente siempre disponible'
    },
    {
      icon: Award,
      title: 'Mejor Calidad',
      description: 'Productos originales con garantía oficial'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Zap className="w-4 h-4 mr-2" />
                Nueva colección 2025
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              La mejor tecnología
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                a tu alcance
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Descubre los últimos productos tecnológicos con la mejor calidad, precios competitivos y garantía oficial
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Explorar Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/auth/register"
                className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-200"
              >
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Categorías Populares
            </h2>
            <p className="text-lg text-gray-300">
              Encuentra exactamente lo que necesitas en nuestra amplia selección
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative bg-gray-700 rounded-xl p-6 hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 border border-gray-600 hover:border-gray-500"
                >
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Por qué elegir TechStore?
            </h2>
            <p className="text-lg text-gray-300">
              Tu confianza es nuestro compromiso, excelencia en cada compra
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-gray-300">Productos disponibles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50K+</div>
              <div className="text-gray-300">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">Soporte técnico</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-gray-300">Satisfacción garantizada</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para la mejor experiencia tech?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad y descubre ofertas exclusivas, lanzamientos anticipados y soporte premium
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Crear Cuenta Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Ver Catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
