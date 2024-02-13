import { setOwnsBlueJeans } from "./transientstate.js"

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handleOwnershipChange = (changeEvent) => {
        if (changeEvent.target.name === "ownsJeans") {
            const convertedToBoolean = JSON.parse(changeEvent.target.value)
            setOwnsBlueJeans(convertedToBoolean)
        }
    }

export const ownJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let radioButtonHTML = "<h2> Do you own a pair of blue jeans?</h2>"
     radioButtonHTML += "<input type='radio' name='ownsJeans' value='true'/>Yes"
     radioButtonHTML += "<input type='radio' name='ownsJeans' value='false'/>No"
     return radioButtonHTML
}