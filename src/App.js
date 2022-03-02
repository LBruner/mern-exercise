import React, {Fragment} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import EditExercise from './components/EditExercise'
import ExercisesList from './components/ExercisesList'

function App() {
    return (
        <div className={"container"}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<ExercisesList/>}/>
                    <Route path="/edit/:id" exact element={<EditExercise/>}/>
                    <Route path="/create" exact element={<CreateExercise/>}/>
                    <Route path="/user" exact element={<CreateUser/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
