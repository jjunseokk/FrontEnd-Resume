import React from "react";
import '../Style/join.css'
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { EffectCards } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import 'swiper/css/scrollbar';



function Card(props) {
    return (
        <SwiperSlide>
            <button onClick={() => { alert("???") }}>
                <div className="img-frame">
                    <img src={props.img} alt={props.alt} className="slide1" />
                    <div className="text-frame">
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </button>
        </SwiperSlide>
    )
}

export default Card;