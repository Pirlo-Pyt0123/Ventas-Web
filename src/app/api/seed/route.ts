import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/auth'

const sampleProducts = [
  {
    name: 'iPhone 15 Pro',
    description: 'El iPhone más avanzado con chip A17 Pro y cámara profesional',
    price: 1199.99,
    stock: 25,
    category: 'SMARTPHONES',
    image: '/products/iphone-15-pro.jpg',
    featured: true
  },
  {
    name: 'MacBook Pro 14" M3',
    description: 'Laptop profesional con chip M3 y pantalla Liquid Retina XDR',
    price: 1999.99,
    stock: 15,
    category: 'LAPTOPS',
    image: '/products/macbook-pro-14-m3.jpg',
    featured: true
  },
  {
    name: 'PlayStation 5',
    description: 'Consola de videojuegos de nueva generación con SSD ultrarrápido',
    price: 499.99,
    stock: 40,
    category: 'GAMING',
    image: '/products/ps5.jpg',
    featured: true
  },
  {
    name: 'AirPods Pro (3ra Gen)',
    description: 'Auriculares inalámbricos con cancelación activa de ruido',
    price: 249.99,
    stock: 50,
    category: 'AUDIO',
    image: '/products/airpods-pro-3.jpg',
    featured: false
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: 'Smartphone premium con S Pen y cámara de 200MP',
    price: 1299.99,
    stock: 30,
    category: 'SMARTPHONES',
    image: '/products/galaxy-s24-ultra.jpg',
    featured: false
  },
  {
    name: 'Dell XPS 13',
    description: 'Laptop ultrabook con pantalla InfinityEdge y procesador Intel',
    price: 1399.99,
    stock: 20,
    category: 'LAPTOPS',
    image: '/products/dell-xps-13.jpg',
    featured: false
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Reloj inteligente con GPS y monitoreo avanzado de salud',
    price: 399.99,
    stock: 35,
    category: 'SMARTWATCHES',
    image: '/products/apple-watch-s9.jpg',
    featured: false
  },
  {
    name: 'iPad Pro 12.9"',
    description: 'Tablet profesional con chip M2 y pantalla Liquid Retina XDR',
    price: 1099.99,
    stock: 25,
    category: 'TABLETS',
    image: '/products/ipad-pro-12.jpg',
    featured: false
  }
]

export async function POST() {
  try {
    console.log('🌱 Seeding database...')

    // Clear existing data
    await prisma.cartItem.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.product.deleteMany()
    await prisma.user.deleteMany()

    // Create admin user
    const adminPassword = await hashPassword('admin123')
    const adminUser = await prisma.user.create({
      data: {
        name: 'Administrador',
        email: 'admin@techstore.com',
        password: adminPassword,
        role: 'ADMIN'
      }
    })

    // Create regular user
    const userPassword = await hashPassword('user123')
    const regularUser = await prisma.user.create({
      data: {
        name: 'Usuario Demo',
        email: 'user@techstore.com',
        password: userPassword,
        role: 'USER'
      }
    })

    // Create products
    for (const product of sampleProducts) {
      await prisma.product.create({
        data: product
      })
    }

    return NextResponse.json({
      message: '✅ Database seeded successfully!',
      users: [
        { email: adminUser.email, role: adminUser.role, password: 'admin123' },
        { email: regularUser.email, role: regularUser.role, password: 'user123' }
      ],
      products: sampleProducts.length
    })
  } catch (error) {
    console.error('❌ Seed error:', error)
    return NextResponse.json(
      { message: 'Error seeding database', error: String(error) },
      { status: 500 }
    )
  }
}