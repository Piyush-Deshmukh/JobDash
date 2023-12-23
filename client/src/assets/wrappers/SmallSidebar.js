import styled from 'styled-components';

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: 0.3s ease-in-out all;
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-color);
    width: 100%;
    height: 100%;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 15px;
    left: 20px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: 0.3s ease-in-out all;
    font-size: 1.5rem;
  }
  .nav-link:hover {
    color: #0099ff;
  }
  .icon {
    font-size: 1.75rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--text-color);
    .icon {
      color: #0099ff;
    }
  }
`;
export default Wrapper;
