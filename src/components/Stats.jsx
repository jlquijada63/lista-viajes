import styles from "./Stats.module.css"

function Stats() {
	return (
		<div className={styles.statsContainer}>
			<p>
				🧳You have <span>6</span> items in your list, and you already packed{" "}
				<span>0</span>
				<span>(0%)</span>
			</p>
		</div>
	)
}
export default Stats
