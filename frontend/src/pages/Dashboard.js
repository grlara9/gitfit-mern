import './Register.css'
const Dashboard = () => {
    return(
    <section className='form'>
    <form>
      <div className='form-group'>
        <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
            />
      </div>

      <div className='form-group'>
      <label>Age</label>
      <input
        type="text"
        name="age"
        placeholder="Enter Your Age"
        required
        />
       
      </div>

      <div className='form-group'>
      <label>Height</label>
      <input
        type="text"
        name="height"
        placeholder="Height in Inches"
        required
        />
        </div>

        <div className='form-group'>
      <label>Weight</label>
      <input
        type="text"
        name="weight"
        placeholder="Enter Weight in Lbs"
        required
        />
        
        </div>

        <div className='form-group'>
      <label>What is your Goal</label>
      <select class="browser-default" name="goal" required>
        <option value="" > select an option </option>
        <option value="weightloss">Weight Loss</option>
        <option value="weightgain">Gain Muscle</option>
        <option value="eathealthy">Eat Healthy</option>
      </select>
        </div>

        <div className='form-group'>
      <label>Physical Activity</label>
      <select name="activity" class="browser-default" required>
        <option value="" > select an option </option>
        <option value="sedentary">Sedentary</option>
        <option value="light">Lightly Active</option>
        <option value="moderate">Moderately Active</option>
        <option value="active">Active</option>
        <option value="veryactive">Very Active</option>
      </select>
        </div>

        <div className='form-group'>
      <label>Gender</label>
      <select name ="sex"  class="browser-default" required>
        <option value="" > select an option </option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
     
      </div>
      <div className='form-group'>
      <button type="submit">SEARCH</button>
      </div>
    </form>
    </section>
)}
export default Dashboard