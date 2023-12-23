import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-color);
  border-radius: 12px;
  display: grid;
  grid-template-rows: 1fr auto;
  border: 2px solid var(--border-color);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 2px solid var(--border-color);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: #0099ff;
    border-radius: 7px;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: 1px;
      color: var(--text-secondary-color);
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  .status {
    border-radius: 7px;
    text-transform: capitalize;
    letter-spacing: 1px;
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
    font-weight: 500;
  }
  .pending {
    background: #f59e0b;
    color: #fff;
  }

  .interview {
    background: #865DFF;
    color: #fff;
  }

  .declined {
    background: #d34141;
    color: #fff;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .btn {
    height: 35px;
    cursor: pointer;
    color: var(--text-color);
    background: #0099ff;
    border: transparent;
    border-radius: 7px;
    letter-spacing: 1px;
    padding: 0.375rem 0.75rem;
    transition: 0.3s ease-in-out all;
    text-transform: capitalize;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
