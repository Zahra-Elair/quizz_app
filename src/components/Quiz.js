import React, { useState } from 'react';
import Footer from './Footer';
import data from "../DataBase/qs.json";
import {useNavigate} from 'react-router-dom'; 


const Quiz = () => {
    
    const [index,setIndex]=useState(0);
    const [answer,setAnswer]=useState(null)
    const [score,setScore]=useState(0);
    const navigate=useNavigate()

    const check=()=>{
        if (answer===data[index].correct) {
            setScore(score+1)
        }
        setIndex(index+1)
    }

    const lastCheck=()=>{
        if (answer===data[index].correct) {
            navigate("/Result",{state:{length:data.length,score:score+1}})
        }else{
        navigate("/Result",{state:{length:data.length,score:score}})
    }}
    


    return (
        <div>
            <div className='content  home '>
                <h1 style={{"margin-top": "20px"}}>{index+1}. {data[index].qs}</h1>
                <div className='questions'>
                    {[data[index].a1,data[index].a2,data[index].a3].map((i)=>
                    <button 
                        class="ui button flexItem"
                        onClick={()=>{setAnswer(i)}}    
                    >{i}</button>)}
                </div>
            </div>
            <Footer length={data.length} index={index} check={check} score={score} lastCheck={lastCheck}/>
        </div>
    );
};

export default Quiz;