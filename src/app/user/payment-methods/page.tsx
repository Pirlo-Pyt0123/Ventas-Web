import Link from 'next/link'
import UserLayout from '@/components/UserLayout'
import { 
  Plus, 
  CreditCard,
  Edit,
  Trash2,
  Check,
  Shield,
  Smartphone,
  Building,
  Calendar,
  Lock
} from 'lucide-react'

const paymentMethods = [
  {
    id: 1,
    type: 'credit_card',
    brand: 'visa',
    last4: '4242',
    expiryMonth: 12,
    expiryYear: 2026,
    holderName: 'Juan Pérez',
    isDefault: true,
    nickname: 'Tarjeta Principal'
  },
  {
    id: 2,
    type: 'credit_card',
    brand: 'mastercard',
    last4: '8888',
    expiryMonth: 8,
    expiryYear: 2025,
    holderName: 'Juan Pérez',
    isDefault: false,
    nickname: 'Tarjeta de Trabajo'
  },
  {
    id: 3,
    type: 'paypal',
    email: 'juan.perez@example.com',
    isDefault: false,
    nickname: 'PayPal Personal'
  }
]

function getCardBrandIcon(brand: string) {
  switch (brand) {
    case 'visa':
      return (
        <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">VISA</span>
        </div>
      )
    case 'mastercard':
      return (
        <div className="w-10 h-6 bg-red-600 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">MC</span>
        </div>
      )
    default:
      return <CreditCard className="w-6 h-6 text-gray-400" />
  }
}

function getPaymentIcon(type: string) {
  switch (type) {
    case 'credit_card':
      return <CreditCard className="w-5 h-5" />
    case 'paypal':
      return <Smartphone className="w-5 h-5" />
    case 'bank':
      return <Building className="w-5 h-5" />
    default:
      return <CreditCard className="w-5 h-5" />
  }
}

export default function UserPaymentMethods() {
  return (
    <UserLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Métodos de Pago</h1>
            <p className="text-gray-400 mt-1">Gestiona tus formas de pago de manera segura</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Agregar Método
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-900/20 border border-blue-700 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <div className="text-blue-400 font-medium">Información Segura</div>
              <div className="text-gray-300 text-sm mt-1">
                Todos los datos de pago están encriptados y protegidos con los más altos estándares de seguridad.
                Nunca almacenamos información completa de tarjetas.
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Icon/Brand */}
                  <div className="p-3 bg-gray-700 rounded-lg text-blue-400">
                    {method.type === 'credit_card' ? getPaymentIcon(method.type) : getPaymentIcon(method.type)}
                  </div>

                  {/* Method Details */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-semibold text-white">
                        {method.nickname || (method.type === 'credit_card' ? 'Tarjeta de Crédito' : 'PayPal')}
                      </h3>
                      {method.isDefault && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          <Check className="w-3 h-3 mr-1" />
                          Predeterminado
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-2">
                      {method.type === 'credit_card' ? (
                        <>
                          {getCardBrandIcon(method.brand)}
                          <span className="text-gray-300">
                            •••• •••• •••• {method.last4}
                          </span>
                          <span className="text-gray-400 text-sm">
                            Expira {String(method.expiryMonth).padStart(2, '0')}/{method.expiryYear}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-300">{method.email}</span>
                      )}
                    </div>
                    
                    {method.type === 'credit_card' && (
                      <div className="text-gray-400 text-sm mt-1">
                        {method.holderName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {!method.isDefault && (
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium ml-4">
                      Establecer como predeterminado
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Payment Method */}
        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
          <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Agregar Nuevo Método de Pago</h3>
          <p className="text-gray-400 text-sm mb-6">Añade una tarjeta de crédito, débito o cuenta PayPal</p>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <CreditCard className="w-4 h-4 mr-2" />
              Tarjeta
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
              <Smartphone className="w-4 h-4 mr-2" />
              PayPal
            </button>
          </div>
        </div>

        {/* Payment Security Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Encriptación SSL</h3>
            <p className="text-gray-400 text-sm">Todos los datos están protegidos con encriptación de grado bancario</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">PCI DSS Certificado</h3>
            <p className="text-gray-400 text-sm">Cumplimos con los estándares internacionales de seguridad</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-2">Verificación 24/7</h3>
            <p className="text-gray-400 text-sm">Monitoreo constante para detectar actividades sospechosas</p>
          </div>
        </div>
      </div>
    </UserLayout>
  )
}