import { Suspense } from 'react'
import { prisma } from '@/lib/prisma'
import ProductCard from '@/components/ProductCard'
import StoreLayout from '@/components/StoreLayout'

interface SearchParams {
  category?: string
  search?: string
}

async function getProducts(searchParams: SearchParams) {
  const { category, search } = searchParams
  
  const where: any = {}
  
  if (category && category !== '') {
    where.category = category
  }
  
  if (search) {
    where.OR = [
      { name: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ]
  }
  
  try {
    const products = await prisma.product.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    })
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

async function ProductsContent({ searchParams }: { searchParams: SearchParams }) {
  const products = await getProducts(searchParams)
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-12">
          <h3 className="text-lg font-medium text-white mb-2">
            No se encontraron productos
          </h3>
          <p className="text-gray-400">
            Intenta ajustar tus filtros de búsqueda
          </p>
        </div>
      )}
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse border border-gray-700">
          <div className="h-48 bg-gray-700"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 w-3/4"></div>
            <div className="h-8 bg-gray-700 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function ProductsPage() {
  const categories = [
    { value: '', label: 'Todas las categorías' },
    { value: 'SMARTPHONES', label: 'Smartphones' },
    { value: 'LAPTOPS', label: 'Laptops' },
    { value: 'TABLETS', label: 'Tablets' },
    { value: 'GAMING', label: 'Gaming' },
    { value: 'AUDIO', label: 'Audio' },
    { value: 'SMARTWATCHES', label: 'Smartwatches' },
    { value: 'ACCESSORIES', label: 'Accesorios' },
    { value: 'COMPONENTS', label: 'Componentes' },
  ]

  return (
    <StoreLayout>
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              Productos
            </h1>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <select className="px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white">
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              
              <input
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white placeholder-gray-400"
              />
            </div>
          </div>

          {/* Products Grid */}
          <Suspense fallback={<LoadingSkeleton />}>
            <ProductsContent searchParams={{}} />
          </Suspense>
        </div>
      </div>
    </StoreLayout>
  )
}