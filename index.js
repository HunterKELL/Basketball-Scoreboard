let homeBoard = document.getElementById('home-board');
let guestBoard = document.getElementById('guest-board');
//console.log(homeBoard);
//console.log(guestBoard);

//Scores are set to zero
let homeScore = 0;
let guestScore = 0;

function addHome1() {
    homeScore += 1;
    homeBoard.textContent = homeScore;
};

function addHome2() {
    homeScore += 2;
    homeBoard.textContent = homeScore;
};

function addHome3() {
    homeScore += 3;
    homeBoard.textContent = homeScore;
};

function addGuest1() {
    guestScore += 1;
    guestBoard.textContent = guestScore;
};

function addGuest2() {
    guestScore += 2;
    guestBoard.textContent = guestScore;
};

function addGuest3() {
    guestScore += 3;
    guestBoard.textContent = guestScore;
};

function resetBoard() {
    homeBoard.textContent = 0;
    guestBoard.textContent = 0;
};