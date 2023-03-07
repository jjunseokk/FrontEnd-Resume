import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Intro from './Components/Intro';
import './App.css';


//라이브러리
import LoadingScreen from 'react-loading-screen';

// js
import Main from './Components/Main'
import loading from './asset/Image/loading.gif'



function App() {
  console.clear();
  
  const [scrollEvent, setScrollEvent] = useState(0);// 스크롤 이벤트
  const [loaded, setLoaded] = useState(true); //로딩 스크린 
  useEffect(() => {
    window.addEventListener('scroll', updateScroll)
  }, [])

  useEffect(() => {
    setTimeout(() => { setLoaded(false) }, 3000)
  }, [])


  // 스크롤 이벤트 -----------------------
  const updateScroll = () => {
    setScrollEvent(window.scrollY || document.documentElement.scrollTop);
  }

  // const handleScroll = () => {
  //   // console.log(window.scrollY);
  //   window.addEventListener('scroll', updateScroll);
  // };
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
            text='Loading...'
          >
          </LoadingScreen>) : (
            <div className="black_bg">
              <Header />
              <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/Intro' element={<Intro/>}/>
              </Routes>

            </div>
          )
      }
    </div>
  );
}

export default App;
