'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

type User = {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Usuarios de ejemplo (en producción vendría de la base de datos)
const mockUsers = [
  { id: 1, email: 'admin@techstore.com', password: 'admin123', name: 'Administrador', role: 'admin' as const },
  { id: 2, email: 'juan@example.com', password: 'user123', name: 'Juan Pérez', role: 'user' as const },
  { id: 3, email: 'user@techstore.com', password: 'user123', name: 'Usuario Demo', role: 'user' as const },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Verificar si hay una sesión guardada al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    // Simular llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const foundUser = mockUsers.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      const userData = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
      }
      
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      
      // Redirigir según el rol
      if (foundUser.role === 'admin') {
        router.push('/admin')
      } else {
        router.push('/') // Los usuarios siguen viendo la tienda
      }
      
      setIsLoading(false)
      return true
    }
    
    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider')
  }
  return context
}