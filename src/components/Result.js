import React from 'react';
import crown from "../img/crown.png";
import { Link,useLocation } from 'react-router-dom';


const Result = () => {
    
    const {length,score}=useLocation().state;

    return (
        <div className='home container'>
            <img src= {crown} alt='crown' className='logo'/>
            <h2>You've completed the Quiz</h2>
            <h2>You got {score} of {length}</h2>
            <Link to="/quizz_app/"><button className="ui violet button" id='button'>Restart</button></Link>
        </div>
    );
};

export default Result;