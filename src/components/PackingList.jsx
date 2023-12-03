/* eslint-disable no-mixed-spaces-and-tabs */
import Item from "./Item"
import styles from "./PackingList.module.css"
import Modal from "./Modal"
import { useState } from "react"


function PackingList({ items, setItems }) {

	const [isModal, setIsModal] = useState(false)


	const handleChange = (e) => { 

		// sort by input order
	
		const sortedArray = [...items]

		if (e.target.value === "byInput") {
			sortedArray.sort((a, b) => a.id - b.id)
			setItems(sortedArray)
		}else if (e.target.value === "byDescription"){
			sortedArray.sort((a,b) => {
				if(a.description.toUpperCase() < b.description.toUpperCase()){
					return -1
				}
				if (a.description.toUpperCase() > b.description.toUpperCase()){
					return 1
				}
				return 0
			})
			
			setItems(sortedArray)
			
		}else{
			sortedArray.sort ((a,b) => a.packed - b.packed)
			setItems(sortedArray)
		}
	}

	// borra la lista
	// const handleClearClick = () => { 
		
	// 	setItems([])
	//  // eslint-disable-next-line no-mixed-spaces-and-tabs
	//  }



	return (
		<div className={styles.packingListContainer}>
			<div className={styles.packingListGrid}>
				{items.map(item => (
					<Item
						key={item.id}
						item={item}
            setItems={setItems}
            items = {items}
					/>
				))}
			</div>
			<div className={styles.btnContainer}>
				<select className={styles.selectBtn} onChange={handleChange}>
					<option value="byInput">ORDENAR POR ORDEN DE ENTRADA</option>
					<option value="byDescription">ORDENAR POR ARTICULO</option>
					<option value="byPackedStatus">ORDENAR POR SI ESTA EN LA MALETA O NO</option>
				</select>
				<button className={styles.clearBtn} onClick={() => setIsModal(true)}>BORRAR LA LISTA</button>
				{isModal && <Modal setIsModal = {setIsModal} setItems={setItems}/>}
			</div>
			
		</div>
	)
}
export default PackingList
