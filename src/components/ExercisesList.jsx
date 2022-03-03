import {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const Exercise = (props) => {
    return (<tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" + props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {
            props.deleteHandler(props.exercise._id)
        }}>delete</a>
        </td>
    </tr>)
}

const ExercisesList = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        async function getExercises() {
            const exercises = await axios.get('http://localhost:3000/exercises/')
            setExercises(exercises.data)
        }

        getExercises()
    }, [])

    const deleteHandler = async (id) => {
        await axios.delete(`https://localhost/3000/exercises/${id}`)
        setExercises(exercises.filter((el) => el._id !== id));
    }

    const exerciseList = exercises.map((exercise) => (<Exercise exercise={exercise} deleteExercise={deleteHandler} key={exercise._id}/>))

    return (<div>
        <h3>Logged Exercises</h3>
        <table className="table">
            <thead className="thead-light">
            <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {exerciseList}
            </tbody>
        </table>
    </div>)
}

export default ExercisesList;