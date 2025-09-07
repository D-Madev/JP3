import styles from './ProductCard.module.css'
import laodImg from '../../assets/fallback-product-card.webp'

export default function ProductCard({image = laodImg, title = 'Product', price = 0, link = 'https://www.mercadolibre.com.ar/'}) {
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" className={ styles.linkless }>
      <section className={ styles.producCard }>
        <img 
          src={image} 
          alt={`${title} image`} 
          className={ styles.image } 
          onError={(e) => (e.currentTarget.src = laodImg)}
        />

        <h3 className={ styles.title }>{title}</h3>
        <p className={ styles.price }>$ {price}.00</p>
      </section>
    </a>
  )
}