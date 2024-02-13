

export const submissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionHTML = ""
    for(const submission of submissions) {
        submissionHTML += `<section class="submissions">
        <div>Own Jeans? ${submission.ownsBlueJeans}</div>
        <div>Area type foreign key? ${submission.socioLocationId}</div>
        
        
        
        </section>`
    }
    return submissionHTML
}