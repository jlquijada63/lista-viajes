import { useState } from "react"
import styles from "./Item.module.css"

function Item({ item, setItems, items }) {
	// const [isChecked, setIsChecked] = useState(item.packed)

	const handleCheckboxChange = e => {
		setItems(prev =>
			prev.map(elem => {
				if (elem.id === item.id) {
					return {
						...elem,
						packed: !elem.packed,
					}
				} else {
					return elem
				}
			})
		)
	}


	const handleClick = () => { 
		
		setItems (prev => prev.filter(elem => !(elem.id === item.id)))
	 }

	return (
		<div className={styles.itemContainer}>
			<input
				className={styles.packed}
				type="checkbox"
				onChange={handleCheckboxChange}
			/>
			<p className="itemNumber">{item.quantity}</p>

			<p className={item.packed && styles.descriptionCheck}>{item.description}</p>
			<p className={styles.icon} onClick={handleClick}>x</p>
		</div>
	)
}
export default Item
