import { useState } from "react"
import styles from "./Carousel.module.css"

export default function Carousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <section className={styles.carousel}>
      {/* Botón Izquierda */}
      <button className={`${styles.nav} ${styles.left}`} onClick={prevSlide}>
        ❮
      </button>

      {/* Imagen actual */}
<div className={styles.imageContainer}>
  {images.map((src, i) => (
    <img
      key={i}
      src={src}
      alt={`Slide ${i}`}
      className={`${styles.image} ${i === currentIndex ? styles.active : ""}`}
    />
  ))}
</div>

      {/* Botón Derecha */}
      <button className={`${styles.nav} ${styles.right}`} onClick={nextSlide}>
        ❯
      </button>

      {/* Indicadores */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
            onClick={() => setCurrentIndex(i)}
          ></span>
        ))}
      </div>
    </section>
  )
}
