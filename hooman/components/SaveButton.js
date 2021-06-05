import React from 'react'
import styles from '../styles/Home.module.css'

const SaveButton = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.saveContainer}>
                <div className={styles.discard}>
                        <a>Discard</a>
                    </div>
                    <div className={styles.save}>
                        <a>Save</a>
                </div>
            </div>
      </div>
    )
}

export default SaveButton
