import React, { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "emailjs-com"
import { ButtonOutline } from "../Buttons"
import { StyledContactSection } from "./styles/contact-form.style"

const ContactForm = () => {
  const [inputNameLength, setInputNameLength] = useState(0)
  const [inputEmailLength, setInputEmailLength] = useState(0)
  const [inputMessageLength, setInputMessageLength] = useState(0)
  const [formSuccess, setformSuccess] = useState(false)
  const { register, handleSubmit, errors } = useForm()
  const nameHandler = e => {
    setInputNameLength(e.target.value.trim().length)
  }
  const emailHandler = e => {
    setInputEmailLength(e.target.value.trim().length)
  }
  const messageHandler = e => {
    setInputMessageLength(e.target.value.trim().length)
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    }

    emailjs
      .send(
        "gmail",
        "contact_form_portfolio_site",
        templateParams,
        process.env.GATSBY_EMAIL_ID
      )
      .then(
        response => {
          if (response) {
            setformSuccess(true)
            e.target.reset()
          }
        },
        error => error && setformSuccess(false)
      )
  }

  return (
    <StyledContactSection className="small-section">
      <div
        className="contact-intro"
        data-sal-duration="1200"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <h2>Let's get in touch</h2>
        {formSuccess ? (
          <p className="success-message">
            Thanks for contacting me, I will get back to you as soon as
            possible.
            <br></br>
            <br></br>
            Meantime, have a nice day!
          </p>
        ) : (
          <p>
            Whether you have questions regarding some of my projects or just
            want to get in touch with me. I'm only an inbox away.
          </p>
        )}
      </div>
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        data-sal-duration="1400"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-easing="ease-out-bounce"
      >
        <div className={`input-container ${inputNameLength > 0 && "isValid"}`}>
          <label htmlFor="name">Name</label>
          <input
            autoComplete="off"
            className="input"
            type="text"
            name="name"
            id="name"
            ref={register({
              required: true,
              minLength: 2,
            })}
            onChange={nameHandler}
          />
          {errors.name && errors.name.type === "required" && (
            <p className="error">Required</p>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <p className="error">Must be more than two characters</p>
          )}
        </div>
        <div className={`input-container ${inputEmailLength > 0 && "isValid"}`}>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            className="input"
            type="email"
            name="email"
            id="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            onChange={emailHandler}
          />
          {errors.email && errors.email.type === "required" && (
            <p className="error">Required</p>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <p className="error">Invalid email</p>
          )}
        </div>
        <div
          className={`input-container ${inputMessageLength > 0 && "isValid"}`}
        >
          <label htmlFor="message">Message</label>
          <textarea
            autoComplete="off"
            className="input"
            name="message"
            id="message"
            cols="10"
            rows="5"
            ref={register({
              required: true,
              minLength: 20,
            })}
            onChange={messageHandler}
          ></textarea>
          {errors.message && errors.message.type === "required" && (
            <p className="error">Required</p>
          )}
          {errors.message && errors.message.type === "minLength" && (
            <p className="error">Must more than 20 characters.</p>
          )}
        </div>
        <ButtonOutline type="submit">Send</ButtonOutline>
      </form>
    </StyledContactSection>
  )
}
export default ContactForm
