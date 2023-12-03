
import styles from './Item.module.css'

function Item() {
	return (
		<div className={styles.itemContainer}>
			<input className={styles.packed} type="checkbox" />
			<p className='itemNumber'>2</p>
			<p className='itemArticle'>Passports</p>
      <p className= {styles.icon}>x</p>
		</div>
	)
}
export default Item
