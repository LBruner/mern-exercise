import {useEffect, useRef, useState} from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import axios from 'axios';
import {useParams} from "react-router-dom";


const EditExercises = (props) => {
    const editingExerciseId = useParams()

    const [exerciseInfo, setExerciseInfo] = useState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    })

    const inputRef = useRef();

    const changeUsernameHandler = (e) => {
        setExerciseInfo((prevState => ({...prevState, username: e.target.value})))
        console.log(exerciseInfo)
    }
    const changeDescriptionHandler = (e) => {
        setExerciseInfo((prevState => ({...prevState, description: e.target.value})))
    }
    const changeDurationHandler = (e) => {
        setExerciseInfo((prevState => ({...prevState, duration: e.target.value})))
    }
    const changeDateHandler = (date) => {
        setExerciseInfo((prevState => {
            return {...prevState, date: date}
        }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        console.log(exerciseInfo)
        const data = await axios.post('http://localhost:3000/exercises/edit/'+editingExerciseId.id, {exerciseInfo})
        window.location = '/';
    }

    useEffect(() => {
        async function getEditValues() {
            const userData = await axios.get('http://localhost:3000/users');
            setExerciseInfo((prevState => {
                return {users: userData.data}
            }))
            const exercises = await axios.get(`http://localhost:3000/exercises/${editingExerciseId.id}`)
            setExerciseInfo((prevState => {return {...prevState, ...exercises.data}}))
        }

        getEditValues()


    }, [])

    console.log(exerciseInfo)

    return (
        <div>
            <h3>Edit</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Username: </label>
                    <select ref={inputRef}
                            required
                            className="form-control"
                            value={exerciseInfo.username}
                            onChange={changeUsernameHandler}>
                        {
                            exerciseInfo.users.map((user) => {
                                return <option
                                    key={Math.random()}
                                    value={user.username}>{user.username}
                                </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                           required
                           className="form-control"
                           value={exerciseInfo.description || ''}
                           onChange={changeDescriptionHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={exerciseInfo.duration || 0}
                        onChange={changeDurationHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            dateFormat="MMMM eeee d, yyyy h:mm aa"
                            selected={exerciseInfo.date}
                            onChange={changeDateHandler}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default EditExercises;