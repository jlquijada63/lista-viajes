
import styles from './Item.module.css'

function Item({item}) {
	return (
	<div className={styles.itemContainer}>
		<input
			className={styles.packed}
			type="checkbox"
		/>
		<p className="itemNumber">{item.quantity}</p>
		<p className="itemArticle">{item.description}</p>
		<p className={styles.icon}>x</p>
	</div>
)
}
export default Item
