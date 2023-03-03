import React from 'react'
import styles from './Results.module.scss'
import { data } from '../../data.js'

export default function Results() {
  return (
    <section className={styles.card}>
      <div className={styles.result}>
        <h1>Your Result</h1>
        <div className={styles.point}>
          <p className={styles.mark}>76</p>
          <span>of 100</span>
        </div>

        <h2>Great</h2>
        <p className={styles.review}>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
      <div className={styles.summary}>
        <h2 className={styles.heading}>Summary</h2>
        <ul className={styles.list}>
          {data.map((item, index) => (
            <li key={index} className={styles.category} style={{ color: item.color, background: item.background }}>
              <img src={item.icon} alt="icon" className={styles.images} />
              {item.category}
              <div className={styles.scores}>
                <p className={styles.score}>{item.score}</p> <span>&nbsp; / 100</span>
              </div>
            </li>
          ))}
        </ul>
        <button>Continue</button>
      </div>
    </section>
  )
}
