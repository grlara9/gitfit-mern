import {useState } from 'react'
import { CgLogIn } from 'react-icons/cg'
import './Register.css'

const Register = ( ) => {

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
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      login({
        email,
        password
      });
    }
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