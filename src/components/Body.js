import React from 'react';
import {Link} from 'react-router-dom';

const Body = () => {
    return (
        <div className='home container'>
            <h2>Ready to start ?</h2>
            <Link to="/quizz_app/Quiz"><button className="ui violet button" id='button'>Start</button> </Link> 
        </div>
    );
};

export default Body;