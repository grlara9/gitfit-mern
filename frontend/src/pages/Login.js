import {useState, useEffect, useContext } from 'react'
import { CgLogIn } from 'react-icons/cg'
import AuthContext from '../context/auth/authContext';
import AlertContext from '../context/alert/alertContext';
import './Register.css'

const Register = (props ) => {

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
   
  })
  const {  email, password } = formData

  const onChange =(e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) =>{
    e.preventDefault()
    
      login({
        email,
        password
      });
    
  };

    return(
      <section className='form'>
      <h1><CgLogIn /> Login</h1>
    <form onSubmit={onSubmit}>
     
      <div className='form-group'>
        <label>email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Enter Email"
            required
          />
      </div>
      <div className='form-group'>
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        type='password'
        name='password'
        value={password}
        onChange={onChange}
        required
      />
        </div>

      <div className='form-group'>
      <button type="submit" >SEARCH</button>
      </div>
    </form>
    </section>
    )
}
 export default Register