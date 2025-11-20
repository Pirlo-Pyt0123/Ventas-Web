import AdminLayout from '@/components/AdminLayout'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Package 
} from 'lucide-react'

const salesData = [
  { month: 'Ene', sales: 4500, orders: 23 },
  { month: 'Feb', sales: 5200, orders: 31 },
  { month: 'Mar', sales: 4800, orders: 28 },
  { month: 'Abr', sales: 6100, orders: 42 },
  { month: 'May', sales: 7300, orders: 51 },
  { month: 'Jun', sales: 6800, orders: 47 },
  { month: 'Jul', sales: 8900, orders: 62 },
  { month: 'Ago', sales: 9500, orders: 68 },
  { month: 'Sep', sales: 8200, orders: 59 },
  { month: 'Oct', sales: 9800, orders: 73 },
  { month: 'Nov', sales: 11200, orders: 84 },
  { month: 'Dic', sales: 13500, orders: 98 }
]

const topCategories = [
  { name: 'Smartphones', sales: 45231, percentage: 35 },
  { name: 'Laptops', sales: 28900, percentage: 22 },
  { name: 'Tablets', sales: 19800, percentage: 15 },
  { name: 'Audio', sales: 16500, percentage: 13 },
  { name: 'Smartwatches', sales: 12400, percentage: 10 },
  { name: 'Accesorios', sales: 6700, percentage: 5 }
]

const recentActivity = [
  { type: 'sale', description: 'Nueva venta de iPhone 15 Pro', amount: '$999', time: 'Hace 5 min' },
  { type: 'user', description: 'Nuevo usuario registrado', amount: '', time: 'Hace 12 min' },
  { type: 'order', description: 'Pedido ORD-2024-007 procesado', amount: '$1,299', time: 'Hace 23 min' },
  { type: 'product', description: 'Stock bajo: Apple Watch Series 9', amount: '', time: 'Hace 1 hora' },
  { type: 'sale', description: 'Venta completada: MacBook Air M3', amount: '$1,299', time: 'Hace 2 horas' }
]

export default function AnalyticsAdmin() {
  const maxSales = Math.max(...salesData.map(d => d.sales))

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Estadísticas</h1>
            <p className="text-gray-400 mt-1">Análisis de rendimiento de tu tienda</p>
          </div>
          <div className="flex space-x-3">
            <select className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500">
              <option>Últimos 30 días</option>
              <option>Últimos 90 días</option>
              <option>Este año</option>
              <option>Todo el tiempo</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Ingresos Totales</p>
                <p className="text-2xl font-bold text-white">$129,456</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+12.5%</span>
                  <span className="text-gray-400 text-sm ml-2">vs mes anterior</span>
                </div>
              </div>
              <div className="p-3 bg-blue-600 rounded-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pedidos</p>
                <p className="text-2xl font-bold text-white">1,247</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+8.2%</span>
                  <span className="text-gray-400 text-sm ml-2">vs mes anterior</span>
                </div>
              </div>
              <div className="p-3 bg-green-600 rounded-lg">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Nuevos Clientes</p>
                <p className="text-2xl font-bold text-white">342</p>
                <div className="flex items-center mt-2">
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  <span className="text-red-500 text-sm">-2.1%</span>
                  <span className="text-gray-400 text-sm ml-2">vs mes anterior</span>
                </div>
              </div>
              <div className="p-3 bg-purple-600 rounded-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Productos Vendidos</p>
                <p className="text-2xl font-bold text-white">2,847</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-500 text-sm">+15.3%</span>
                  <span className="text-gray-400 text-sm ml-2">vs mes anterior</span>
                </div>
              </div>
              <div className="p-3 bg-orange-600 rounded-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Sales Chart */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Ventas Mensuales</h3>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="h-80">
            <div className="flex items-end justify-between h-full space-x-2">
              {salesData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-gray-700 rounded-t relative">
                    <div 
                      className="bg-blue-600 rounded-t transition-all duration-500 ease-out"
                      style={{ 
                        height: `${(data.sales / maxSales) * 200}px`,
                        minHeight: '8px'
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-2 text-center">
                    <div>{data.month}</div>
                    <div className="text-white font-medium">${(data.sales / 1000).toFixed(1)}k</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Grid layout for additional charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Categories */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Categorías Más Vendidas</h3>
            <div className="space-y-4">
              {topCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{category.name}</div>
                      <div className="text-gray-400 text-sm">${category.sales.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                    <span className="text-gray-300 text-sm w-8">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Actividad Reciente</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'sale' ? 'bg-green-500' :
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'order' ? 'bg-purple-500' :
                    activity.type === 'product' ? 'bg-yellow-500' :
                    'bg-gray-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm">{activity.description}</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-gray-400 text-xs">{activity.time}</p>
                      {activity.amount && (
                        <p className="text-green-400 text-sm font-medium">{activity.amount}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">$92.50</div>
            <div className="text-gray-400 text-sm">Valor Promedio del Pedido</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+5.2%</span>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">3.2%</div>
            <div className="text-gray-400 text-sm">Tasa de Conversión</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+0.8%</span>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-white">89.5%</div>
            <div className="text-gray-400 text-sm">Satisfacción del Cliente</div>
            <div className="flex items-center justify-center mt-2">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+2.1%</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}