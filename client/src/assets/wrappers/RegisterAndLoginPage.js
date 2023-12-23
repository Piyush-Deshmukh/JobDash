import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .logo {
    display: block;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.38rem;
    text-decoration: underline 2px #0099ff;
  }
  .form {
    max-width: 90vw;
    border-radius: 16px;
    background-color: var(--background-color);
    border: 2px solid var(--border-color);
    padding: 2rem 2rem 3rem;
    margin: 3rem 3rem;
  }
  .form-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 2rem;
    width: 600px;
  }
  .form-login {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 2rem;
    width: 400px;
  }
  .form-label {
    display: block;
    font-size: .875rem;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  .form-input {
    height: 40px;
    width: 43.5%;
    padding: 0.375rem 0.75rem;
    background: var(--background-color);
    border-radius: 12px;
    border: 2px solid var(--border-color);
    color: var(--text-color);
  }
  .form-input:focus {
    outline: none;
  }
  .login-input {
    width: 65%;
  }
  h4 {
    text-align: center;
    font-size: 3.5rem;
    line-height: 70px;
    margin: 1.3rem 0 3rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    display: grid;
    place-items: center;
    width: 100%;
    height: 40px;
    margin-top: 2rem;
    padding: .5rem 4rem;
    background-color: #0099ff;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 7px;
    color: white;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }
  .register-btn {
    width: 43.5%;
    margin-top: 0rem;
  }
  .explore {
    font-size: 1.075rem;
  }
  .member-btn {
    color: #0099ff;
    letter-spacing: 1px;
    font-weight: 600;
    margin-left: 0.25rem;
  }
  @media (min-width: 992px) {
    .form {
      padding: 2rem 4rem 3rem;
    }
    .form-details {
      grid-template-columns: 1fr 1fr;
    }
    h4 {
      font-size: 4rem;
      margin: 1.3rem 2rem 3rem;
    }
    .form-input {
      width: 100%;
    }
    .register-btn {
      width: 100%;
      margin-top: 2rem;
    }
    .explore {
      font-size: 1.4rem;
    }
  }
`;
export default Wrapper;
