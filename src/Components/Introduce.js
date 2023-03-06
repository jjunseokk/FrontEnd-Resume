import React, { useEffect } from "react";
import '../Style/introduce.css'
import down from '../asset/Image/down.gif'


export const handleMove = e => {
    let left = document.getElementById("left-side");

    left.style.width = `${e.clientX / window.innerWidth * 100}%`;
}
window.onmousemove = e => handleMove(e);

window.ontouchmove = e => handleMove(e.touches[0]);

function Introduce() {
    return (
        <div className="Container">
            <div id="left-side" className="side">
                <h2 className="title">
                    Hello, I'm curious and record-loving. <br />I'm front-end developer
                    <span className="fancy"> Park junseok!</span>
                    
                </h2>
            </div>
            <div id="right-side" className="side">
                <h2 className="title">
                    Hello, I'm curious and record-loving. <br />I'm front-end developer
                    <span className="fancy"> Park junseok!</span>
                    <img className="downImg" src={down} alt="down"/>
                </h2>
            </div>
        </div>
    )
}


export default Introduce;