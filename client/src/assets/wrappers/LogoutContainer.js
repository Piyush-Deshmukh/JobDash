import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    color: white;
    background: #0099ff;
    padding: 0.375rem 0.75rem;
    border-radius: 12px;
    text-transform: capitalize;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    text-align: center;
    visibility: hidden;
    background: #0099ff;
    border-radius: 12px;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: white;
    letter-spacing: 1px;
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;
