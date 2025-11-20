import AdminLayout from '@/components/AdminLayout'
import { Plus, Search, Filter, Edit, Trash2, Eye } from 'lucide-react'

// Datos de ejemplo para productos
const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Smartphones',
    price: 999,
    stock: 45,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1592910475319-90b2c8bb2e5e?w=100&h=100&fit=crop&crop=center',
    sales: 156
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'Laptops',
    price: 1299,
    stock: 23,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop&crop=center',
    sales: 89
  },
  {
    id: 3,
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    price: 799,
    stock: 12,
    status: 'low_stock',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&h=100&fit=crop&crop=center',
    sales: 67
  },
  {
    id: 4,
    name: 'Apple Watch Series 9',
    category: 'Smartwatches',
    price: 399,
    stock: 0,
    status: 'out_of_stock',
    image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d3?w=100&h=100&fit=crop&crop=center',
    sales: 34
  },
  {
    id: 5,
    name: 'AirPods Pro 2',
    category: 'Audio',
    price: 249,
    stock: 78,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=100&fit=crop&crop=center',
    sales: 123
  },
  {
    id: 6,
    name: 'Samsung Galaxy S24',
    category: 'Smartphones',
    price: 899,
    stock: 34,
    status: 'active',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop&crop=center',
    sales: 78
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'low_stock':
      return 'bg-yellow-100 text-yellow-800'
    case 'out_of_stock':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'active':
      return 'Activo'
    case 'low_stock':
      return 'Stock Bajo'
    case 'out_of_stock':
      return 'Sin Stock'
    default:
      return status
  }
}

export default function ProductsAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Productos</h1>
            <p className="text-gray-400 mt-1">Gestiona tu inventario de productos</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Producto
          </button>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
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
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="low_stock">Stock Bajo</option>
                <option value="out_of_stock">Sin Stock</option>
              </select>
              <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{products.length}</div>
              <div className="text-gray-400 text-sm">Total Productos</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{products.filter(p => p.status === 'active').length}</div>
              <div className="text-gray-400 text-sm">Activos</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{products.filter(p => p.status === 'low_stock').length}</div>
              <div className="text-gray-400 text-sm">Stock Bajo</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{products.filter(p => p.status === 'out_of_stock').length}</div>
              <div className="text-gray-400 text-sm">Sin Stock</div>
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Producto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Precio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Ventas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0">
                          <img
                            className="h-12 w-12 rounded-lg object-cover"
                            src={product.image}
                            alt={product.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{product.name}</div>
                          <div className="text-sm text-gray-400">ID: #{product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      ${product.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.stock} unidades
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(product.status)}`}>
                        {getStatusText(product.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {product.sales} vendidos
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-400 hover:text-green-300">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Mostrando 1 a {products.length} de {products.length} productos
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded border border-gray-600 hover:bg-gray-600">
              Anterior
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded border border-gray-600 hover:bg-gray-600">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}