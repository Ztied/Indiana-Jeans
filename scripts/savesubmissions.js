import { saveSurveySubmission } from "./transientstate.js"

 
     const handleSurveySubmissionClick = (clickEvent) => {
        if (clickEvent.target.name === "saveSubmission") {
            saveSurveySubmission()
        }
    }

export const saveSubmission = () => {

    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button name='saveSubmission'>Save Submission</button></div>"
     
}