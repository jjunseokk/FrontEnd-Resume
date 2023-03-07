import React from "react";
import '../Style/language.css';
import styled from "styled-components";





function LanguageCard(props) {
    
    return (
        <div className="flip-card-container">
            <div className="flip-card">
                <div className="card-front">
                    <figure>
                        <div className="img-bg"></div>
                        <img src={props.img} alt="Brohm Lake" />
                        <p>{props.title}</p>
                    </figure>
                </div>

                <div className="card-back">
                    <figure>
                        <div className="img-bg"></div>
                        <p>{props.text}</p>
                        <img src={props.img} alt="Brohm Lake" />
                    </figure>

                    <button onClick={()=>{window.open(props.url)}}>{props.btnTitle}</button>

                    <div className="design-container">
                        <span className="design design--1"></span>
                        <span className="design design--2"></span>
                        <span className="design design--3"></span>
                        <span className="design design--4"></span>
                        <span className="design design--5"></span>
                        <span className="design design--6"></span>
                        <span className="design design--7"></span>
                        <span className="design design--8"></span>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default LanguageCard;