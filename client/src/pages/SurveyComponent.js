import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import $ from "jquery";
import "survey-core/defaultV2.min.css";
import "../index.css";
import { useState } from "react";
import { json } from "../assets/questions.js";
import { jsonSpanish } from "../assets/preguntas.js";

StylesManager.applyTheme("defaultV2");
window["$"] = window["jQuery"] = $;

require("velocity-animate/velocity.js");

export default function SurveyComponent() {
    const [language, setLanguage] = useState(true)

    let survey;

    if (language) {
        survey = new Model(json);

    } else {
        survey = new Model(jsonSpanish);

    }
    function animate(animitionType, duration) {
        if (!duration) duration = 1000;
        var element = document.getElementById("root");

        $(element).velocity(animitionType, { duration: duration });
    }

    var doAnimantion = true;
    survey.onCurrentPageChanging.add(function (sender, options) {
        if (!doAnimantion) return;
        options.allowChanging = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.currentPage = options.newCurrentPage;
            doAnimantion = true;
        }, 500);
        animate("slideUp", 500);
    });
    survey.onCurrentPageChanged.add(function (sender) {
        animate("slideDown", 500);
    });
    survey.onCompleting.add(function (sender, options) {
        if (!doAnimantion) return;
        options.allowComplete = false;
        setTimeout(function () {
            doAnimantion = false;
            sender.doComplete();
            doAnimantion = true;
        }, 500);
        // animate("slideUp", 500);
        console.log(JSON.stringify(sender.data, null, 3));
    });
    animate("slideDown", 1000);
    return (
        <>
            {language ? (<button onClick={() => {
                setLanguage(false)
            }}>preguntas en espanol</button>) : (<button onClick={() => {
                setLanguage(true)
            }}>english survey</button>)}
            <Survey model={survey} />
        </>
    );
}


