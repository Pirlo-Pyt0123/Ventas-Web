import Link from 'next/link'
import UserLayout from '@/components/UserLayout'
import { 
  Package, 
  Search, 
  Filter,
  Eye,
  Download,
  Star,
  Calendar,
  Truck,
  CheckCircle,
  Clock,
  AlertTriangle
} from 'lucide-react'

const orders = [
  {
    id: 'ORD-2024-015',
    orderNumber: '#15',
    date: '2024-11-15',
    status: 'delivered',
    total: 999,
    items: [
      { 
        name: 'iPhone 15 Pro', 
        quantity: 1, 
        price: 999, 
        image: 'https://images.unsplash.com/photo-1592910475319-90b2c8bb2e5e?w=100&h=100&fit=crop&crop=center'
      }
    ],
    tracking: 'TRK001234567',
    deliveryDate: '2024-11-18'
  },
  {
    id: 'ORD-2024-014',
    orderNumber: '#14',
    date: '2024-11-12',
    status: 'shipped',
    total: 249,
    items: [
      { 
        name: 'AirPods Pro 2', 
        quantity: 1, 
        price: 249, 
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=100&fit=crop&crop=center'
      }
    ],
    tracking: 'TRK001234568',
    estimatedDelivery: '2024-11-20'
  },
  {
    id: 'ORD-2024-013',
    orderNumber: '#13',
    date: '2024-11-08',
    status: 'processing',
    total: 1299,
    items: [
      { 
        name: 'MacBook Air M3', 
        quantity: 1, 
        price: 1299, 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=100&h=100&fit=crop&crop=center'
      }
    ],
    tracking: null,
    estimatedDelivery: '2024-11-25'
  },
  {
    id: 'ORD-2024-012',
    orderNumber: '#12',
    date: '2024-10-28',
    status: 'delivered',
    total: 1648,
    items: [
      { 
        name: 'iPad Pro 12.9"', 
        quantity: 1, 
        price: 799, 
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=100&h=100&fit=crop&crop=center'
      },
      { 
        name: 'Apple Watch Series 9', 
        quantity: 1, 
        price: 399, 
        image: 'https://images.unsplash.com/photo-1579586337278-3f436f25d4d3?w=100&h=100&fit=crop&crop=center'
      }
    ],
    tracking: 'TRK001234569',
    deliveryDate: '2024-11-01'
  },
  {
    id: 'ORD-2024-011',
    orderNumber: '#11',
    date: '2024-10-15',
    status: 'cancelled',
    total: 899,
    items: [
      { 
        name: 'Samsung Galaxy S24', 
        quantity: 1, 
        price: 899, 
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop&crop=center'
      }
    ],
    tracking: null,
    cancelReason: 'Cancelado por el usuario'
  }
]

function getStatusColor(status: string) {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'shipped':
      return 'bg-blue-100 text-blue-800'
    case 'processing':
      return 'bg-yellow-100 text-yellow-800'
    case 'cancelled':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'delivered':
      return 'Entregado'
    case 'shipped':
      return 'Enviado'
    case 'processing':
      return 'Procesando'
    case 'cancelled':
      return 'Cancelado'
    default:
      return status
  }
}

function getStatusIcon(status: string) {
  switch (status) {
    case 'delivered':
      return <CheckCircle className="w-4 h-4" />
    case 'shipped':
      return <Truck className="w-4 h-4" />
    case 'processing':
      return <Clock className="w-4 h-4" />
    case 'cancelled':
      return <AlertTriangle className="w-4 h-4" />
    default:
      return <Package className="w-4 h-4" />
  }
}

export default function UserOrders() {
  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Mis Pedidos</h1>
            <p className="text-gray-400 mt-1">Revisa el estado y historial de tus pedidos</p>
          </div>
          <div className="flex space-x-3">
            <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 hover:bg-gray-700">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar pedidos..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todos los estados</option>
                <option value="delivered">Entregado</option>
                <option value="shipped">Enviado</option>
                <option value="processing">Procesando</option>
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

        {/* Order Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">{orders.length}</div>
            <div className="text-gray-400 text-sm">Total Pedidos</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-green-400">{orders.filter(o => o.status === 'delivered').length}</div>
            <div className="text-gray-400 text-sm">Entregados</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-blue-400">{orders.filter(o => o.status === 'shipped').length}</div>
            <div className="text-gray-400 text-sm">En Tránsito</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-2xl font-bold text-white">
              ${orders.filter(o => o.status !== 'cancelled').reduce((sum, order) => sum + order.total, 0).toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Total Gastado</div>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-800 border border-gray-700 rounded-lg">
              {/* Order Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{order.id}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(order.date).toLocaleDateString('es-ES')}
                        </span>
                        {order.tracking && (
                          <span className="flex items-center">
                            <Truck className="w-4 h-4 mr-1" />
                            {order.tracking}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <span className={`inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-1">{getStatusText(order.status)}</span>
                    </span>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">${order.total}</div>
                      <div className="text-sm text-gray-400">{order.items.length} artículo(s)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="p-6">
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <div className="text-gray-400 text-sm">
                          Cantidad: {item.quantity} × ${item.price}
                        </div>
                      </div>
                      <div className="text-white font-semibold">
                        ${item.quantity * item.price}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Status Details */}
                {order.status === 'delivered' && order.deliveryDate && (
                  <div className="mt-6 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <div className="flex items-center text-green-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-medium">Pedido entregado el {new Date(order.deliveryDate).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                )}

                {order.status === 'shipped' && order.estimatedDelivery && (
                  <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                    <div className="flex items-center text-blue-400">
                      <Truck className="w-5 h-5 mr-2" />
                      <span className="font-medium">Entrega estimada: {new Date(order.estimatedDelivery).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                )}

                {order.status === 'processing' && (
                  <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <div className="flex items-center text-yellow-400">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="font-medium">Tu pedido está siendo procesado</span>
                    </div>
                  </div>
                )}

                {order.status === 'cancelled' && order.cancelReason && (
                  <div className="mt-6 p-4 bg-red-900/20 border border-red-700 rounded-lg">
                    <div className="flex items-center text-red-400">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      <span className="font-medium">{order.cancelReason}</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </button>
                    {order.status === 'delivered' && (
                      <button className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
                        <Star className="w-4 h-4 mr-2" />
                        Calificar
                      </button>
                    )}
                    {order.tracking && (
                      <button className="inline-flex items-center px-3 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
                        <Truck className="w-4 h-4 mr-2" />
                        Rastrear
                      </button>
                    )}
                  </div>
                  {(order.status === 'delivered' || order.status === 'cancelled') && (
                    <button className="text-blue-400 hover:text-blue-300 text-sm">
                      Volver a Comprar
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
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
    </UserLayout>
  )
}