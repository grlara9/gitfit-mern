import Beginner from "../components/BeginnerPlan"
import Intermediate from "../components/IntermediatePlan"
import Advanced from "../components/AdvancedPlan"

const Exercises = () =>{
    return(
        <section className="container">
        <h1>Select your Workout Experience</h1>
        <div className="exercise">
        <select  value={exercise} onChange={handleChange}>
            <option value="selectExercise" > Select Level of exercise </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
        </select>
        </div>

        <div className="selectionList">
            {beginnerContentVisible && <Beginner />}
            {IntermediateContentVisible && <Intermediate />}
            {AdvancedContentVisible && <Advanced />}
        </div>
    </section>
    )
}

export default Exercises