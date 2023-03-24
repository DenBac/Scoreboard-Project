let homePointsEl = document.getElementById("home-Points")
homePoints = 0
function plusOneHome() {
    homePoints += 1
    homePointsEl.textContent = homePoints
}
function plusTwoHome() {
    homePoints += 2
    homePointsEl.textContent = homePoints
}
function plusThreeHome() {
    homePoints += 3
    homePointsEl.textContent = homePoints
}
let guestPointsEl = document.getElementById("guest-Points")
guestPoints = 0
function plusOneGuest() {
    guestPoints += 1
    guestPointsEl.textContent = guestPoints
}
function plusTwoGuest() {
    guestPoints += 2
    guestPointsEl.textContent = guestPoints
}
function plusThreeGuest() {
    guestPoints += 3
    guestPointsEl.textContent = guestPoints
}

function homeReset() {
    homePoints = 0
    homePointsEl.textContent = homePoints
}

function guestReset() {
    guestPoints = 0
    guestPointsEl.textContent = guestPoints
}

let startTime = 20;
let startTimeEL = document.getElementById("Timer")

function newGame() {
    homePoints = 0
    guestPoints = 0
    startTime = "20:00"
    homePointsEl.textContent = homePoints
    guestPointsEl.textContent = guestPoints
    startTimeEL.textContent = startTime
}

function resetTimer() {
    startTimeEL.textContent = startTime
}


