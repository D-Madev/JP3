# Drakonis

## 🛒 Descripción

**Drakonis** es una tienda online dedicada a la venta de artículos impresos en 3D. Nuestro objetivo es combinar **innovación, diversión y diseño**, ofreciendo productos que transforman hogares y momentos familiares en experiencias memorables.

Desde juguetes para niños hasta decoración de interiores, nuestro catálogo está pensado para satisfacer gustos diversos, aportando **calidad, creatividad y personalidad** en cada producto.

---

## 🎯 Objetivos del proyecto

* Crear una **experiencia de compra fluida y moderna** para usuarios de todas las edades.
* Facilitar la exploración del catálogo con filtros y categorías intuitivas.
* Implementar un **frontend escalable y modular** usando React y Vite.
* Preparar la base para integraciones con **servicios externos** como pasarelas de pago, APIs de inventario y analíticas.

---

## 🗂 Estructura del proyecto

```
src/
│
├─ assets/       # Imágenes, íconos y fuentes globales
├─ components/   # Componentes reutilizables (Botones, Loader, Navbar)
├─ layouts/      # Layouts persistentes (Header/Footer/Sidebar)
├─ pages/        # Páginas principales (Home, Product, Cart, Checkout)
├─ features/     # Funcionalidades completas con hooks, UI y servicios
├─ store/        # Estado global (Zustand/Redux)
├─ services/     # Llamadas a APIs y configuración de clientes HTTP
├─ utils/        # Funciones auxiliares (formateo, validaciones)
├─ styles/       # Estilos globales y variables CSS
├─ App.jsx       # Configuración central de rutas (lazy-loading)
└─ main.jsx
```

---

## ⚛️ Tecnologías utilizadas

* **React**: Biblioteca para construir interfaces de usuario.
* **Vite**: Bundler y dev server rápido.
* **React Router**: Manejo de rutas y layouts.
* **Framer Motion**: Animaciones fluidas y transiciones.
* **CSS Modules**: Estilos locales por componente.
* **Zustand / Redux** (opcional): Estado global de la aplicación.

---

## 🚀 Funcionalidades principales a implementar

* Catálogo de productos con **paginación y filtros**.
* Carrito de compras y resumen de pedidos.
* Páginas de detalle de productos con imágenes y descripciones.
* Lazy-loading de páginas para mejorar la **carga inicial**.
* Layout persistente con **navbar, footer y sidebar**.
* Responsive y optimizado para **dispositivos móviles y escritorio**.
* Página de error 404 con redirección amigable.

---

## 🛠 Instalación y desarrollo

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/drakonis.git
cd drakonis
```

2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

4. Construir para producción:

```bash
npm run build
```

---

## 📂 Buenas prácticas aplicadas

* Separación de responsabilidades: `pages`, `components`, `features`.
* Lazy-loading de páginas con `React.lazy` y `Suspense`.
* CSS Modules para estilos encapsulados y mantenibles.
* Layouts persistentes que no re-renderizan innecesariamente.

---

## 🤝 Contribución

* Fork del proyecto.
* Crear branch con tu feature: `git checkout -b feature/nueva-funcionalidad`
* Commit con mensaje claro: `git commit -m "Agrega descripción de la feature"`
* Push a tu branch y abrir un Pull Request.

---

## 📄 Licencia

© 2025 Tu Nombre / Drakonis. Todos los derechos reservados.  
Prohibida la copia, distribución, modificación o uso sin autorización expresa del autor.

---
