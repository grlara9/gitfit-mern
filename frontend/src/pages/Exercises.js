const Exercises = () =>{
    return(
        <section className="container">
        <h1>Select your Workout Experience</h1>
        <div className="exercise">
        <select>
            <option value="selectExercise" > Select Level of exercise </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
        </select>
        </div>

        <div className="selectionList">
        
        </div>
    </section>
    )
}

export default Exercises