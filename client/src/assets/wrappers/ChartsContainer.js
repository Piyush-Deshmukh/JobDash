import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: #59bdff;
    font-size: 1.25rem;
    cursor: pointer;
  }
  button:first-of-type {
    margin-right: 1rem;
  }
  button:hover {
    color: #0099ff;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .active {
    text-decoration: underline;
    color: #0099ff;
  }
  `;

export default Wrapper;
