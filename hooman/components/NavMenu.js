import React from 'react'
import styles from '../styles/Home.module.css'

const NavMenu = () => {
    return (
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <div className={styles.mainMenu}>
            <ul>
              <li>
                <a>News and articles</a>
              </li>
              <li>
                <a>Lawyers</a>
              </li>
              <li>
                <a>Webinars</a>
              </li>
              <li>
                <a>Investments</a>
              </li>
              <li>
                <a>Closed Investments</a>
              </li>
            </ul>
          </div>

          <hr className={styles.bar}/>

          <div className={styles.settings}>            
            <ul>
              <li>
                <a>Read</a>
              </li>
              <li>
                <a>Watch</a>
              </li>
              <li>
                <a>Listen</a>
              </li>
              <li>
                <a>Fundamental</a>
              </li>
              <li>
                <a>Authors</a>
              </li>
              <li>
                <a>Categories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default NavMenu;
