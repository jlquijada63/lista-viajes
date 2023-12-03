import Item from "./Item"
import styles from "./PackingList.module.css"

function PackingList({ items, setItems }) {


	const handleChange = (e) => { 

		// sort by input order
		console.log(e.target.value)
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
			console.log(sortedArray)
			setItems(sortedArray)
			
		}else{
			sortedArray.sort ((a,b) => a.packed - b.packed)
			setItems(sortedArray)
		}
	}



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
					<option value="byInput">SORT BY INPUT ORDER</option>
					<option value="byDescription">SORT BY DESCRIPTION</option>
					<option value="byPackedStatus">SORT BY PACKED STATUS</option>
				</select>
				<button className={styles.clearBtn}>CLEAR LIST</button>
			</div>
		</div>
	)
}
export default PackingList
