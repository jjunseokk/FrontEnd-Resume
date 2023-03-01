import React, { useState, useEffect } from "react";
import '../Style/join.css'
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { EffectCards } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import 'swiper/css/scrollbar';



// PNG Import
import Movie from "../asset/Image/MoviePage.png";


function Join() {
    const [scrollEvent, setScrollEvent] = useState(0);

    const updateScroll = () => {
        setScrollEvent(window.scrollY || document.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        console.log(window.scrollY);

        window.addEventListener('scroll', updateScroll);
    };

    const Container = styled.div`
    width: 50vw;
    height: 100vh;
    border: 1px solid red;
    margin: 0 auto;
    background-color: ${(props) => props.bgColor}; //props로 받기!!

`;

    return (
        <Container bgColor={scrollEvent > 500 ? "blue" : "white"}>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <button onClick={()=>{alert("???")}}>
                        <img src={Movie} alt='movie' className="slide1" />
                    </button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie} alt='movie' className="slide1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie} alt='movie' className="slide1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Movie} alt='movie' className="slide1" />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
};



export default Join;