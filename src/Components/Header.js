import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { faPiedPiperAlt, faGithubAlt, faInstagram, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';

function Header() {

    // 스크롤이벤트 스테이트 변수 선언
    const [scrollEvent, setScrollEvent] = useState(0);

    const instargramUrl = 'https://www.instagram.com/jsjs_ppark/';
    const githubUrl = 'https://github.com/jjunseokk';
    const blogUrl = 'https://velog.io/@oask12';

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
        console.log(window.scrollY);

        window.addEventListener('scroll', updateScroll);
    };





    return (
        <Container>
            <TopMenu>
                <FontAwesomeIcon icon={faPiedPiperAlt}
                    style={{ fontSize: 50 }} className={scrollEvent > 500 ? "Logo font_color_black" : "Logo font_color_white"}
                />
                <CurrentBox className={scrollEvent > 500 ? "font_color_black" : "font_color_white"}>
                    <button onClick={() => { window.open(instargramUrl) }}>
                        <FontAwesomeIcon icon={faGithubAlt} style={{ fontSize: 40 }}
                            className={scrollEvent > 500 ? "font_color_black" : "font_color_white"} />
                    </button>
                    <button onClick={() => { window.open(githubUrl) }}>
                        <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 40 }}
                            className={scrollEvent > 500 ? "font_color_black" : "font_color_white"} />
                    </button>

                    <button onClick={() => { window.open(blogUrl) }}>
                        <FontAwesomeIcon icon={faBloggerB} style={{ fontSize: 40 }}
                            className={scrollEvent > 500 ? "font_color_black" : "font_color_white"} />
                    </button>
                </CurrentBox>
            </TopMenu>
        </Container>

    );
}

const Container = styled.div`
    height: 50px;
`;

const TopMenu = styled.div`
    width: 100vw;
    height: 150px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 100;
`;

const MenuBox = styled.div`
    width: 40vw;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    /* border: 1px solid red; */
`;

const CurrentBox = styled.div`
    width: 15vw;
    display: flex;
    justify-content: space-around;
    margin-right: 20px;
    /* border: 1px solid red; */
`;

export default Header;