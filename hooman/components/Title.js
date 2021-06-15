import React from 'react'
import styles from '../styles/Home.module.css'

const Title = () => {
    return (
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Title
        </div>
        <div className={styles.titleBackground}>
          <form>
            <textarea 
              id="title"
              name="title"
            >
              Zhang v. USCIS: the profound impact of loans as a source of funds for investors investors
            </textarea>
          </form>

        </div>
      </div>
    )
}

export default Title
