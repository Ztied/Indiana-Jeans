import { ownJeansChoices } from "./ownsjeans.js"
import { saveSubmission } from "./savesubmissions.js"
import { submissionList } from "./submissions.js"
import { locationTypeChoices } from "./urbandweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = ownJeansChoices()
    const locationsHTML = await locationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionHTML = await submissionList()

    container.innerHTML = `
    ${jeanOwnershipHTML}
    ${locationsHTML}
    ${buttonHTML}
    ${submissionHTML}`
}

document.addEventListener("newSubmissionCreated", render)

render()