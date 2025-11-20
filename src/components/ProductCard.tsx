'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { useCartStore } from '@/stores/cart-store'
import { formatPrice } from '@/lib/utils'

interface Product {
  id: number
  name: string
  description: string | null
  price: number
  stock: number
  category: string
  image: string | null
  featured: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      productId: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image || '/placeholder-product.jpg',
      stock: product.stock,
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.image || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Agotado</span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">4.5</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.stock <= 5 && product.stock > 0 && (
              <p className="text-xs text-orange-600">
                Solo quedan {product.stock}
              </p>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors duration-200"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  )
}