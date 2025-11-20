import UserLayout from '@/components/UserLayout'
import { 
  User, 
  Mail, 
  Bell,
  Shield,
  Eye,
  EyeOff,
  Globe,
  Smartphone,
  Save,
  Trash2,
  Download
} from 'lucide-react'

export default function UserSettings() {
  return (
    <UserLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Configuración</h1>
            <p className="text-gray-400 mt-1">Administra tu cuenta y preferencias</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Guardar Cambios
          </button>
        </div>

        {/* Account Settings */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <User className="w-5 h-5 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Información de la Cuenta</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Nombre
              </label>
              <input
                type="text"
                defaultValue="Juan"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Apellido
              </label>
              <input
                type="text"
                defaultValue="Pérez"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                defaultValue="juan.perez@example.com"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                defaultValue="+591 7123-4567"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                defaultValue="1990-03-15"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Seguridad</h3>
          </div>
          <div className="space-y-6">
            {/* Change Password */}
            <div>
              <h4 className="text-white font-medium mb-4">Cambiar Contraseña</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Contraseña Actual
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nueva Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Contraseña
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                    />
                    <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Two Factor Authentication */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">Autenticación de Dos Factores</h4>
                  <p className="text-gray-400 text-sm mt-1">Agregar una capa extra de seguridad a tu cuenta</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            {/* Login Sessions */}
            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-white font-medium mb-4">Sesiones Activas</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-white text-sm font-medium">Tu dispositivo actual</div>
                      <div className="text-gray-400 text-xs">Windows • Chrome • La Paz, Bolivia</div>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm">Activa</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Smartphone className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-white text-sm font-medium">iPhone de Juan</div>
                      <div className="text-gray-400 text-xs">iOS • Safari • Hace 2 días</div>
                    </div>
                  </div>
                  <button className="text-red-400 hover:text-red-300 text-sm">Cerrar sesión</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-5 h-5 text-yellow-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Notificaciones</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Notificaciones por Email</div>
                <div className="text-gray-400 text-sm">Recibir emails sobre pedidos y ofertas</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Notificaciones Push</div>
                <div className="text-gray-400 text-sm">Notificaciones en el navegador</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Ofertas y Promociones</div>
                <div className="text-gray-400 text-sm">Recibir ofertas especiales y descuentos</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium">Actualizaciones de Pedidos</div>
                <div className="text-gray-400 text-sm">Estados de envío y entrega</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Globe className="w-5 h-5 text-purple-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Preferencias</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Idioma
              </label>
              <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Moneda
              </label>
              <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="usd">USD ($)</option>
                <option value="bob">BOB (Bs.)</option>
                <option value="eur">EUR (€)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Zona Horaria
              </label>
              <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="America/La_Paz">La Paz (GMT-4)</option>
                <option value="America/New_York">Nueva York (GMT-5)</option>
                <option value="Europe/Madrid">Madrid (GMT+1)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tema
              </label>
              <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="dark">Oscuro</option>
                <option value="light">Claro</option>
                <option value="auto">Automático</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Management */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Gestión de Datos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Download className="w-6 h-6 text-blue-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Exportar Datos</div>
                <div className="text-xs text-gray-400">Descargar tu información</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors">
              <Eye className="w-6 h-6 text-green-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-white">Ver Privacidad</div>
                <div className="text-xs text-gray-400">Política de privacidad</div>
              </div>
            </button>
            <button className="flex items-center justify-center p-4 border border-red-600 rounded-lg hover:bg-red-900/20 transition-colors">
              <Trash2 className="w-6 h-6 text-red-400 mr-3" />
              <div className="text-left">
                <div className="text-sm font-medium text-red-400">Eliminar Cuenta</div>
                <div className="text-xs text-gray-400">Acción permanente</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}