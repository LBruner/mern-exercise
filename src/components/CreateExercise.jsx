import {useEffect, useRef, useState} from "react";
import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css'


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
    }
    const changeDescriptionHandler = (e) => {
        setExerciseInfo((prevState => ({...prevState, description: e.target.value})))
    }
    const changeDurationHandler = (e) => {
        setExerciseInfo((prevState => ({...prevState, duration: e.target.value})))
    }
    const changeDateHandler = (date) => {
        console.log(exerciseInfo)
        setExerciseInfo((prevState => {
            return {...prevState, date: date}
        }))
    }

    const onSubmitHandler = (e) => {
        console.log(exerciseInfo)
        e.preventDefault()
        window.location = '/';
    }

    useEffect(() => {
        console.log('OI')
        setExerciseInfo((prevState => {
            return {...prevState, users: ['test user'], username: 'test users'}
        }))

    }, [exerciseInfo.description, exerciseInfo.date, exerciseInfo.duration])

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