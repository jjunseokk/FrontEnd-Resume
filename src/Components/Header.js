import React from "react";
import styled from "styled-components";
import { faPiedPiperAlt, faGithubAlt, faInstagram, faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../App.css';


function Header() {
    const instargramUrl = 'https://www.instagram.com/jsjs_ppark/';
    const githubUrl = 'https://velog.io/@oask12/series';
    const blogUrl = 'https://velog.io/@oask12';


    
    return (
        <Container>
            <TopMenu>
                <FontAwesomeIcon icon={faPiedPiperAlt}
                    style={{ fontSize: 50 }} className="Logo font_color_white"
                />
                <div className="btn_wrap">
                    <span className="snsArea">SNS</span>
                    <div className="container">
                        <button onClick={() => { window.open(githubUrl) }}>
                            <FontAwesomeIcon icon={faGithubAlt} style={{ fontSize: 40 }}
                                className="font_color_black" />
                        </button>
                        <button onClick={() => { window.open(instargramUrl) }}>
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 40 }}
                                className="font_color_black" />
                        </button>
                        <button onClick={() => { window.open(blogUrl) }}>
                            <FontAwesomeIcon icon={faBloggerB} style={{ fontSize: 40 }}
                                className="font_color_black" />
                        </button>
                    </div>
                </div>
            </TopMenu>
        </Container>

    );
}

const Container = styled.div`

`;

const TopMenu = styled.div`
    width: 100vw;
    height: auto;
    padding: 10px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    /* position: fixed; */
    z-index: 10;
`;

export default Header;