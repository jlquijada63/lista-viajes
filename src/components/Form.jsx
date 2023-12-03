

import styles from './Form.module.css'

function Form() {
  return (
    <div className={styles.formContainer}>
    <form>
      <label className={styles.label}>What do you need for your 😜 trip ? </label>
      <input className={styles.count} type="number" name="count"/>
      <input className={styles.article} type="text" name="article" />
      <button className={styles.add}>ADD</button>
    </form>

    </div>
  )
}
export default Form
