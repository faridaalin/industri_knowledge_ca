import styled from "styled-components"
import { colors } from "../style/base/variables"

export const StyledContactSection = styled.section`
  .contact-intro {
    max-width: 50ch;
    padding-bottom: 48px;
    h2 {
      padding-bottom: 24px;
      color: ${colors.baseWhite.whitesmoke};
    }
    p {
      color: rgba(248 249 250 / 0.8);
    }
  }

  button {
    font-size: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
  }

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
    font-size: 16px;
  }

  .input {
    color: rgba(248 249 250 / 0.5);
    border: none;
    outline: none;
    border-bottom: 2px solid rgba(248 249 250 / 0.5);
    background: none;
    resize: none;
    border-radius: 0;
    appearance: none;
    font-family: "Montserrat", sans-serif;
  }

  textarea {
    min-height: 150px;
  }

  .input:focus,
  .isValid input,
  .isValid textarea {
    color: ${colors.baseWhite.whitesmokeLightest};
    font-size: 16px;
    border-bottom-color: ${colors.baseGrey.greyLight};
    padding-bottom: 8px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 32px;
    position: relative;
  }
  .input-container:focus-within label {
    color: ${colors.baseGrey.greyLight};
    margin-bottom: 0px;
    padding-bottom: 16px;
    font-size: 14px;
    transition: all 0.2s ease;
  }
  .input-container:focus-within .input {
    border-bottom-color: ${colors.baseGrey.greyLight};
  }
  .isValid label {
    color: ${colors.baseGrey.greyLight};
    padding-bottom: 16px;
    margin-bottom: 0px;
    font-size: 14px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .error {
    position: absolute;
    right: 0;
    color: #e91e63;
    padding-top: 8px;
    font-size: 14px;
  }

  .success-message {
    font-style: italic;
  }

  @media all and (min-width: 768px) {
    margin-top: 86px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .contact-intro {
      p {
        padding-right: 48px;
      }
    }
  }
`
