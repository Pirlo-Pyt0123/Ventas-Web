'use client'

import { useAuth } from '@/contexts/AuthContext'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // Si es admin, redirigir al dashboard admin
    if (user && user.role === 'admin') {
      router.push('/admin')
    }
  }, [user, router])

  // Si es admin, no mostrar nada (se está redirigiendo)
  if (user && user.role === 'admin') {
    return null
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}