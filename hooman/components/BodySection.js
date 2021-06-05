import React from 'react'
import styles from '../styles/Home.module.css'

const BodySection = () => {
    return (
        <div className={styles.bodyContainer}>
        <div className={styles.bodyText}>
          Body
        </div>
        <div className={styles.bodyBackground}>
          <div className={styles.bodyContent}>
          IIUSA published a story about how EB-5 is becoming more attractive to Brazilian investors. 

          Top reasons cited include the quality of U.S. education (including sports programs for young children), safety, and business opportunities. One Brazilian investor, undaunted by the recent investment increase to $900,000, calls the opportunity to live in the States with his children “priceless.”

          The article’s author Karla Bledsoe, director of international relations with law firm Genesis Global, says that an investor’s motivation should help guide them to take the direction of either a regional center investment or a direct EB-5 investment. For those looking for opportunities for family members, the regional center program offers many benefits, especially if they don’t want to have a lead role in operating a business.
          </div>
        </div>
      </div>
    )
}

export default BodySection
