import Link from 'next/link'
import UserLayout from '@/components/UserLayout'
import { 
  Plus, 
  MapPin,
  Edit,
  Trash2,
  Home,
  Building,
  Briefcase,
  Check
} from 'lucide-react'

const addresses = [
  {
    id: 1,
    type: 'home',
    title: 'Casa',
    name: 'Juan Pérez',
    address: 'Calle Falsa 123',
    city: 'La Paz',
    state: 'La Paz',
    zipCode: '12345',
    country: 'Bolivia',
    phone: '+591 7123-4567',
    isDefault: true
  },
  {
    id: 2,
    type: 'work',
    title: 'Oficina',
    name: 'Juan Pérez',
    address: 'Av. Libertador 456, Piso 8',
    city: 'La Paz',
    state: 'La Paz', 
    zipCode: '12346',
    country: 'Bolivia',
    phone: '+591 2234-5678',
    isDefault: false
  },
  {
    id: 3,
    type: 'other',
    title: 'Casa de mis Padres',
    name: 'María García',
    address: 'Plaza Murillo 789',
    city: 'La Paz',
    state: 'La Paz',
    zipCode: '12347',
    country: 'Bolivia',
    phone: '+591 7987-6543',
    isDefault: false
  }
]

function getAddressIcon(type: string) {
  switch (type) {
    case 'home':
      return <Home className="w-5 h-5" />
    case 'work':
      return <Briefcase className="w-5 h-5" />
    case 'other':
      return <Building className="w-5 h-5" />
    default:
      return <MapPin className="w-5 h-5" />
  }
}

export default function UserAddresses() {
  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Mis Direcciones</h1>
            <p className="text-gray-400 mt-1">Gestiona tus direcciones de entrega</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nueva Dirección
          </button>
        </div>

        {/* Addresses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addresses.map((address) => (
            <div key={address.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 relative">
              {/* Default Badge */}
              {address.isDefault && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    <Check className="w-3 h-3 mr-1" />
                    Predeterminada
                  </span>
                </div>
              )}

              {/* Address Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  {getAddressIcon(address.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{address.title}</h3>
                  <p className="text-gray-400 text-sm">{address.type === 'home' ? 'Dirección de casa' : address.type === 'work' ? 'Dirección de trabajo' : 'Otra dirección'}</p>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-2 mb-6">
                <div className="text-white font-medium">{address.name}</div>
                <div className="text-gray-300">{address.address}</div>
                <div className="text-gray-300">{address.city}, {address.state} {address.zipCode}</div>
                <div className="text-gray-300">{address.country}</div>
                <div className="text-gray-400 text-sm">{address.phone}</div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                {!address.isDefault && (
                  <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                    Establecer como predeterminada
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Add New Address Card */}
          <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-blue-500 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Agregar Nueva Dirección</h3>
            <p className="text-gray-400 text-sm">Añade una nueva dirección de entrega</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Acciones Rápidas</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <MapPin className="w-6 h-6 text-blue-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Usar Ubicación Actual</div>
                <div className="text-xs text-gray-400">Detectar automáticamente</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Building className="w-6 h-6 text-green-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Importar del Trabajo</div>
                <div className="text-xs text-gray-400">Desde perfil de empresa</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Home className="w-6 h-6 text-purple-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Validar Direcciones</div>
                <div className="text-xs text-gray-400">Verificar existencia</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}