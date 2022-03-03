import {useEffect, useRef, useState} from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'
import axios from 'axios';


const CreateExercise = () => {
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
        const data = await axios.post('http://localhost:3000/exercises/add', {exerciseInfo})
        console.log(exerciseInfo)
        window.location = '/';
    }

    useEffect(() => {
        async function setUsers() {
            const userData = await axios.get('http://localhost:3000/users');
            setExerciseInfo((prevState => {
                return {
                    ...prevState,
                    users: userData.data.map((user => user.username)),
                    username: userData.data[0].username
                }
            }))
        }

        setUsers()

    }, [])


    return (
        <div>
            <h3>Create New Exercise Log</h3>
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
                                    key={user}
                                    value={user}>{user}
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
                           value={exerciseInfo.description}
                           onChange={changeDescriptionHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input
                        type="text"
                        className="form-control"
                        value={exerciseInfo.duration}
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
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateExercise;