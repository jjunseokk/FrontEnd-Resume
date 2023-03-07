import React, { useEffect } from "react";
import '../Style/horizonSlide.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

function HorizonSlide() {
    const MoveToTop = () => {
        // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className="HorizonSlide-container">
            <div className="codepen">
                <span className="c1">T</span>
                <span className="c2">H</span>
                <span className="c3">E</span>
                <span className="c4">&nbsp;</span>
                <span className="c5">E</span>
                <span className="c6">N</span>
                <span className="c7">D</span>
                <span className="c8"></span>
                <div className="bg"></div>
                <FontAwesomeIcon className="scrollUp" icon={faCircleUp} onClick={MoveToTop} />
            </div>
        </div>

    )

}


export default HorizonSlide;