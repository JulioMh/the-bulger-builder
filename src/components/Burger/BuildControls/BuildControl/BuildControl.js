import React from 'react'
import styles from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Lable}>{props.label}</div>
        <button className={styles.Less}>Less</button>
        <button className={styles.More}>More</button>
    </div>
)

export default buildControl;