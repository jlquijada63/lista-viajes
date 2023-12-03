import styles from "./Modal.module.css"

function Modal({ setIsModal, setItems }) {
	const handleDeleteClick = () => {
		setItems([])
		setIsModal(false)
	}

	return (
		<div className={styles.modalBackground}>
			<div className={styles.modalContainer}>
				<p>¿Quieres de verdad borrar la lista?</p>
				<div className={styles.btnContainer}>
					<button onClick={handleDeleteClick}>Si</button>
					<button onClick={() => setIsModal(false)}>Cancelar</button>
				</div>
			</div>
		</div>
	)
}
export default Modal
