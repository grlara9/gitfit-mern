import {useState} from 'react'
import axios from 'axios'
import './Register.css'

const Register = ( ) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })
  const [error, setError] = useState(false);

  
  const { name, email, password, password2 } = formData

  const onChange =(e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async (e) =>{
    e.preventDefault()

    setError(false);
    try {
      const res = await axios.post("/api/auth/", {
        name,
        email,
        password,
      });
      console.log("esto es", res)
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  }

 return(
        <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label>Name</label>
              <input
                type="text"
                name="name"
                onChange={onChange}
                placeholder="Enter Name"
                required
                />
            
          </div>

          <div className='form-group'>
            <label>email</label>
            <input
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Enter Email"
              required
              />
          </div>

          <div className='form-group'>
          <label>Password</label>
          <input
            type="password"
            name=" password"
            onChange={onChange}
            placeholder="Enter Password"
            required
            />
            
          </div>

          <div className='form-group'>
          <label>Password</label>
          <input
            type="password"
            name=" password2"
            onChange={onChange}
            placeholder="Confirm Password"
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