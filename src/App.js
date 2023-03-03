import React, { useEffect, useState } from 'react';
import './App.css';
//라이브러리
// import styled from 'styled-components'
import LoadingScreen from 'react-loading-screen';
// js
import Project from './Components/Project';
import Header from './Components/Header';
import consoleIcon from './asset/Image/consoleIcon.png'
import loading from './asset/Image/loading.gif'


function App() {

  const [scrollEvent, setScrollEvent] = useState(0);// 스크롤 이벤트
  const [loaded, setLoaded] = useState(true); //로딩 스크린

  useEffect(() => {
    let timer = setTimeout(() => { setLoaded(false) }, 3000)
  })

  // 스크롤 이벤트 -----------------------
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
            <div className={scrollEvent > 500 ? "white_bg" : "black_bg"}>
              <Header />
              <img className='consoleImg' src={consoleIcon} alt="console" />
              <Project />
            </div>
          )
      }
    </div>
  );
}

export default App;
