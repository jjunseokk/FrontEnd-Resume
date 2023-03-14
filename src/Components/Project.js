import React from "react";
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
import rockpaper from '../asset/Image/rockpaper.png';
import random from "../asset/Image/random.png"
import todo from '../asset/Image/todo.png';
import wheather from '../asset/Image/weather.png';
import popup from '../asset/Image/popup.png';
import hnm from '../asset/Image/hnm.png';
import resume from '../asset/Image/resume.png';


function Project() {
    const Container = styled.div`
    width: 60vw;
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
                    <Card img={Movie} alt="movie" title='영화 검색 페이지(반응형)'
                    text="영화소개페이지는 검색으로 영화를 검색할 수 있고 예고편과 리뷰등을 볼 수 있으며 또 주제별로 sort가 가능합니다.
                    Rest API를 이용해 axios를 통해 API를 받아 작성하였고 Component를 활용하였습니다.
                    React로 작성하여 Redux를 통해 상태관리를 하였습니다." 
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                    img3 ="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                    page ="https://junmovie.netlify.app"
                    git="https://github.com/jjunseokk/junmovie"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={Bongues} alt="bongues" title='봉구스 밥버거 리뉴얼 페이지(반응형)' 
                    text="기존 봉구스 밥버거 홈페이지를 새롭게 만든 리뉴얼페이지입니다. React를 사용했으며 SPA로 만들었으며 JSON파일로 메뉴를
                    만들었으며 JSON파일로 밥버거 메뉴를 map을 통해 뿌려주었습니다. 또 카카오 API를 통해 카카오맵을 활용하였습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                    page ="https://serene-nougat-c7d794.netlify.app"
                    git="https://github.com/jjunseokk/bobburger_renewal"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={hnm} alt="hnm" title='HnM 미니페이지(반응형)' 
                    text="HnM 미니 페이지로 React를 사용했으며 JSON파일로 쇼핑리스트를 map을 통해 뿌려주었습니다. 또 로그인 페이지를 만들어 라우터를 이용해 
                    로그인이 되지 않는다면 상세페이지로 넘어가지 않게 작성하였고 Redux로 상태관리를 하여 작성하였습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                    img3 ="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"
                    page ="https://hnm-practice.netlify.app/"
                    git="https://github.com/jjunseokk/hnm-site"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={rockpaper} alt="game" title='가위바위보 미니게임(반응형)' 
                    text="가위바위보 미니 게임입니다. random 함수를 이용해 컴퓨터는 랜덤 함수를 통해서 랜덤으로 가위, 바위, 보 중 하나를 선택하여
                    사용자에게 표시합니다. Component를 활용하여 작성하였고 사용자가 어떤 기기로 사용할 지 몰라 반응형으로 작성하였습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                    page ="https://jjunseokk.github.io/rock-paper-scissors/"
                    git="https://github.com/jjunseokk/rock-paper-scissors"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={resume} alt="resume" title='포트폴리오' 
                    text="React를 이용한 포트폴리오입니다. Component 재사용과 Router를 이용하였고 Styled Component를 사용하여
                    좀 더 편리하게 Style 작업을 하였습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"
                    img3 ="https://img.shields.io/badge/Styled Component-FF3399?style=flat-square&logo"
                    page ="https://fluffy-figolla-7b6ef8.netlify.app/"
                    git="https://github.com/jjunseokk/FrontEnd-Resume"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={todo} alt="todo" title='todo list(반응형)' 
                    text="Vanilla JS로 작성하였습니다. 전체 목록과 해야할일 완료한일 목록으로 나눠 작성하였으며 체크버튼을 누르면 완료된 항목으로
                    분류가 되고 체크를 하지 않는다면 해야할일로 표시합니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                    img3 ="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
                    page ="https://curious-daffodil-e2e4b9.netlify.app"
                    git="https://github.com/jjunseokk/Todo-List"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={wheather} alt="weather" title='날씨와 뉴스(반응형)' 
                    text="Vanilla JS와 Jquery로 작성하였습니다. OpenWeather API와 News API를 사용하여 작성하였고 현재날씨, 최저/최고 온도, 풍속,
                    구름량을 볼 수 있습니다. 또 날씨별로 백그라운드 화면도 변경됩니다. 현재는 new API calls limit가 되어서 볼 수 없지만 API를 재생성하면 볼 수 있습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                    img3 ="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
                    img4 = "https://img.shields.io/badge/jQuery-0769AD?sty~le=flat-square&logo=jQuery&logoColor=white"
                    page ="https://creative-churros-35b6d4.netlify.app"
                    git="https://github.com/jjunseokk/Weather-news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={random} alt="random" title='랜덤 숫자 맞추기 게임(반응형)' 
                    text="Vanilla JS로 작성하였습니다. random 함수를 써 컴퓨터는 1~100까지 랜덤숫자를 지정하고 사용자는 5번 안에 맞추는 게임입니다.
                    숫자를 중복선택을 막아주고 1~100의 범위를 넘어가면 카운트되지 않습니다. 사용자가 선택한 값에서 up인지 down인지 알려주는 미니게임입니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                    img3 ="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
                    page ="https://nimble-tartufo-486be8.netlify.app"
                    git="https://github.com/jjunseokk/RandomNumber"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card img={popup} alt="popup" title='쿠키를 이용한 팝업창' 
                    text="Vanilla JS와 Jquery로 작성하였습니다. 모달 팝업창으로 쿠키를 이용해 쿠키 값이 none이 되면 팝업창이 하루동안
                    보이지 않도록 제어하였습니다."
                    img1 ="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"
                    img2 ="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"
                    img3 ="https://img.shields.io/badge/Javascript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white"
                    img4 = "https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"
                    page ="https://rococo-beignet-9b8e0b.netlify.app"
                    git="https://github.com/jjunseokk/popup"
                    />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
};



export default Project;