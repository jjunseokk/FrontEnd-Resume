import React from "react";
import '../Style/language.css';
import LanguageCard from "./LanguageCard";

// img
import htmlLogo from '../asset/Image/htmlLogo.png';
import cssLogo from '../asset/Image/cssLogo.png';
import jsLogo from '../asset/Image/jsLogo.png';
import jqueryLogo from '../asset/Image/jqueryLogo.png';
import reactLogo from '../asset/Image/reactLogo.png';
import reduxLogo from '../asset/Image/redux.png';
import bootLogo from '../asset/Image/bootLogo.png';
import rnLogo from '../asset/Image/rnLogo.png';

function Language() {

    return (
        <div className="Language-container">
            <LanguageCard 
                title="HTML"
                btnTitle="참고서 바로가기"
                url="https://developer.mozilla.org/ko/docs/Web/HTML"
                img={htmlLogo}
            />
            <LanguageCard 
                title="CSS"
                btnTitle="참고서 바로가기"
                url="https://developer.mozilla.org/ko/docs/Web/CSS/Reference"
                img={cssLogo}
            />
            <LanguageCard 
                title="JAVASCRIPT"
                btnTitle="참고서 바로가기"
                url="https://developer.mozilla.org/ko/docs/Web/JavaScript"
                img={jsLogo}
                text=""
            />
            <LanguageCard 
                title="Jquery"
                btnTitle="참고서 바로가기"
                url="https://api.jquery.com"
                img={jqueryLogo}
            />
            <LanguageCard 
                title="Bootstrap"
                btnTitle="참고서 바로가기"
                url="https://getbootstrap.com"
                img={bootLogo}
            />
            <LanguageCard 
                title="REACT"
                btnTitle="참고서 바로가기"
                url="https://ko.reactjs.org"
                img={reactLogo}
            />
            <LanguageCard 
                title="Redux"
                btnTitle="참고서 바로가기"
                url="https://ko.redux.js.org"
                img={reduxLogo}
            />
            <LanguageCard 
                title="React Native"
                btnTitle="참고서 바로가기"
                url="https://reactnative.dev/"
                img={rnLogo}
            />
        </div>
    )

}


export default Language;