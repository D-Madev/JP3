/* Navbar & props */
import Navbar from "../components/navbar/navbar.jsx"
import logo from "../assets/image.webp"
const links = [
  { to: '/categorias', label: 'Categorias' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/envios', label: 'Envios' },
  { to: '/descuentos', label: 'Descuentos' },
  { to: '/carrito', label: 'Carrito' },
]

export default function Inicio() {
  return(
    <>
      <Navbar logo={logo} links={links} />
    </>
  )
}