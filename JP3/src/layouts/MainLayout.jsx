import { Outlet } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar.jsx"
import Footer from '../components/footer/Footer.jsx'

import DynamicBackground from "../components/ui/DynamicBackground.jsx"
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
    <DynamicBackground>
      <Navbar logo={logo} links={links} />
      {/* Aquí se renderizan las páginas hijas */}
      <Outlet />
      <Footer logo={logo} />
    </DynamicBackground>
  )
}