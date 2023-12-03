import { useState } from "react"
import styles from "./Form.module.css"

function Form({ setItems, items }) {
	const [quantityValue, setQuantityValue] = useState("")
	const [descriptionValue, setDescriptionValue] = useState("")

	const handleSubmit = e => {
		e.preventDefault()
		const newItem = {
			id: items.length + 1,
			description: descriptionValue,
			quantity: quantityValue,
      packed: false
		}
    setItems(prev => [...prev, newItem])
	}

	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit}>
				<label className={styles.label}>¿Que necesitas para el 😜 viaje? </label>
				<input
					className={styles.count}
					type="number"
					name="quantity"
					value={quantityValue}
					onChange={e => setQuantityValue(e.target.value)}
				/>
				<input
					className={styles.article}
					type="text"
					name="description"
					value={descriptionValue}
					placeholder="Introduce articulo"
					onChange={e => setDescriptionValue(e.target.value)}
				/>
				<button className={styles.add}>AÑADIR</button>
			</form>
		</div>
	)
}
export default Form
