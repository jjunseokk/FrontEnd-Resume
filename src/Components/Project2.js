import React, { useEffect } from "react";
import '../Style/project2.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from '../Components/Project';

import { faCircleUp } from "@fortawesome/free-regular-svg-icons";

function Project2() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
        script.async = true
        document.body.appendChild(script);
    })

    document.querySelectorAll('a').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 20
            });
        });
    });

    const MoveToTop = () => {
        // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="project2-container">
            <nav>
                <ul>
                    <li><a href="#section-1">Language</a></li>
                    <li><a href="#section-2">Section 2</a></li>
                    <li><a href="#section-3">Section 3</a></li>
                </ul>
            </nav>

            <section id="section-1">
                <div className="languageAera">

                </div>
            </section>

            <section id="section-2">
                <span>
                    <Project/>
                </span>
            </section>

            <section id="section-3">
                <span>Section 3</span>
                <FontAwesomeIcon className="scrollUp" icon={faCircleUp} onClick={MoveToTop}/>
            </section>

        </div>

    )
}


export default Project2;