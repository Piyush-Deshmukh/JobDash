import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--landing-bg);
  min-height: 100vh;
  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
    color: var(--text-color);
    font-size: 3rem;
  }
  .info div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    text-align: center;
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    font-weight: 500;
  }
  .links {
    flex-direction: column;
    gap: 1rem;
  }
  .register-link {
    width: 13.5rem;
    text-align: center;
  }
  .btn {
    background-color: #fff;
    padding: 1rem;
    color: rgba(0,0,0,.9);
    font-weight: 700;
    border-radius: 8px;
    font-size: 1.3rem;
    box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);
  }
  @media (min-width: 992px) {
    h1 {
      font-size: 7rem;
    }
    p {
      font-size: 1.3rem;
    }
    .links {
      flex-direction: row;
      gap: 0;
    }
    .register-link {
      margin-right: 1rem;
      width: fit-content;
    }
  }
  @media (min-width: 1120px) {
    h1 {
      font-size: 8rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
export default Wrapper;
