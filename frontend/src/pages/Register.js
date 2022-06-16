import {useState, useContext, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import './Register.css'

const Register = ( ) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {setAlert} = alertContext
  const {register, error, clearErrors} = authContext

  useEffect(()=> {
    if(error === 'Email already taken')
    setAlert(error)
    clearErrors();
},[error])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const { name, email, password, password2 } = formData
 
   const onChange =(e) =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = async (e) =>{
    e.preventDefault()
    if (name === '' || email === '' || password === '' || password2 ==='') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

 return(
        <section className='form'>
          <h1><FaUser /> Register</h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="Enter Name"
                
              />
          </div>
          <div className='form-group'>
            <label>email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Enter Email"
               
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
           
          />
            </div>

          <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
           
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