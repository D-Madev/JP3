import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
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
          key={"navbar"}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}>

          <div className={styles.navbar}>
            {/* Navbar logo */}
            <Link to="/home" className={styles.logoContainer}>
              <img src={logo} alt="logo-drakonis" className={styles.logo}/>
            </Link>

            <div>
              {/* Searching input */}
              <div className={styles.serching}>
                <input type="text" name="search" id="search" className={styles.input} /> 
                <div className={styles.searchIcon}>
                  <FaSearch />
                </div>
              </div>

              {/* Hamburger menu */}
              <span className={[styles.hamburger, (menuOpen? styles.active : '')].join(' ')} onClick={() => setMenuOpen(!menuOpen)}>☰</span>

              {/* Component to close hamburger menu */}
              {menuOpen && (<div className={styles.backdrop} onClick={() => setMenuOpen(false)}/>)}

              {/* Endpoints */}
              <ul className={[styles.navList, (menuOpen ? styles.open : '')].join(' ')}>
                {links.map(({ to, label, icon }) => (
                  <li key={to}>
                    <NavLink to={to}
                        className={({ isActive }) => (
                          [styles.navLink, (isActive ? styles.active : '')].join(' ')
                        )}
                        onClick={() => setMenuOpen(false)}>
                      {label} {icon && <span className={styles.icon}>{icon}</span>}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
)}