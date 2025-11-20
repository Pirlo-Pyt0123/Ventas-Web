'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart, User, LogOut, Search, Menu } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { useAuth } from '@/contexts/AuthContext'

export default function Navbar() {
  const totalItems = useCartStore((state) => state.getTotalItems())
  const { user, logout } = useAuth()

  return (
    <nav className="bg-gray-900 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="text-xl font-bold text-white">Tech<span className="text-blue-400">Store</span></span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Categories - Solo para usuarios logueados que no sean admin */}
            {(!user || user.role === 'user') && (
              <Link
                href="/products"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Productos
              </Link>
            )}

            {/* Cart - Solo para usuarios que no sean admin */}
            {(!user || user.role === 'user') && (
              <Link href="/cart" className="relative p-2">
                <ShoppingCart className="h-6 w-6 text-gray-300 hover:text-white" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            )}

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-2">
                {user.role === 'user' && (
                  <Link
                    href="/user/profile"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <User className="h-5 w-5" />
                    <span>Mi Perfil</span>
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  <div className="text-gray-300 text-sm">
                    Hola, <span className="font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-2 text-gray-300 hover:text-red-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Salir</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  href="/auth/login"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-blue-600 text-white hover:bg-blue-500 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Registrarse
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}