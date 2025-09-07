import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'
import ProductCard from '../../components/MiniProductCards/MiniProductCard.jsx'
import Carousel from './Carousel.jsx'

import image from '../../assets/trex.webp'
import image1 from '../../assets/tetris-game-0.webp'
import image2 from '../../assets/triceratops.webp'

export default function Home() {
  const navigate = useNavigate();
  const cards = [
    {img: image, title: 'T-REX puzzle', price: 20},
    {img: image1, title: 'Tetris game', price: 30},
    {img: image2, title: 'Triceratops puzzle', price: 15},
    {img: image, title: 'T-REX puzzle', price: 20},
    {img: image1, title: 'Tetris game', price: 30},
    {img: image2, title: 'Triceratops puzzle', price: 15},
  ]

  return(
    <>
        <Carousel images={[image, image1, image2, image, image1, image2]}/>
        <section className={styles.products}>
        <div className={styles.subProducts}>
          <h2 className={styles.title}>Nuestros productos</h2>

          <ul className={styles.grid} >
            {cards.map((p, i) => (
              <li key={p.title + i} className={styles.item} role="listitem">
                <ProductCard
                  img={p.img}
                  title={p.title}
                  price={p.price}
                />
              </li>
            ))}
          </ul>

          <button className={styles.button} onClick={() => navigate('/catalogo')}>Ver catálogo</button>
        </div>
      </section>
    </>
  )
}