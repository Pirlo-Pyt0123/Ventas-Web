'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Settings, 
  LogOut,
  Menu,
  X,
  Bell
} from 'lucide-react'
import ProtectedUserLayout from './ProtectedUserLayout'
import { useAuth } from '@/contexts/AuthContext'

const navigation = [
  { name: 'Mi Perfil', href: '/user/profile', icon: User, current: true },
  { name: 'Mis Pedidos', href: '/user/orders', icon: ShoppingBag, current: false },
  { name: 'Lista de Deseos', href: '/user/wishlist', icon: Heart, current: false },
  { name: 'Direcciones', href: '/user/addresses', icon: MapPin, current: false },
  { name: 'Métodos de Pago', href: '/user/payment-methods', icon: CreditCard, current: false },
  { name: 'Configuración', href: '/user/settings', icon: Settings, current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function UserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()

  return (
    <ProtectedUserLayout>
      <div className="min-h-screen bg-gray-900">
        {/* Mobile sidebar */}
        <div className={classNames(
          sidebarOpen ? 'fixed inset-0 z-50 lg:hidden' : 'hidden'
        )}>
          <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
          <div className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
            <div className="flex items-center justify-between">
              <Link href="/user/profile" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <span className="text-xl font-bold text-white">Mi Cuenta</span>
              </Link>
              <button
                type="button"
                className="text-gray-400 hover:text-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-700 text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon className="h-6 w-6 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 border-r border-gray-700 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <Link href="/user/profile" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">U</span>
                </div>
                <span className="text-xl font-bold text-white">Mi Cuenta</span>
              </Link>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul className="space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-700 text-white'
                              : 'text-gray-300 hover:text-white hover:bg-gray-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <item.icon className="h-6 w-6 shrink-0" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <Link
                    href="/"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <LogOut className="h-6 w-6 shrink-0" />
                    Volver a la tienda
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:pl-72">
          {/* Top nav */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-700 bg-gray-800 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-300 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Breadcrumb */}
            <div className="flex flex-1 gap-x-4 self-stretch">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold text-white">Panel de Usuario</h1>
              </div>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="p-2.5 text-gray-300 hover:text-white">
                <Bell className="h-6 w-6" />
              </button>

              <div className="h-6 w-px bg-gray-600 lg:hidden" />

              <div className="flex items-center gap-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="hidden lg:flex lg:items-center">
                  <span className="ml-2 text-sm font-semibold leading-6 text-white">{user?.name || 'Usuario'}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Main content area */}
          <main className="py-6">
            <div className="px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedUserLayout>
  )
}