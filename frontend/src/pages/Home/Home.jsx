/* Navbar & props */
import Navbar from "../../components/navbar/Navbar.jsx"
import logo from "../assets/image.webp"
const links = [
  { to: '/categorias', label: 'Categorias' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/envios', label: 'Envios' },
  { to: '/descuentos', label: 'Descuentos' },
  { to: '/carrito', label: 'Carrito' },
]

export default function Home() {
  return(
    <>
      <Navbar logo={logo} links={links} />
    </>
  )
}