import styles from './Footer.module.css'

export default function Footer({ logo }) {
  return(
    <footer className={styles.footer}>
      <div className={[styles.columna, styles.logoCopy].join(' ')}>
        <img src={logo} alt="logo" className={styles.logo}/>
        <p className={styles.tagline}>Frase de enganche</p>
        <p className={styles.copy}>Copyright © 2025</p>
      </div>

      <div className={styles.columna}>
        <section className={styles.contact}>
          <h2 className={styles.title}>Contacto</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}><a href="mailto:maildeempresa@jp3.com">maildeempresa@jp3.com</a></li>
            <li className={styles.contactItem}> <a href="tel:+5491112345789">+54 9 11 1234 5789</a></li>
          </ul>
        </section>

        <section className={styles.location}>
          <h2 className={styles.title}>¿Dónde encontrarnos?</h2>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>Av. Donde vos quieras 1234</li>
            <li className={styles.contactItem}>Oficinas en Alcorta 223</li>
          </ul>
        </section>
      </div>

      <section className={[styles.columna, styles.socialMedia].join(' ')}>
        <h2 className={styles.title}>Redes Sociales</h2>
        <ul className={styles.listSocialMedia}>
          <li className={styles.listSocialItem}><i className="fa-brands fa-instagram"></i></li>
          <li className={styles.listSocialItem}><i className="fa-regular fa-envelope"></i></li>
          <li className={styles.listSocialItem}><i className="fa-brands fa-whatsapp"></i></li>
        </ul>
      </section>
    </footer>
  )
}