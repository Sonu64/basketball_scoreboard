let scoreAElement = document.getElementById("scoreA")
let scoreBElement = document.getElementById("scoreB")


console.log(scoreA)

function increaseScoreOfA(factor) {
    scoreA = parseInt(scoreAElement.innerText);
    let initialScore = scoreA
    let finalScore = initialScore + factor
    scoreAElement.innerText = finalScore
}

function increaseScoreOfB(factor) {
    scoreB = parseInt(scoreBElement.innerText);
    let initialScore = scoreB
    let finalScore = initialScore + factor
    scoreBElement.innerText = finalScore
}

function reset() {
    scoreA = 0
    scoreAElement.innerText = scoreA
    scoreB = 0
    scoreBElement.innerText = scoreB
}