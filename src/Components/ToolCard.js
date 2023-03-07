import React from "react";
import '../Style/tool.css'

import slackLogo from '../asset/Image/slackLogo.png'

const ToolCard = (props) => {
    return (
        <>
            <div className="img-wrapper slower">
                <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener">
                    <img src={slackLogo} alt="" />
                </a>
            </div>

        </>
    )
}

export default ToolCard;