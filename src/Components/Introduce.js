import React from "react";
import '../Style/introduce.css'
import '../Style/button.scss'
import down from '../asset/Image/down.gif'
import resume from '../asset/Image/resume.pdf'

//  const handleMove = e => {
//     let left = document.getElementById("left-side");

//     left.style.width = `${e.clientX / window.innerWidth * 100}%`;
// }
// window.onmousemove = e => handleMove(e);

// window.ontouchmove = e => handleMove(e.touches[0]);

function Introduce() {
    return (
        <div className="Container">
            <div id="left-side" className="side">
                <h2 className="title">
                    Hello, I'm curious and record-loving. <br />front-end developer
                    <span className="fancy"> Park junseok!</span>
                </h2>
            </div>
            <div id="right-side" className="side">
                <h2 className="title">
                    Hello, I'm curious and record-loving. <br />front-end developer
                    <span className="fancy"> Park junseok!</span>
                    <a className="goResume" href={resume} download><button className="btn draw-border">Resume Download</button></a>
                    <p className="downImg"> Scroll Down! ⬇️⬇️⬇️ </p>
                </h2>
            </div>

        </div>
    )
}


export default Introduce;