import { useNavigation } from 'react-router-dom';

const SubmitBtn = ({ formBtn, registerBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'} ${registerBtn && 'register-btn'}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? 'submitting...' : 'submit'}
    </button>
  );
};

export default SubmitBtn;