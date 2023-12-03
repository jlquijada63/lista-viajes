import Item from "./Item"
import styles from "./PackingList.module.css"

function PackingList() {
	return (
		<div className={styles.packingListContainer}>
			<div className={styles.packingListGrid}>
				<Item />
				<Item />
			</div>
      <div className={styles.btnContainer}>
        <select>
          <option>SORT BY INPUT ORDER</option>
          <option>SORT BY DESCRIPTION</option>
          <option>SORT BY PACKED STATUS</option>
        </select>
        <button>CLEAR LIST</button>
      </div>
		</div>
	)
}
export default PackingList
