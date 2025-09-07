import styles from './MiniProductCard.module.css'

export default function MiniProductCard({ img, title, price }) {
  return(
    <article className={styles.product}>
      <img src={img} alt={img} className={styles.image}/>
      <h3 className={styles.title}>{title}</h3>
      <p  className={styles.price}>$ {price}</p>
    </article>
  )
}