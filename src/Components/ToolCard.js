import React from "react";
import '../Style/tool.css'

import slackLogo from '../asset/Image/slackLogo.png'
import gitLogo from '../asset/Image/gitLogo.png';

const ToolCard = (props) => {
    return (
        <>
            <div className={props.style}>
                <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener">
                    <img src={props.img} alt="" />
                </a>
            </div>

        </>
    )
}

export default ToolCard;