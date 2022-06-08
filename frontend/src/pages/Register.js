import {useState} from 'react'
import './Register.css'

const Register = ( ) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const onChange =(e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () =>{

  }


    return(
        <section className='form'>
        <form>
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
          <button type="submit" onSubmit={onSubmit}>SEARCH</button>
          </div>
        </form>
        </section>
    )
}
 export default Register