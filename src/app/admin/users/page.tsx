import AdminLayout from '@/components/AdminLayout'
import { Plus, Search, Filter, Edit, Trash2, Eye, Shield, User } from 'lucide-react'

// Datos de ejemplo para usuarios
const users = [
  {
    id: 1,
    name: 'Juan Pérez',
    email: 'juan@example.com',
    role: 'admin',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-11-18',
    orders: 12,
    totalSpent: 2450
  },
  {
    id: 2,
    name: 'María García',
    email: 'maria@example.com',
    role: 'customer',
    status: 'active',
    joinDate: '2024-02-20',
    lastLogin: '2024-11-17',
    orders: 8,
    totalSpent: 1890
  },
  {
    id: 3,
    name: 'Carlos López',
    email: 'carlos@example.com',
    role: 'customer',
    status: 'active',
    joinDate: '2024-03-10',
    lastLogin: '2024-11-16',
    orders: 15,
    totalSpent: 3200
  },
  {
    id: 4,
    name: 'Ana Martínez',
    email: 'ana@example.com',
    role: 'customer',
    status: 'inactive',
    joinDate: '2024-01-05',
    lastLogin: '2024-10-15',
    orders: 3,
    totalSpent: 450
  },
  {
    id: 5,
    name: 'Luis Rodríguez',
    email: 'luis@example.com',
    role: 'moderator',
    status: 'active',
    joinDate: '2024-04-12',
    lastLogin: '2024-11-18',
    orders: 6,
    totalSpent: 1200
  },
  {
    id: 6,
    name: 'Sofia González',
    email: 'sofia@example.com',
    role: 'customer',
    status: 'banned',
    joinDate: '2024-05-08',
    lastLogin: '2024-09-20',
    orders: 2,
    totalSpent: 180
  }
]

function getRoleColor(role: string) {
  switch (role) {
    case 'admin':
      return 'bg-purple-100 text-purple-800'
    case 'moderator':
      return 'bg-blue-100 text-blue-800'
    case 'customer':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getRoleText(role: string) {
  switch (role) {
    case 'admin':
      return 'Administrador'
    case 'moderator':
      return 'Moderador'
    case 'customer':
      return 'Cliente'
    default:
      return role
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800'
    case 'inactive':
      return 'bg-yellow-100 text-yellow-800'
    case 'banned':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getStatusText(status: string) {
  switch (status) {
    case 'active':
      return 'Activo'
    case 'inactive':
      return 'Inactivo'
    case 'banned':
      return 'Bloqueado'
    default:
      return status
  }
}

function getInitials(name: string) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

export default function UsersAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Usuarios</h1>
            <p className="text-gray-400 mt-1">Gestiona los usuarios de tu plataforma</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Usuario
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
                  placeholder="Buscar usuarios..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todos los roles</option>
                <option value="admin">Administrador</option>
                <option value="moderator">Moderador</option>
                <option value="customer">Cliente</option>
              </select>
              <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">Todos los estados</option>
                <option value="active">Activo</option>
                <option value="inactive">Inactivo</option>
                <option value="banned">Bloqueado</option>
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
              <div className="text-2xl font-bold text-white">{users.length}</div>
              <div className="text-gray-400 text-sm">Total Usuarios</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{users.filter(u => u.status === 'active').length}</div>
              <div className="text-gray-400 text-sm">Activos</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{users.filter(u => u.role === 'admin' || u.role === 'moderator').length}</div>
              <div className="text-gray-400 text-sm">Staff</div>
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{users.filter(u => u.status === 'banned').length}</div>
              <div className="text-gray-400 text-sm">Bloqueados</div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Usuario
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Rol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Pedidos
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Total Gastado
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Último Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-sm font-medium text-white">
                              {getInitials(user.name)}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.name}</div>
                          <div className="text-sm text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                        {user.role === 'admin' && <Shield className="w-3 h-3 mr-1" />}
                        {user.role === 'moderator' && <Shield className="w-3 h-3 mr-1" />}
                        {user.role === 'customer' && <User className="w-3 h-3 mr-1" />}
                        {getRoleText(user.role)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                        {getStatusText(user.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      ${user.totalSpent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {new Date(user.lastLogin).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric'
                      })}
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
            Mostrando 1 a {users.length} de {users.length} usuarios
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