import React from "react";
import '../Style/project.css';
import '../Style/pageBtn.css';
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import 'swiper/css/scrollbar';



function Card(props) {
    document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
    return (
        <button>
            <div className="img-frame">
                <img src={props.img} alt={props.alt} className="slide1" />
                <div className="text-frame">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <div className="showArea">
                        <div className="stack">
                            <img src={props.img1} alt="" />
                            <img src={props.img2} alt="" />
                            <img src={props.img3} alt="" />
                            <img src={props.img4} alt="" />
                        </div>
                        <div className="goBtn">
                            <a href={props.page} target="_blank">Page</a>
                            <a href={props.git} target="_blank">github</a>
                        </div>
                    </div>

                </div>
            </div>
        </button>
    )
}

export default Card;