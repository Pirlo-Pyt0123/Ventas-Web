const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'El iPhone más avanzado con chip A17 Pro y cámara profesional',
    price: 1199.99,
    stock: 25,
    category: 'SMARTPHONES',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    name: 'MacBook Pro 14" M3',
    description: 'Laptop profesional con chip M3 y pantalla Liquid Retina XDR',
    price: 1999.99,
    stock: 15,
    category: 'LAPTOPS',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    name: 'PlayStation 5',
    description: 'Consola de videojuegos de nueva generación con SSD ultrarrápido',
    price: 499.99,
    stock: 40,
    category: 'GAMING',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: true
  },
  {
    name: 'AirPods Pro (3ra Gen)',
    description: 'Auriculares inalámbricos con cancelación activa de ruido',
    price: 249.99,
    stock: 50,
    category: 'AUDIO',
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Smartphone premium con S Pen y cámara de 200MP',
    price: 1299.99,
    stock: 30,
    category: 'SMARTPHONES',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    name: 'Dell XPS 13',
    description: 'Laptop ultrabook con pantalla InfinityEdge y procesador Intel',
    price: 1399.99,
    stock: 20,
    category: 'LAPTOPS',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Reloj inteligente con GPS y monitoreo avanzado de salud',
    price: 399.99,
    stock: 35,
    category: 'SMARTWATCHES',
    image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: false
  },
  {
    name: 'iPad Pro 12.9"',
    description: 'Tablet profesional con chip M2 y pantalla Liquid Retina XDR',
    price: 1099.99,
    stock: 25,
    category: 'TABLETS',
    image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    featured: false
  }
]

async function main() {
  console.log('🌱 Iniciando seeding de la base de datos...')

  try {
    // Limpiar datos existentes
    await prisma.cartItem.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.product.deleteMany()
    await prisma.user.deleteMany()
    console.log('🗑️  Datos anteriores limpiados')

    // Crear usuarios
    const adminPassword = await bcrypt.hash('admin123', 12)
    const adminUser = await prisma.user.create({
      data: {
        name: 'Administrador',
        email: 'admin@techstore.com',
        password: adminPassword,
        role: 'ADMIN'
      }
    })
    console.log('✅ Usuario admin creado:', adminUser.email)

    const userPassword = await bcrypt.hash('user123', 12)
    const regularUser = await prisma.user.create({
      data: {
        name: 'Usuario Demo',
        email: 'user@techstore.com',
        password: userPassword,
        role: 'USER'
      }
    })
    console.log('✅ Usuario regular creado:', regularUser.email)

    // Crear productos
    for (const product of sampleProducts) {
      const createdProduct = await prisma.product.create({
        data: product
      })
      console.log(`✅ Producto creado: ${createdProduct.name}`)
    }

    console.log('🎉 ¡Seeding completado exitosamente!')
    console.log(`📊 Usuarios creados: 2`)
    console.log(`📦 Productos creados: ${sampleProducts.length}`)
    console.log('')
    console.log('🔐 Credenciales de acceso:')
    console.log('👨‍💼 Admin: admin@techstore.com / admin123')
    console.log('👤 Usuario: user@techstore.com / user123')

  } catch (error) {
    console.error('❌ Error durante el seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })