'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.push('/auth/login')
      } else if (user.role !== 'admin') {
        router.push('/')
      }
    }
  }, [user, isLoading, router])

  // Mostrar loading mientras verifica auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  // Si no hay usuario o no es admin, no mostrar nada (se está redirigiendo)
  if (!user || user.role !== 'admin') {
    return null
  }

  return <>{children}</>
}