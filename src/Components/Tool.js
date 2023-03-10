import React from "react";
import ToolCard from "./ToolCard";



import slackLogo from '../asset/Image/slackLogo.png'
import gitLogo from '../asset/Image/gitLogo.png';
import JiraLogo from '../asset/Image/jiraLogo.png'

const Tool = () => {
    return (
        <>
            <div>
                <p className="ToolTitle">스크롤 하면 옆으로 넘어갑니다.</p>
            </div>
            <div className="external">
                <div className="horizontal-scroll-wrapper">
                    <ToolCard
                        style="img-wrapper slower"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper faster"
                        img={gitLogo}
                    />
                    <ToolCard
                        style="img-wrapper slower vretical"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper slower slower-down"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper faster1"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper slower2"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper slower"
                        img={slackLogo}
                    />
                    <ToolCard
                        style="img-wrapper slower last"
                        img={slackLogo}
                    />
                </div>
            </div>

        </>
    )
}

export default Tool;