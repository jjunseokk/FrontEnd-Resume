import React, { useEffect, useState } from 'react';
import './App.css';
//라이브러리
// import styled from 'styled-components'
import LoadingScreen from 'react-loading-screen';
// js
import Project2 from './Components/Project2';
import Introduce, { handleMove } from './Components/Introduce';
import Header from './Components/Header';
import loading from './asset/Image/loading.gif'


function App() {

  const [scrollEvent, setScrollEvent] = useState(0);// 스크롤 이벤트
  const [loaded, setLoaded] = useState(true); //로딩 스크린 


  useEffect(() => {
    window.addEventListener('scroll', handleScroll );
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  },[]);

  useEffect(() => {
    let timer = setTimeout(() => { setLoaded(false) }, 3000)
  })
  

  // 스크롤 이벤트 -----------------------
  const updateScroll = () => {
    setScrollEvent(window.scrollY || document.documentElement.scrollTop);
  }

  const handleScroll = () => {
    // console.log(window.scrollY);
    window.addEventListener('scroll', updateScroll);
  };
  // 스크롤 이벤트 끝-------------------------
  

  return (
    <div className="App">
      {
        loaded ? //로드가 트루야? 그럼 로딩 화면을 띄우고 트루가 아니야? 그럼 앱 화면 띄워
          (<LoadingScreen
            loading={loaded}
            bgColor='black'
            spinnerColor='white'
            textColor='white'
            logoSrc={loading}
            text='Loding...'
          >

          </LoadingScreen>) : (
            <div className={scrollEvent > 650 ? "white_bg" : "black_bg"}>
              <Header />
              <Introduce/>
              {/* <Project2 /> */}
            </div>
          )
      }
    </div>
  );
}

export default App;
