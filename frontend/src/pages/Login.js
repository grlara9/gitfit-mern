import { CgLogIn } from 'react-icons/cg'
import './Register.css'

const Register = ( ) => {
    return(
        <section className='form'>
          <h1><CgLogIn /> Login</h1>
        <form>
        
          <div className='form-group'>
          <label>email</label>
          <input
            type="text"
            name="age"
            
            placeholder="Enter Your Age"
            required
            />
            
          </div>

          <div className='form-group'>
          <label>Password</label>
          <input
            type="text"
            name="age"
            
            placeholder="Enter Your Age"
            required
            />
            
          </div>

         
          <div className='form-group'>
          <button type="submit">SEARCH</button>
          </div>
        </form>
        </section>
    )
}
 export default Register