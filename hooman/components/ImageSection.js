import React from 'react'
import styles from '../styles/Home.module.css'

const ImageSection = () => {
    return (
        <div className={styles.imgContainer}>
          <div className={styles.imgBackground}>
            <a>Img</a>
          </div>
          <div className={styles.imgDescription}>
            <a>Image description</a>
          </div>
        </div>
    )
}

export default ImageSection
