import { Outlet } from 'react-router-dom'
import Navbar from "../components/navbar/Navbar.jsx"
import Footer from '../components/footer/Footer.jsx'

import DynamicBackground from "../components/ui/DynamicBackground.jsx"
import logo from "/logo.webp"

/* Import Icons */
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function MainLayout() {
  const links = [
    { to: '/categorias', label: 'Categorias', icon: <IoIosArrowDown /> },
    { to: '/servicios', label: 'Servicios', icon: <IoIosArrowDown /> },
    { to: '/catalogo', label: 'Catalogo' },
    { to: '/envios', label: 'Envios' },
    { to: '/descuentos', label: 'Descuentos' },
    { to: '/carrito', label: 'Carrito', icon: <IoCartOutline /> },
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