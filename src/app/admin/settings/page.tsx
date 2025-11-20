import AdminLayout from '@/components/AdminLayout'
import { 
  Save,
  Store,
  CreditCard,
  Truck,
  Mail,
  Shield,
  Globe,
  Bell,
  Database,
  Key
} from 'lucide-react'

export default function SettingsAdmin() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Configuración</h1>
            <p className="text-gray-400 mt-1">Administra la configuración de tu tienda</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            Guardar Cambios
          </button>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Store Settings */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Store className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Configuración de Tienda</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre de la Tienda
                </label>
                <input
                  type="text"
                  defaultValue="TechStore"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción
                </label>
                <textarea
                  rows={3}
                  defaultValue="Tu tienda de tecnología de confianza"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email de Contacto
                </label>
                <input
                  type="email"
                  defaultValue="admin@techstore.com"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  defaultValue="+591 2 123-4567"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <CreditCard className="w-5 h-5 text-green-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Métodos de Pago</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-white">Tarjetas de Crédito/Débito</span>
                </div>
                <span className="text-green-400 text-sm">Activo</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-white">PayPal</span>
                </div>
                <span className="text-green-400 text-sm">Activo</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-white">Transferencia Bancaria</span>
                </div>
                <span className="text-gray-400 text-sm">Inactivo</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-white">Pago Contra Entrega</span>
                </div>
                <span className="text-green-400 text-sm">Activo</span>
              </div>
            </div>
          </div>

          {/* Shipping Settings */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <Truck className="w-5 h-5 text-purple-400 mr-2" />
              <h3 className="text-lg font-semibold text-white">Configuración de Envío</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Costo de Envío Estándar
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-600 bg-gray-700 text-gray-300 text-sm rounded-l-lg">$</span>
                  <input
                    type="number"
                    defaultValue="15"
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-r-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Costo de Envío Express
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-600 bg-gray-700 text-gray-300 text-sm rounded-l-lg">$</span>
                  <input
                    type="number"
                    defaultValue="25"
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-r-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Envío Gratis a partir de
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-600 bg-gray-700 text-gray-300 text-sm rounded-l-lg">$</span>
                  <input
                    type="number"
                    defaultValue="100"
                    className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-r-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
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
                  <div className="text-white">Nuevos Pedidos</div>
                  <div className="text-gray-400 text-sm">Recibir notificaciones de nuevos pedidos</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Stock Bajo</div>
                  <div className="text-gray-400 text-sm">Alertas cuando el stock sea menor a 5</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Nuevos Usuarios</div>
                  <div className="text-gray-400 text-sm">Notificaciones de registro de usuarios</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-5 h-5 text-red-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Configuración de Seguridad</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Autenticación de Dos Factores</div>
                  <div className="text-gray-400 text-sm">Agregar capa extra de seguridad</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Sesiones Múltiples</div>
                  <div className="text-gray-400 text-sm">Permitir múltiples sesiones activas</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" defaultChecked className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tiempo de Expiración de Sesión (minutos)
                </label>
                <input
                  type="number"
                  defaultValue="60"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Key className="w-4 h-4 inline mr-2" />
                  Cambiar Contraseña de Admin
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* API Settings */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center mb-6">
            <Database className="w-5 h-5 text-blue-400 mr-2" />
            <h3 className="text-lg font-semibold text-white">Configuración de API</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                API Key Pública
              </label>
              <div className="flex">
                <input
                  type="text"
                  value="pk_test_51HqZBn2eZvKYlo2C..."
                  readOnly
                  className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-gray-400"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700">
                  Copiar
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                placeholder="https://tu-dominio.com/webhooks"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}