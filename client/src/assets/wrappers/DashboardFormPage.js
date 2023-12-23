import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: 12px;
  width: 100%;
  background: var(--background-color);
  padding: 3rem 2rem 4rem;
  border: 2px solid var(--border-color);
  .form-title {
    margin-bottom: 2rem;
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 400;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-label {
    display: block;
    font-size: .875rem;
    margin-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    line-height: 1.5;
  }
  .form-input,
  .form-select {
    width: 100%;
    height: 35px;
    padding: 0.375rem 0.75rem;
    border-radius: 10px;
    background: var(--background-color);
    border: 2px solid var(--border-color);
    color: var(--text-color);
  }
  .form-input:focus {
    outline: none;
  }
  .btn {
    height: 35px;
    cursor: pointer;
    color: white;
    background: #0099ff;
    border: transparent;
    border-radius: 7px;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
