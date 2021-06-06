import React from 'react'
import styles from '../styles/Home.module.css'

const AuthorsSection = () => {
    return (
    <div className={styles.authorContainer}>
        <div className={styles.avatar1}>
          <a>
            <img src="/images/dan.jpeg"></img>
          </a>
        </div>
      </div>
    )
}

export default AuthorsSection
