import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Layout from "../components/Layout"
import styled from "styled-components"
import { ButtonOutline } from "../components/Buttons"
import { colors } from "../components/style/base/variables"

const StyledContactSection = styled.section`
  button {
    font-size: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .contact-intro,
  .contact-form {
    min-height: 50vh;
  }

  .contact-form {
    display: grid;
    align-items: flex-start;
  }

  label {
    color: ${colors.baseGrey.greyLightest};
    font-weight: 300;
    margin-bottom: -8px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    font-size: 18px;
  }

  .input {
    color: rgb(248 249 250 / 0.5);
    border: none;
    outline: none;
    border-bottom: 2px solid rgb(248 249 250 / 0.5);
    background: none;
    resize: none;
    border-radius: 0;
    appearance: none;
  }

  .input:focus,
  .isValid input,
  .isValid textarea {
    color: ${colors.baseWhite.whitesmokeLightest};
    font-size: 16px;
    border-bottom-color: ${colors.baseWhite.whitesmokeLightest};
  }

  .input-container {
    display: flex;
    flex-direction: column;
  }
  .input-container:focus-within label {
    color: ${colors.baseWhite.whitesmokeLightest};
    margin-bottom: 0px;
    padding-bottom: 16px;
    font-size: 14px;
    transition: all 0.2s ease;
  }
  .isValid label {
    padding-bottom: 16px;
    margin-bottom: 0px;
    font-size: 14px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
`

const Contact = () => {
  const [inputNameLength, setInputNameLength] = useState(0)
  const [inputEmailLength, setInputEmailLength] = useState(0)
  const [inputMessageLength, setInputMessageLength] = useState(0)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data.name.length)

  const nameHandler = e => {
    setInputNameLength(e.target.value.trim().length)
  }
  const emailHandler = e => {
    setInputEmailLength(e.target.value.trim().length)
  }
  const messageHandler = e => {
    setInputMessageLength(e.target.value.trim().length)
  }

  return (
    <Layout title="Contact">
      <StyledContactSection className="small-section">
        <div className="contact-intro">
          <p>
            Whether you have questions regarding some of my projects or just
            want to get in touch with me. I´m only an inbox away.
          </p>
          <p className="success-message">
            Thanks for contacting me, I will get back to you as soon as
            possible.
            <br></br>
            <br></br>
            Meantime, have a nice day!
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div
            className={`input-container ${inputNameLength > 0 && "isValid"}`}
          >
            <label htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              ref={register({
                required: true,
                minLength: 2,
              })}
              onBlur={nameHandler}
            />
          </div>
          <div
            className={`input-container ${inputNameLength > 0 && "isValid"}`}
          >
            <label htmlFor="email">Email</label>
            <input
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
              onBlur={emailHandler}
            />
          </div>
          <div
            className={`input-container ${inputNameLength > 0 && "isValid"}`}
          >
            <label htmlFor="message">Message</label>
            <textarea
              className="input"
              name="message"
              id="message"
              cols="10"
              rows="5"
              ref={register({
                required: true,
                minLength: 20,
              })}
              onBlur={messageHandler}
            ></textarea>
          </div>
          <ButtonOutline type="submit">Send</ButtonOutline>
        </form>
      </StyledContactSection>
    </Layout>
  )
}
export default Contact
