import React, { useEffect, useState } from 'react';
import '../App.css';
// js
import Project2 from '../Components/Project2';
import Introduce from '../Components/Introduce';
import End from './End';

function Main() {
    
    return (
        <div className="App">
            <div className="black_bg">
                <Introduce />
                <Project2 />
                <End/>
            </div>
        </div>
    );
}

export default Main;
