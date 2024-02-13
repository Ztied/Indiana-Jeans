import { setSocioLocationId } from "./transientstate.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}

export const locationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let choiceHTML = "<h2>Which type of area do you live in?</h2>"
    for (const location of locations) {
        choiceHTML += `<input type='radio' name='location' value='${location.id}'/> ${location.label}` 
    }
    return choiceHTML
}