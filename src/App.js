import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components'
import Header from './Components/Header';



function ChangeColor() {
  window.addEventListener('scroll', function () {

  })
}



function App() {

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
    // console.log(window.scrollY);
    
    window.addEventListener('scroll', updateScroll);
  };


  return (
    <div className="App">
      <div className={ scrollEvent > 500? "white_bg":"black_bg"}>
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
