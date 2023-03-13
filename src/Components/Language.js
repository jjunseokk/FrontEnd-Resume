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
import slackLogo from '../asset/Image/slackLogo.png';
import jiraLogo from '../asset/Image/jiraLogo.png';
import gitLogo from '../asset/Image/gitLogo.png'

function Language() {



    return (
        <div className="Language-container">
            <h1 style={{ color: 'white', width: '100%', textAlign: 'center' }}>Language</h1>
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
            <LanguageCard
                title="Slack"
                btnTitle="참고서 바로가기"
                url="https://slack.com/intl/ko-kr/"
                img={slackLogo}
            />
            <LanguageCard
                title="Jira"
                btnTitle="참고서 바로가기"
                url="https://www.atlassian.com/ko/software/jira?&aceid=&adposition=&adgroup=143040573765&campaign=19324540316&creative=642069041217&device=c&keyword=jira&matchtype=e&network=g&placement=&ds_kids=p74608960066&ds_e=GOOGLE&ds_eid=700000001558501&ds_e1=GOOGLE&gclid=Cj0KCQiAx6ugBhCcARIsAGNmMbgEwlTO1CQntwktXipiviDmi9LIIXc_t3OpbPVe1Dgv9kCp4pwqp6AaAnJtEALw_wcB&gclsrc=aw.ds"
                img={jiraLogo}
            />
            <LanguageCard
                title="Github"
                btnTitle="참고서 바로가기"
                url="https://github.com/"
                img={gitLogo}
            />
        </div>
    )

}


export default Language;