import React, { useState } from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'
import { send } from 'emailjs-com'
import Select from '../Select/Select'

const Form = () => {
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    send('service_9z9y57r', 'template_ohcrkae', data, 'JbUprumzEUN9eAs7x')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
        setError(err)
      })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <input
          {...register('fullName', {
            required: 'Full name is required field!',
          })}
          placeholder="Full name"
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.error}>{errors?.fullName && <div>{errors.fullName.message}</div>}</div>

      <div className={styles.row}>
        <Select
          register={register}
          name="preferredCommunication"
          options={['Phone', 'Email', 'Both are fine']}
          className={styles.input}
        />
      </div>
      <div className={styles.error}>
        {errors?.preferredCommunication && <div>{errors.preferredCommunication.message}</div>}
      </div>

      <div className={styles.row}>
        <input
          {...register('emailOrPhone', {
            required: 'Email or phone is required field!',
          })}
          placeholder="Email or phone"
          type="text"
          className={styles.input}
        />
      </div>
      <div className={styles.error}>{errors?.emailOrPhone && <div>{errors.emailOrPhone.message}</div>}</div>

      {error && <div className={styles.error}>{error}</div>}

      <button className={styles.button} type="submit">
        Log in
      </button>
    </form>
  )
}

export default Form
