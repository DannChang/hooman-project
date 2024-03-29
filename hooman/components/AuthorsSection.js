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
        <svg width="120" height="120" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.82569 0.848623C14.7 0.848623 18.6514 4.80002 18.6514 9.67431C18.6514 14.5486 14.7 18.5 9.82569 18.5C4.9514 18.5 1 14.5486 1 9.67431C1 4.80002 4.9514 0.848623 9.82569 0.848623Z" stroke="#FEF6E9" stroke-width="1.40893" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.37262 9.92981L10.0821 9.92981L12.7916 9.92981" stroke="#FEF6E9" stroke-width="1.08379" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.0803 7.22021L10.0803 9.9297L10.0803 12.6392" stroke="#FEF6E9" stroke-width="1.08379" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      </div>
    )
}

export default AuthorsSection
