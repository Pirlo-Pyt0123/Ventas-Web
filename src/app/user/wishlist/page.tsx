import Link from 'next/link'
import UserLayout from '@/components/UserLayout'
import { 
  Heart, 
  ShoppingCart,
  Trash2,
  Star,
  Share,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react'

const wishlistItems = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    price: 1199,
    originalPrice: 1299,
    discount: 8,
    image: 'https://images.unsplash.com/photo-1592910475319-90b2c8bb2e5e?w=300&h=300&fit=crop&crop=center',
    rating: 4.8,
    reviews: 234,
    inStock: true,
    category: 'Smartphones',
    addedDate: '2024-11-10'
  },
  {
    id: 2,
    name: 'MacBook Pro 16" M3',
    price: 2499,
    originalPrice: null,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop&crop=center',
    rating: 4.9,
    reviews: 156,
    inStock: true,
    category: 'Laptops',
    addedDate: '2024-11-05'
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: 399,
    originalPrice: 450,
    discount: 11,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&crop=center',
    rating: 4.7,
    reviews: 89,
    inStock: false,
    category: 'Audio',
    addedDate: '2024-10-28'
  },
  {
    id: 4,
    name: 'iPad Air M2',
    price: 599,
    originalPrice: null,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop&crop=center',
    rating: 4.6,
    reviews: 142,
    inStock: true,
    category: 'Tablets',
    addedDate: '2024-10-20'
  },
  {
    id: 5,
    name: 'Apple Watch Ultra 2',
    price: 799,
    originalPrice: 849,
    discount: 6,
    image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d3?w=300&h=300&fit=crop&crop=center',
    rating: 4.8,
    reviews: 67,
    inStock: true,
    category: 'Smartwatches',
    addedDate: '2024-10-15'
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    originalPrice: null,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop&crop=center',
    rating: 4.5,
    reviews: 98,
    inStock: true,
    category: 'Smartphones',
    addedDate: '2024-10-12'
  }
]

export default function UserWishlist() {
  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Lista de Deseos</h1>
            <p className="text-gray-400 mt-1">Guarda tus productos favoritos para comprar después</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
              <Share className="w-4 h-4 mr-2" />
              Compartir Lista
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Agregar Todo al Carrito
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar en tu lista..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todas las categorías</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="tablets">Tablets</option>
                <option value="audio">Audio</option>
                <option value="smartwatches">Smartwatches</option>
              </select>
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Disponibilidad</option>
                <option value="in-stock">En stock</option>
                <option value="out-of-stock">Agotado</option>
              </select>
              <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
            <div className="flex border border-gray-600 rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-blue-600 text-white">
                <Grid className="w-4 h-4" />
              </button>
              <button className="px-3 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600">
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Wishlist Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{wishlistItems.length}</div>
            <div className="text-gray-400 text-sm">Productos Guardados</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-400">{wishlistItems.filter(item => item.inStock).length}</div>
            <div className="text-gray-400 text-sm">Disponibles</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-red-400">{wishlistItems.filter(item => !item.inStock).length}</div>
            <div className="text-gray-400 text-sm">Agotados</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400">{wishlistItems.filter(item => item.discount > 0).length}</div>
            <div className="text-gray-400 text-sm">Con Descuento</div>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.discount > 0 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-medium">
                    -{item.discount}%
                  </div>
                )}
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Agotado
                    </span>
                  </div>
                )}
                <button className="absolute top-2 right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-blue-400 font-medium">{item.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {item.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">
                    {item.rating} ({item.reviews} reseñas)
                  </span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-white">
                      ${item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Added Date */}
                <div className="text-xs text-gray-400 mb-4">
                  Agregado el {new Date(item.addedDate).toLocaleDateString('es-ES')}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button 
                    disabled={!item.inStock}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      item.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 inline mr-2" />
                    {item.inStock ? 'Agregar al Carrito' : 'No Disponible'}
                  </button>
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State (if no items) */}
        {wishlistItems.length === 0 && (
          <div className="text-center py-12">
            <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Tu lista de deseos está vacía</h3>
            <p className="text-gray-400 mb-6">Explora nuestros productos y guarda tus favoritos</p>
            <Link
              href="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Explorar Productos
            </Link>
          </div>
        )}

        {/* Actions Bar */}
        {wishlistItems.length > 0 && (
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="text-white">
                <span className="font-semibold">{wishlistItems.length}</span> productos en tu lista de deseos
              </div>
              <div className="flex space-x-3">
                <button className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                  Limpiar Lista
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Agregar Disponibles al Carrito
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </UserLayout>
  )
}