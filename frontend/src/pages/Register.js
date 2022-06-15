import {useState, useContext} from 'react'
import {FaUser} from 'react-icons/fa'
import './Register.css'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
const Register = ( ) => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {register} = authContext
  const {setAlert} = alertContext



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
            <label>Password</label>
              <input
                type="password"
                name=" password"
               
                onChange={onChange}
                placeholder="Enter Password"
                
              />
            </div>

          <div className='form-group'>
          <label>Password</label>
          <input
            type="password"
            name=" password2"
           
            onChange={onChange}
            placeholder="Confirm Password"
           
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