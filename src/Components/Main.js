import Reac from 'react';
import '../App.css';
// js
import Project2 from '../Components/Project2';
import Introduce from '../Components/Introduce';
import HorizonSlide from '../Components/HorizonSlide';

function Main() {

    return (
        <div className="App">
            <div className="black_bg">
                <Introduce />
                <Project2 />
                <HorizonSlide />
            </div>
        </div>
    );
}

export default Main;
