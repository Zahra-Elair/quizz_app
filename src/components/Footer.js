import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({length,index,check,lastCheck}) => {


    return (
        <div className="footer">
            <h2>{index+1} of {length} Questions </h2>
            {index+1!==length && <button className="ui violet button" id='button' onClick={check}>Next</button> }
            {index+1===length && <button className="ui violet button" id='button' onClick={lastCheck}>Result</button>}

        </div>
    );
};

export default Footer;