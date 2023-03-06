import React, { useState, useEffect } from "react";
import '../Style/project.css'
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import { EffectCards } from "swiper";
import { Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import 'swiper/css/scrollbar';
import Card from "./Card";



// PNG Import
import Movie from "../asset/Image/MoviePage.png";
import Bongues from '../asset/Image/Bongues.png';

function Project() {
    const Container = styled.div`
    width: 50vw;
    /* border: 1px solid red; */
    margin: 0 auto;
    background-color: ${(props) => props.bgColor}; //props로 받기!!!!
`;

    return (
        <Container>
            <Swiper
                pagination={{dynamicBullets: true}}
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Card img={Movie} alt="movie" title='영화 검색 페이지' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={Bongues} alt="bongues" title='봉구스 밥버거 리뉴얼 페이지' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={Bongues} alt="bongues" title='봉구스 밥버거 리뉴얼 페이지' />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={Bongues} alt="bongues" title='봉구스 밥버거 리뉴얼 페이지' />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
};



export default Project;