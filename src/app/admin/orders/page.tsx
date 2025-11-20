import AdminLayout from '@/components/AdminLayout'
import { Search, Filter, Eye, Edit, Package, Truck, CheckCircle, XCircle } from 'lucide-react'

// Datos de ejemplo para pedidos
const orders = [
  {
    id: 1,
    orderNumber: 'ORD-2024-001',
    customer: {
      name: 'Juan Pérez',
      email: 'juan@example.com'
    },
    date: '2024-11-18',
    status: 'pending',
    total: 999,
    items: [
      { name: 'iPhone 15 Pro', quantity: 1, price: 999 }
    ],
    shipping: {
      address: 'Calle Falsa 123, La Paz, Bolivia',
      method: 'Express'
    }
  },
  {
    id: 2,
    orderNumber: 'ORD-2024-002',
    customer: {
      name: 'María García',
      email: 'maria@example.com'
    },
    date: '2024-11-17',
    status: 'processing',
    total: 1299,
    items: [
      { name: 'MacBook Air M3', quantity: 1, price: 1299 }
    ],
    shipping: {
      address: 'Av. Libertador 456, Santa Cruz, Bolivia',
      method: 'Standard'
    }
  },
  {
    id: 3,
    orderNumber: 'ORD-2024-003',
    customer: {
      name: 'Carlos López',
      email: 'carlos@example.com'
    },
    date: '2024-11-16',
    status: 'shipped',
    total: 1048,
    items: [
      { name: 'iPad Pro', quantity: 1, price: 799 },
      { name: 'AirPods Pro 2', quantity: 1, price: 249 }
    ],
    shipping: {
      address: 'Plaza Murillo 789, La Paz, Bolivia',
      method: 'Express'
    }
  },
  {
    id: 4,
    orderNumber: 'ORD-2024-004',
    customer: {
      name: 'Ana Martínez',
      email: 'ana@example.com'
    },
    date: '2024-11-15',
    status: 'delivered',
    total: 399,
    items: [
      { name: 'Apple Watch Series 9', quantity: 1, price: 399 }
    ],
    shipping: {
      address: 'Calle Comercio 321, Cochabamba, Bolivia',
      method: 'Standard'
    }
  },
  {
    id: 5,
    orderNumber: 'ORD-2024-005',
    customer: {
      name: 'Luis Rodríguez',
      email: 'luis@example.com'
    },
    date: '2024-11-14',
    status: 'cancelled',
    total: 249,
    items: [
      { name: 'AirPods Pro 2', quantity: 1, price: 249 }
    ],
    shipping: {
      address: 'Av. 6 de Agosto 654, La Paz, Bolivia',
      method: 'Express'
    }
  },
  {
    id: 6,
    orderNumber: 'ORD-2024-006',
    customer: {
      name: 'Sofia González',
      email: 'sofia@example.com'
    },
    date: '2024-11-13',
    status: 'delivered',
    total: 1698,
    items: [
      { name: 'Samsung Galaxy S24', quantity: 1, price: 899 },
      { name: 'iPad Pro', quantity: 1, price: 799 }
    ],
    shipping: {
      address: 'Zona Sur 987, La Paz, Bolivia',
      method: 'Express'
    }
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'shipped':
      return 'bg-purple-100 text-purple-800'
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'pending':
      return 'Pendiente'
    case 'processing':
      return 'Procesando'
    case 'shipped':
      return 'Enviado'
    case 'delivered':
      return 'Entregado'
    case 'cancelled':
      return 'Cancelado'
    default:
      return status
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'pending':
      return <Package className="w-4 h-4" />
    case 'processing':
      return <Package className="w-4 h-4" />
    case 'shipped':
      return <Truck className="w-4 h-4" />
    case 'delivered':
      return <CheckCircle className="w-4 h-4" />
    case 'cancelled':
      return <XCircle className="w-4 h-4" />
    default:
      return <Package className="w-4 h-4" />
  }
}

export default function OrdersAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Pedidos</h1>
            <p className="text-gray-400 mt-1">Gestiona los pedidos de tu tienda</p>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
              Exportar
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar pedidos por número, cliente..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todos los estados</option>
                <option value="pending">Pendiente</option>
                <option value="processing">Procesando</option>
                <option value="shipped">Enviado</option>
                <option value="delivered">Entregado</option>
                <option value="cancelled">Cancelado</option>
              </select>
              <input
                type="date"
                className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-600">
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{orders.length}</div>
              <div className="text-gray-400 text-sm">Total Pedidos</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">{orders.filter(o => o.status === 'pending').length}</div>
              <div className="text-gray-400 text-sm">Pendientes</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{orders.filter(o => o.status === 'processing').length}</div>
              <div className="text-gray-400 text-sm">Procesando</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{orders.filter(o => o.status === 'delivered').length}</div>
              <div className="text-gray-400 text-sm">Entregados</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                ${orders.reduce((sum, order) => order.status !== 'cancelled' ? sum + order.total : sum, 0).toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">Ingresos</div>
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Pedido
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Cliente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Items
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">{order.orderNumber}</div>
                        <div className="text-sm text-gray-400">#{order.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">{order.customer.name}</div>
                        <div className="text-sm text-gray-400">{order.customer.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(order.date).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{getStatusText(order.status)}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="max-w-xs">
                        {order.items.map((item, index) => (
                          <div key={index} className="text-xs">
                            {item.quantity}x {item.name}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      ${order.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-400 hover:text-green-300">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Order Details Modal Placeholder */}
        <div className="hidden">
          {/* Aquí iría el modal de detalles del pedido */}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Mostrando 1 a {orders.length} de {orders.length} pedidos
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