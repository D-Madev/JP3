/* Outlet */
import { Outlet } from 'react-router-dom'

/* Navbar & props */
import Navbar from "../components/navbar/Navbar.jsx"
import logo from "/logo.webp"


export default function MainLayout() {
  const links = [
    { to: '/categorias', label: 'Categorias' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/envios', label: 'Envios' },
    { to: '/descuentos', label: 'Descuentos' },
    { to: '/carrito', label: 'Carrito' },
  ]

  return(
    <>
      <Navbar logo={logo} links={links} />
      {/* Aquí se renderizan las páginas hijas */}
      <main>
        <Outlet />
      </main>
    </>
  )
}