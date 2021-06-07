import React from 'react'
import styles from '../styles/Home.module.css'

const FormattingSection = () => {
    return (
        <div className={styles.formattingContainer}>

        <div className={styles.textSelectors}>
          <a>H2</a>
          <a>H3</a>
          <a>Bold</a>
          <a>Link</a>
          <a>Table</a>
          <a>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.74242 7.2319C10.9876 7.2319 11.9998 8.22178 11.9998 9.43946C11.9998 10.6565 10.9876 11.647 9.74242 11.647C8.49726 11.647 7.48504 10.6565 7.48504 9.43946C7.48504 8.22178 8.49726 7.2319 9.74242 7.2319ZM9.74242 8.26734C9.08102 8.26734 8.54385 8.79266 8.54385 9.43946C8.54385 10.0856 9.08102 10.6116 9.74242 10.6116C10.4038 10.6116 10.941 10.0856 10.941 9.43946C10.941 8.79266 10.4038 8.26734 9.74242 8.26734ZM4.87029 8.92153C5.16252 8.92153 5.39969 9.15347 5.39969 9.43925C5.39969 9.72504 5.16252 9.95697 4.87029 9.95697H0.529897C0.237666 9.95697 0.000494109 9.72504 0.000494109 9.43925C0.000494109 9.15347 0.237666 8.92153 0.529897 8.92153H4.87029ZM2.25737 0.352905C3.50253 0.352905 4.51474 1.34348 4.51474 2.56047C4.51474 3.77746 3.50253 4.76803 2.25737 4.76803C1.01292 4.76803 0 3.77746 0 2.56047C0 1.34348 1.01292 0.352905 2.25737 0.352905ZM2.25737 1.38835C1.59668 1.38835 1.0588 1.91435 1.0588 2.56047C1.0588 3.20658 1.59668 3.73259 2.25737 3.73259C2.91877 3.73259 3.45594 3.20658 3.45594 2.56047C3.45594 1.91435 2.91877 1.38835 2.25737 1.38835ZM11.4706 2.04288C11.7628 2.04288 12 2.27482 12 2.56061C12 2.84639 11.7628 3.07833 11.4706 3.07833H7.1295C6.83727 3.07833 6.6001 2.84639 6.6001 2.56061C6.6001 2.27482 6.83727 2.04288 7.1295 2.04288H11.4706Z" fill="#FEF6E9"/>
            </svg>
          </a>
        </div>

        <div className={styles.timeContainer}>
          <div className={styles.timeContent}>
            min
          </div>
        </div>

        <div className={styles.dateContainer}>
          <div className={styles.dateTitle}>
            Date
          </div>
          <div className={styles.dateContent}>
            03.25.20
          </div>
        </div>

        <div className={styles.category}>
          All
          <div className={styles.bottomArrow}>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.02813 6.67734C3.98015 6.63817 3.77498 6.49025 3.60621 6.35246C2.54478 5.54464 0.807447 3.43729 0.277146 2.3343C0.191934 2.16679 0.0115822 1.7433 0 1.51703C0 1.30021 0.0595658 1.09353 0.180352 0.896301C0.349122 0.650443 0.614686 0.453216 0.928233 0.345147C1.14581 0.275577 1.7969 0.167508 1.80848 0.167508C2.52079 0.0594382 3.67819 0 4.95719 0C6.17581 0 7.28605 0.0594382 8.00911 0.14792C8.02069 0.158052 8.8298 0.266121 9.10694 0.384322C9.61325 0.601137 9.92763 1.02463 9.92763 1.47785V1.51703C9.91522 1.81219 9.60084 2.43291 9.58926 2.43291C9.05813 3.47646 7.40601 5.53518 6.30818 6.36259C6.30818 6.36259 6.02607 6.59562 5.84985 6.69693C5.5967 6.85498 5.28315 6.93333 4.9696 6.93333C4.61966 6.93333 4.2937 6.84485 4.02813 6.67734Z" fill="#FEF6E9"/>
            </svg>
          </div>
        </div>

      </div>
    )
}

export default FormattingSection
