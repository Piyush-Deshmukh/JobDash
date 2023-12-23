import { Link } from 'react-router-dom';

const Logo = ({ landing }) => {
  return (
    <Link to={`${landing ? '/' : '/dashboard'}`} className='logo'>
      JobDash
    </Link>
  );
};

export default Logo;