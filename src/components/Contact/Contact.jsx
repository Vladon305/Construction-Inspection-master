import React from 'react'
import Form from '../Form/Form'
import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.contents_block}>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
