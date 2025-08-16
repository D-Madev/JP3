import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './navbar.module.css'

export default function Navbar({logo, links}) {
  const location = useLocation()
  const isVisible = true
  const [menuOpen, setMenuOpen] = useState(false)

  // Cerrar al navegar
  useEffect(() => setMenuOpen(false), [location]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);
  
  return (
    <AnimatePresence>      

      {/* Variable para animar desapacion con estados globales */}
      {isVisible && (
        <motion.nav 
          className={styles.navbar}
          key={"navbar"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}>

            {/* Navbar logo */}
            <Link to="/inicio" className={styles.logoContainer}>
              <img src={logo} alt="logo-drakonis" className={styles.logo}/>
            </Link>

            
            {/* Hamburger menu */}
            <span className={`${styles.hamburger} ${menuOpen?styles.active:''}`} onClick={() => setMenuOpen(!menuOpen)}>☰</span>

            {/* Component to close hamburger menu */}
            {menuOpen && (<div className={styles.backdrop} onClick={() => setMenuOpen(false)}/>)}

            {/* Endpoints */}
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to}
                      className={({ isActive }) => (
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      )}
                      onClick={() => setMenuOpen(false)}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
        </motion.nav>
      )}
    </AnimatePresence>
)}