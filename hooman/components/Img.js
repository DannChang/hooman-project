import React from 'react'
import styles from '../styles/Home.module.css'

const Img = () => {
    return (
        <div className={styles.img}>
          <div className={styles.imgBg}>
            <a>Img</a>
          </div>
          <div className={styles.imgDes}>
            <a>Image description</a>
          </div>
        </div>
    )
}

export default Img
