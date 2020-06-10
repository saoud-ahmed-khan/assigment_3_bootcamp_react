import React from 'react'
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import './index.css'


function Dinner(props)
{ 
    return (
    <div className="content">
        <h1>we are serving {props.dishname}</h1>
        <h1>we are serving {props.desert}</h1>
    </div>
    );
    }
 


export default Dinner;