# 🛒 TechStore - E-commerce Platform

Una plataforma completa de e-commerce desarrollada con Next.js 14, TypeScript, Tailwind CSS y Prisma. El sistema incluye autenticación basada en roles, panel administrativo y experiencia de usuario completa.

## ✨ Características

### 🔐 Sistema de Autenticación
- **Autenticación basada en roles** (Admin/Usuario)
- **Cuentas demo** preconfiguradas para pruebas
- **Protección de rutas** automática por rol
- **Experiencias separadas** para admin y usuarios

### 👨‍💼 Panel de Administración
- Dashboard con estadísticas en tiempo real
- Gestión completa de productos
- Administración de usuarios
- Seguimiento de pedidos
- Analytics y reportes
- Configuración del sistema

### 👤 Panel de Usuario
- Perfil de usuario personalizable
- Historial de pedidos
- Lista de deseos
- Gestión de direcciones
- Métodos de pago
- Configuración de cuenta

### 🛍️ Tienda Online
- Catálogo de productos con filtros
- Búsqueda avanzada
- Carrito de compras persistente
- Diseño responsive
- Tema oscuro profesional

## 🚀 Inicio Rápido

### Prerrequisitos

- **Node.js** 18.0 o superior
- **npm** o **yarn**
- **Git**

### 📦 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Pirlo-Pyt0123/Ventas-Web.git
cd Ventas-Web
```

2. **Instala las dependencias**
```bash
npm install
# o
yarn install
```

3. **Configura la base de datos**
```bash
# Ejecuta las migraciones de Prisma
npx prisma migrate dev

# Pobla la base de datos con datos de ejemplo
npm run db:seed
```

4. **Inicia el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **¡Listo!** Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🔑 Cuentas Demo

Para probar el sistema, usa estas credenciales preconfiguradas:

### 👨‍💼 Cuenta Administrador
- **Email:** `admin@techstore.com`
- **Contraseña:** `admin123`
- **Acceso:** Dashboard administrativo completo

### 👤 Cuenta Usuario
- **Email:** `user@techstore.com`
- **Contraseña:** `user123`
- **Acceso:** Tienda online + Panel de usuario

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── admin/             # Rutas del panel administrativo
│   ├── auth/              # Páginas de autenticación
│   ├── user/              # Panel de usuario
│   ├── products/          # Catálogo de productos
│   └── api/               # API Routes
├── components/            # Componentes reutilizables
│   ├── AdminLayout.tsx    # Layout del admin
│   ├── UserLayout.tsx     # Layout del usuario
│   ├── StoreLayout.tsx    # Layout de la tienda
│   └── ...
├── contexts/              # Context API (Auth)
├── lib/                   # Utilidades y configuración
├── stores/                # Estado global (Zustand)
└── styles/                # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

### Frontend
- **[Next.js 16](https://nextjs.org/)** - Framework React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS utility-first
- **[React Hook Form](https://react-hook-form.com/)** - Manejo de formularios
- **[Zod](https://zod.dev/)** - Validación de esquemas
- **[Zustand](https://github.com/pmndrs/zustand)** - Estado global
- **[Lucide React](https://lucide.dev/)** - Iconos

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - ORM para base de datos
- **[SQLite](https://www.sqlite.org/)** - Base de datos (desarrollo)
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Hash de contraseñas

## 📁 Estructura de la Base de Datos

El proyecto incluye un esquema completo de base de datos con:

- **Usuarios** (con roles admin/user)
- **Productos** (con categorías y precios)
- **Carritos** y elementos del carrito
- **Pedidos** y seguimiento
- **Categorías** de productos

## 🎨 Diseño y UX

- **Tema oscuro profesional** con colores gray-900/800/700
- **Diseño responsive** optimizado para móvil
- **Interfaz moderna** con gradientes y efectos visuales
- **Navegación intuitiva** adaptada por rol de usuario
- **Feedback visual** con estados de carga y validación

## 📱 Funcionalidades por Rol

### 🔒 Administrador
- **Dashboard exclusivo** con métricas
- **No tiene acceso** a la tienda como cliente
- **Gestión completa** del sistema
- **Logout directo** sin navegación a tienda

### 👥 Usuario Regular
- **Acceso completo** a la tienda online
- **Panel de usuario** con gestión de cuenta
- **Carrito persistente** entre sesiones
- **Navegación** entre tienda y perfil

### 🌐 Visitantes
- **Solo acceso** a página de login
- **No pueden** navegar sin autenticarse
- **Registro** disponible (funcional en desarrollo)

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Producción
npm run build           # Compilar para producción
npm run start           # Servidor de producción

# Base de datos
npm run db:migrate      # Ejecutar migraciones
npm run db:seed         # Poblar con datos de ejemplo
npm run db:reset        # Resetear base de datos

# Calidad de código
npm run lint            # Ejecutar ESLint
```

## 🔧 Configuración Adicional

### Variables de Entorno

Crea un archivo `.env` (opcional para desarrollo):

```env
# Base de datos (SQLite por defecto)
DATABASE_URL="file:./dev.db"

# Para producción, cambia a tu base de datos preferida:
# DATABASE_URL="postgresql://user:pass@host:5432/dbname"
```

### Base de Datos en Producción

Para usar en producción, cambia la configuración en `prisma/schema.prisma`:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // Cambia de "sqlite" a "postgresql"
  url      = env("DATABASE_URL")
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la branch (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes problemas con la instalación o configuración:

1. **Verifica** que tengas Node.js 18+ instalado
2. **Elimina** `node_modules` y ejecuta `npm install` nuevamente
3. **Ejecuta** `npm run db:reset` para resetear la base de datos
4. **Revisa** que el puerto 3000 esté disponible

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ usando Next.js, TypeScript y Tailwind CSS**

### 🎯 Estado del Proyecto

✅ **Completo y Funcional**
- Sistema de autenticación implementado
- Panel administrativo completo  
- Panel de usuario funcional
- Carrito de compras operativo
- Base de datos poblada con productos
- Diseño responsive y profesional

🚧 **Próximas Mejoras** (Opcional)
- Integración con pasarelas de pago
- Sistema de notificaciones
- Chat en vivo
- App móvil con React Native
- Dashboard de analytics avanzado
