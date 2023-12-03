import Item from "./Item"
import styles from "./PackingList.module.css"

function PackingList({ items, setItems }) {
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
				<select className={styles.selectBtn}>
					<option>SORT BY INPUT ORDER</option>
					<option>SORT BY DESCRIPTION</option>
					<option>SORT BY PACKED STATUS</option>
				</select>
				<button className={styles.clearBtn}>CLEAR LIST</button>
			</div>
		</div>
	)
}
export default PackingList
