import React, { useEffect } from "react";
import '../Style/project2.css';

import Project from '../Components/Project';
import Language from "./Language";

function Project2() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/iamdustan-smoothscroll/0.4.0/smoothscroll.min.js"
        script.async = true
        document.body.appendChild(script);
    },[])

    document.querySelectorAll('a').forEach(elem => {
        elem.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(elem.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                offsetTop: 20
            });
        });
    });



    return (
        <div className="project2-container">
            <nav>
                <ul>
                    <li><a href="#section-1">Language</a></li>
                    <li><a href="#section-2">Tool</a></li>
                    <li><a href="#section-3">Project</a></li>
                </ul>
            </nav>

            <section id="section-1">
                <div className="languageAera">
                    <Language />
                </div>
            </section>

            <section id="section-2">
                <span>
                </span>
            </section>

            <section id="section-3">
                <span>
                    <Project />
                </span>
            </section>

        </div>

    )
}


export default Project2;