import styles from './Home.module.css'

export default function Home() {
  return(
    <section className={styles.products}>
      <div className={styles.subProducts}>
        <h2 className={styles.title}>Nuestros productos</h2>

        <button className={styles.button}>Ver catálogo</button>
      </div>
    </section>
  )
}