let playerTurn = true;
let totalMoves = 0;
let XO = 'X';
let Player1Var = document.getElementById('Player1Text');
let Player2Var = document.getElementById('Player2Text');
let id;
let Xsquares = [];
let Osquares = [];
let winningCombo = [
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
];

//check to see if a player has won
function winCondition() {
    for (let i = 0; i < winningCombo.length; i++) {
        if (Xsquares.includes(winningCombo[i][0]) && Xsquares.includes(winningCombo[i][1]) && Xsquares.includes(winningCombo[i][2])) {
            swal('Tic Tac Toe','Player 1 wins!','success', {button:false});
            newGame();
        }
        else if (Osquares.includes(winningCombo[i][0]) && Osquares.includes(winningCombo[i][1]) && Osquares.includes(winningCombo[i][2])) {
            swal('Tic Tac Toe','Player 2 wins!','success', {button:false});
            newGame();
        }
        else if (Xsquares.length + Osquares.length >= 9) {
            swal('Tic Tac Toe','It’s a tie','warning', {button:false});
            newGame();
        }
    }
}


//response to if a button is pressed
function squarePressed(squareID) {
    id = document.getElementById(squareID);

    if (playerTurn) {
        XO = 'X';
    }
    else {
        XO = 'O';
    }
    
    if (id.innerHTML != 'X' && id.innerHTML != 'O') {
        id.innerHTML = XO;
        if (playerTurn) {
            Xsquares.push(squareID);
        }
        else {
            Osquares.push(squareID);
        }
        playerTurn = !playerTurn;
        checkPlayerTurn();
        winCondition();
    }
    else {
        swal('Tic Tac Toe','Please play elsewhere!','error', {button:false});
    }
}


//start a new game
function newGame() {
    playerTurn = true;
    totalMoves = 0;
    XO = 'X';
    Player1Var = document.getElementById('Player1Text');
    Player2Var = document.getElementById('Player2Text');
    Xsquares = [];
    Osquares = [];
    
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = ' ';
    }
    
    checkPlayerTurn();
}


//check  who's turn it is and change CSS based off that
function checkPlayerTurn() {
    if (playerTurn) {
        Player1Var.style = "border: 5px solid #7575dd; margin: 0 auto; background-color: #5252d4; width: 100px;";
        Player2Var.style = "border: 0px; margin: 0 auto; background-color: #9068be; width: 100px;";
    }
    else {
        Player2Var.style = "border: 5px solid #7575dd; margin: 0 auto; background-color: #5252d4; width: 100px;";
        Player1Var.style = "border: 0px; margin: 0 auto; background-color: #9068be; width: 100px;";
    }
}

checkPlayerTurn();