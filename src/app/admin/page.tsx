import AdminLayout from '@/components/AdminLayout'
import { 
  Package,
  Users,
  ShoppingBag,
  TrendingUp,
  DollarSign,
  Eye,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

const stats = [
  {
    name: 'Ventas Totales',
    value: '$45,231',
    change: '+20.1%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Productos',
    value: '156',
    change: '+5.2%',
    changeType: 'positive',
    icon: Package,
  },
  {
    name: 'Usuarios',
    value: '2,547',
    change: '+12.5%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Pedidos',
    value: '123',
    change: '-2.1%',
    changeType: 'negative',
    icon: ShoppingBag,
  },
]

const recentOrders = [
  { id: 1, customer: 'Juan Pérez', product: 'iPhone 15 Pro', amount: '$999', status: 'completed' },
  { id: 2, customer: 'María García', product: 'MacBook Air', amount: '$1,299', status: 'pending' },
  { id: 3, customer: 'Carlos López', product: 'iPad Pro', amount: '$799', status: 'processing' },
  { id: 4, customer: 'Ana Martínez', product: 'Apple Watch', amount: '$399', status: 'completed' },
  { id: 5, customer: 'Luis Rodríguez', product: 'AirPods Pro', amount: '$249', status: 'shipped' },
]

const topProducts = [
  { name: 'iPhone 15 Pro', sales: 45, revenue: '$44,955' },
  { name: 'MacBook Air M3', sales: 23, revenue: '$29,877' },
  { name: 'iPad Pro', sales: 19, revenue: '$15,181' },
  { name: 'Apple Watch Series 9', sales: 34, revenue: '$13,566' },
  { name: 'AirPods Pro 2', sales: 56, revenue: '$13,944' },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'shipped':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'completed':
      return 'Completado'
    case 'pending':
      return 'Pendiente'
    case 'processing':
      return 'Procesando'
    case 'shipped':
      return 'Enviado'
    default:
      return status
  }
}

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Bienvenido de vuelta, administrador</p>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
              <Eye className="w-4 h-4 mr-2" />
              Ver tienda
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Añadir producto
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.name} className="bg-gray-800 border border-gray-700 overflow-hidden rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-400 truncate">{item.name}</dt>
                      <dd className="text-lg font-semibold text-white">{item.value}</dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {item.changeType === 'positive' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {item.change}
                  </span>
                  <span className="text-sm text-gray-400 ml-2">vs mes anterior</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid layout for tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-700">
              <h3 className="text-lg font-medium text-white">Pedidos Recientes</h3>
            </div>
            <div className="flow-root">
              <div className="-my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Cliente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Producto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {order.product}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                              {getStatusText(order.status)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {order.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg">
            <div className="px-6 py-4 border-b border-gray-700">
              <h3 className="text-lg font-medium text-white">Productos Más Vendidos</h3>
            </div>
            <div className="flow-root">
              <div className="-my-2 overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Producto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Ventas
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Ingresos
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {topProducts.map((product, index) => (
                        <tr key={product.name}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              </div>
                              {product.name}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                            {product.sales}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                            {product.revenue}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Package className="w-6 h-6 text-blue-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Nuevo Producto</div>
                <div className="text-xs text-gray-400">Añadir al inventario</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Users className="w-6 h-6 text-green-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Gestionar Usuarios</div>
                <div className="text-xs text-gray-400">Ver todos los usuarios</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <ShoppingBag className="w-6 h-6 text-purple-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Ver Pedidos</div>
                <div className="text-xs text-gray-400">Gestionar pedidos</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <TrendingUp className="w-6 h-6 text-orange-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Estadísticas</div>
                <div className="text-xs text-gray-400">Ver reportes</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}