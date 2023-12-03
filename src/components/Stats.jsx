import styles from "./Stats.module.css"

function Stats({items}) {

	const packedItems = items.filter (elem => elem.packed === true)


	return (
		<div className={styles.statsContainer}>
			<p>
				🧳Tienes <span>{items.length}</span> articulos en tu list, y tienes en la maleta {" "}
				<span>{packedItems.length}</span>
				<span>{` (${((packedItems.length / items.length) * 100).toFixed(0)}%)`}</span>
			</p>
		</div>
	)
}
export default Stats
