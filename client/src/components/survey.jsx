import React from "react";
import * as Survey from "survey-react-ui";

const json = {
    questions: [
        { type: "text" }
    ]
};

const model = new Survey.Model(json);

export function SurveyPage() {
    return (
        <div><Survey.Survey model={model}></Survey.Survey> </div>
    );
}