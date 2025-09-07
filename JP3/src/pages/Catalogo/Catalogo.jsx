import styles from './Catalogo.module.css'
import ProductCard from '../../components/ProductCards/ProductCard'

import image from '../../assets/trex.webp'
import image1 from '../../assets/tetris-game-0.webp'
import image2 from '../../assets/triceratops.webp'

export default function Catalogo() {
  const cards = [
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
    {img: image, title: 'T-REX puzzle', price: 20, link: 'https://www.mercadolibre.com.ar/'},
    {img: image1, title: 'Tetris game', price: 30, link: 'https://www.mercadolibre.com.ar/'},
    {img: image2, title: 'Triceratops puzzle', price: 15, link: 'https://www.mercadolibre.com.ar/'},
  ]

  return (
    <section className={ styles.catalogo }>
      <h1 className={ styles.title }>Catalogo</h1>
      
      <article className={ styles.grid }>
        {cards.map((card, id) => (
          <ProductCard 
            key={id}
            image={card.img} 
            title={card.title} 
            price={card.price}
            link={card.link}
          />
        ))}
      </article>
    </section> 
  )
}