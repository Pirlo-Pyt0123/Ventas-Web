'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Eye, EyeOff, Loader2, UserCheck, Shield } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    try {
      const success = await login(data.email, data.password)
      
      if (!success) {
        setError('root', {
          message: 'Credenciales inválidas',
        })
      }
    } catch (error) {
      setError('root', {
        message: 'Error al iniciar sesión',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <h2 className="text-3xl font-bold text-white">
            Iniciar Sesión
          </h2>
          <p className="mt-2 text-sm text-gray-300">
            ¿No tienes cuenta?{' '}
            <Link
              href="/auth/register"
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-700">
          {/* Demo Credentials */}
          <div className="mb-6 space-y-3">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Shield className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-sm font-medium text-white">Cuenta Admin</h3>
              </div>
              <p className="text-xs text-gray-300 mb-1">Email: admin@techstore.com</p>
              <p className="text-xs text-gray-300">Contraseña: admin123</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <UserCheck className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="text-sm font-medium text-white">Cuenta Usuario</h3>
              </div>
              <p className="text-xs text-gray-300 mb-1">Email: user@techstore.com</p>
              <p className="text-xs text-gray-300">Contraseña: user123</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register('email')}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  {...register('password')}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg shadow-sm placeholder-gray-400 bg-gray-700 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
              )}
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Recordarme
                </label>
              </div>

              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            {/* Error message */}
            {errors.root && (
              <div className="bg-red-900 border border-red-600 text-red-300 px-4 py-3 rounded-lg">
                <p className="text-sm">{errors.root.message}</p>
              </div>
            )}

            {/* Submit button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Iniciando sesión...
                  </>
                ) : (
                  'Iniciar Sesión'
                )}
              </button>
            </div>

            {/* Additional links */}
            <div className="text-center">
              <p className="text-sm text-gray-400">
                ¿Necesitas ayuda?{' '}
                <Link
                  href="#"
                  className="font-medium text-blue-400 hover:text-blue-300"
                >
                  Contactar soporte
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}