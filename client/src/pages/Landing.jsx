import { Link } from 'react-router-dom';
import Wrapper from "../assets/wrappers/LandingPage"
import { Logo} from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo landing />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Empower your 
            <br />
            job search.
          </h1>
          <div>
            <p>
              JobDash is where you can track your job applications.
            </p>
          </div>
          <div className='links'>
            <Link to='/register' className='btn register-link'>
              Register
            </Link>
            <Link to='/login' className='btn'>
              Login / Demo User
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing