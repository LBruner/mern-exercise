import {useEffect} from "react";

const CreateExercise = () => {
    const [exerciseInfo, setExerciseInfo] = {
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
        users: []
    }


    const changeUsernameHandler = (e) => {
        setExerciseInfo((prevState => ({prevState, username: e.target.value})))
    }
    const changeDescriptionHandler = (e) => {
        setExerciseInfo((prevState => ({prevState, description: e.target.value})))
    }
    const changeDurationHandler = (e) => {
        setExerciseInfo((prevState => ({prevState, duration: e.target.value})))
    }
    const changeDatenameHandler = (date) => {
        setExerciseInfo((prevState => {
            return {prevState, date}
        }))
    }

    const onSubmitHandler = (e) => {
        console.log(exerciseInfo)

        window.location = '/';
    }

    useEffect(() => {
        setExerciseInfo((prevState => {
            return {...prevState, users: ['test user'], username: 'test users'}
        }))
        console.log(exerciseInfo)

    }, [])

    return (
        <div>
            <p>Create exercises!</p>
        </div>
    )
}

export default CreateExercise;