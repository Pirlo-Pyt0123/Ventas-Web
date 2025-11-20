# 🚀 Instrucciones de Instalación - TechStore

## ⚡ Inicio Rápido (3 pasos)

### 1. Clonar e Instalar
```bash
git clone https://github.com/Pirlo-Pyt0123/Ventas-Web.git
cd Ventas-Web
npm install
```

### 2. Configurar Base de Datos
```bash
npx prisma migrate dev
npm run db:seed
```

### 3. Ejecutar el Proyecto
```bash
npm run dev
```

**¡Listo!** Ve a [http://localhost:3000](http://localhost:3000)

---

## 🔑 Credenciales de Prueba

### 👨‍💼 Admin
- **Email:** admin@techstore.com  
- **Contraseña:** admin123

### 👤 Usuario
- **Email:** user@techstore.com  
- **Contraseña:** user123

---

## ❓ ¿Qué incluye el proyecto?

✅ **Sistema completo de e-commerce**  
✅ **Autenticación basada en roles**  
✅ **Panel de administración**  
✅ **Panel de usuario**  
✅ **Carrito de compras**  
✅ **Base de datos con productos**  
✅ **Diseño responsive**

---

## 🛠️ Si algo sale mal

### Error de dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de base de datos:
```bash
npm run db:reset
npm run db:seed
```

### Puerto ocupado:
- El proyecto usa el puerto 3000
- Cierra otros servidores de desarrollo
- O cambia el puerto: `npm run dev -- --port 3001`

---

## 📁 Lo que NO se sube a GitHub

- `node_modules/` - Carpeta de dependencias (se instala con `npm install`)
- `.env*` - Variables de entorno (opcionales para este proyecto)
- `*.db` - Archivos de base de datos SQLite (se crean automáticamente)
- `.next/` - Archivos de compilación de Next.js

Por eso es **esencial** ejecutar `npm install` y configurar la base de datos después de clonar.