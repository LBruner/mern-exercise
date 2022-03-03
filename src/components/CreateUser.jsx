import {useState} from "react";
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('')

    const changeUsernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const onSubmitHandler = async(e) => {
        e.preventDefault()

        setUsername('');
        const data = await axios.post('http://localhost:3000/users/add', {username: username})
    }

    return (
        <div>
            <h3>Create new user</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text"
                           required
                           className="form-control"
                           value={username}
                           onChange={changeUsernameHandler}
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
}

export default CreateUser;