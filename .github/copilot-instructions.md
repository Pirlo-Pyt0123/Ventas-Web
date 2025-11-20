# TechStore E-commerce Project

Este es un proyecto de e-commerce completo desarrollado con Next.js 14, TypeScript, Tailwind CSS y Prisma.

## Características del Proyecto

### Implementado
- Frontend moderno con Next.js 14 + App Router
- Interfaz responsive con Tailwind CSS
- Sistema de carrito de compras con Zustand
- Páginas de autenticación (login/registro)
- Catálogo de productos con filtros
- Navegación completa con navbar
- APIs preparadas para autenticación

### Arquitectura
- **Frontend**: Next.js 14, React, TypeScript
- **Estilos**: Tailwind CSS
- **Estado**: Zustand para carrito de compras
- **Base de datos**: Prisma ORM con PostgreSQL
- **Validación**: React Hook Form + Zod
- **Iconos**: Lucide React

### Estructura de Directorios
```
src/
├── app/                 # App Router (páginas y API routes)
├── components/          # Componentes reutilizables
├── lib/                # Utilidades y configuración
└── stores/             # Estado global con Zustand
```

### Funcionalidades Principales
1. **Página de inicio** con hero section y categorías
2. **Catálogo de productos** con búsqueda y filtros
3. **Carrito de compras** funcional con persistencia
4. **Sistema de autenticación** con formularios validados
5. **Diseño responsive** optimizado para móvil

### Para Desarrollo Futuro
- Conectar base de datos PostgreSQL real
- Implementar autenticación completa con NextAuth.js
- Crear panel de administración
- Añadir sistema de pagos
- Desarrollar gestión de pedidos

## Comandos Útiles

```bash
npm run dev          # Ejecutar en desarrollo
npm run build        # Compilar para producción
npm run lint         # Ejecutar linter
npm run db:migrate   # Migrar base de datos
npm run db:seed      # Poblar datos de ejemplo
```

## Estado Actual
✅ Proyecto completamente funcional en modo desarrollo
🔄 Listo para expansión con base de datos y autenticación real