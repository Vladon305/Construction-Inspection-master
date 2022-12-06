import React from 'react'
import styles from './About.module.scss'
import house from '../../assets/main_house.png'
import face from '../../assets/face.png'

const About = () => {
  return (
    
    <div className={styles.main}>
      <div className={styles.left_block}>
        <img src={house} alt="" />
        <span>
          Over 20 years of experience inspecting building projects financed by banks.
          We serve banks, builders and homeowners.
          Small and large projects.
        </span>
      </div>
      <div className={styles.right_block}>
        <h3>Construction Loan Inspection LLC</h3>
        <span>Inspections on a weekly, bi-weekly or monthly basis, as well as one-time spot inspections.</span>
        <div className={styles.avatar}>
          <img src={face} alt="" />
        </div>
        <span>
          Dan Downey
        </span>
        <span>
          Proprietor,
        </span>
        <span>
          Construction
        </span>
        <span>
          Loan Inspection LLC
        </span>
        <span>
          Birmingham, Alabama
        </span>
      </div>
      
    </div>
  )
}


export default About