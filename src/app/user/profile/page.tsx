import Link from 'next/link'
import UserLayout from '@/components/UserLayout'
import { 
  User, 
  Mail, 
  Phone, 
  Calendar,
  MapPin,
  Edit,
  Camera,
  Shield,
  Award,
  TrendingUp
} from 'lucide-react'

const userStats = [
  { name: 'Pedidos Totales', value: '24', icon: TrendingUp },
  { name: 'Total Gastado', value: '$2,450', icon: Award },
  { name: 'Productos Favoritos', value: '12', icon: User },
  { name: 'Reseñas', value: '18', icon: Shield },
]

const recentOrders = [
  {
    id: 'ORD-2024-015',
    date: '2024-11-15',
    total: 999,
    status: 'delivered',
    items: ['iPhone 15 Pro']
  },
  {
    id: 'ORD-2024-012',
    date: '2024-11-08',
    total: 249,
    status: 'delivered', 
    items: ['AirPods Pro 2']
  },
  {
    id: 'ORD-2024-009',
    date: '2024-10-28',
    total: 1299,
    status: 'delivered',
    items: ['MacBook Air M3']
  }
]

const achievements = [
  { name: 'Primer Comprador', description: 'Realizaste tu primera compra', earned: true },
  { name: 'Cliente Fiel', description: 'Más de 10 pedidos completados', earned: true },
  { name: 'Mega Comprador', description: 'Gastaste más de $2000', earned: true },
  { name: 'Evaluador Experto', description: 'Dejaste 15+ reseñas', earned: false },
]

function getStatusColor(status: string) {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'shipped':
      return 'bg-blue-100 text-blue-800'
    case 'processing':
      return 'bg-yellow-100 text-yellow-800'
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
    default:
      return status
  }
}

export default function UserProfile() {
  return (
    <UserLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-white">Mi Perfil</h1>
          <p className="text-gray-400 mt-1">Gestiona tu información personal y preferencias</p>
        </div>

        {/* Profile Card */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JP</span>
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700">
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Juan Pérez</h2>
                <p className="text-gray-400">Cliente Premium</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    juan.perez@example.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    +591 7123-4567
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-gray-600 rounded-lg text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600">
                <Edit className="w-4 h-4 mr-2" />
                Editar Perfil
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userStats.map((stat) => (
            <div key={stat.name} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.name}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Pedidos Recientes</h3>
              <Link href="/user/orders" className="text-blue-400 hover:text-blue-300 text-sm">
                Ver todos
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div>
                    <div className="text-white font-medium">{order.id}</div>
                    <div className="text-gray-400 text-sm">{order.items.join(', ')}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      {new Date(order.date).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-semibold">${order.total}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Información Personal</h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm">
                Editar
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Nombre Completo</div>
                  <div className="text-gray-400 text-sm">Juan Antonio Pérez García</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400 text-sm">juan.perez@example.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Teléfono</div>
                  <div className="text-gray-400 text-sm">+591 7123-4567</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Fecha de Nacimiento</div>
                  <div className="text-gray-400 text-sm">15 de Marzo, 1990</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                <MapPin className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">Ubicación</div>
                  <div className="text-gray-400 text-sm">La Paz, Bolivia</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Logros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  achievement.earned
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-600 bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      achievement.earned ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}
                  >
                    <Award className={`w-5 h-5 ${achievement.earned ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <div className={`font-medium ${achievement.earned ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {achievement.name}
                    </div>
                    <div className="text-gray-400 text-sm">{achievement.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Status */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Estado de la Cuenta</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-900/20 border border-green-700 rounded-lg">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-green-400 font-medium">Cuenta Verificada</div>
              <div className="text-gray-400 text-sm">Tu identidad ha sido confirmada</div>
            </div>
            <div className="text-center p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
              <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-blue-400 font-medium">Cliente Premium</div>
              <div className="text-gray-400 text-sm">Beneficios exclusivos disponibles</div>
            </div>
            <div className="text-center p-4 bg-purple-900/20 border border-purple-700 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-purple-400 font-medium">Nivel Elite</div>
              <div className="text-gray-400 text-sm">Top 5% de nuestros clientes</div>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}