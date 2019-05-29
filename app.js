let playerTurn = true;
let totalMoves = 0;
let XO = 'X';
let Player1Var = document.getElementById('Player1Text');
let Player2Var = document.getElementById('Player2Text');
let turns;
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
    turns;
    Xsquares = [];
    Osquares = [];
    spots = [];
    nextO = 5;
    int = 0;
    str = 0;
    numb = 0;
    winSpots = [];
    
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


//---------------------------------------------------
//AI component
let spots = [];
let winSpots = [];

function AIcheck() {
    for (let i = 0; i < winningCombo.length; i++) {
        if (Xsquares.includes(winningCombo[i][0]) && Xsquares.includes(winningCombo[i][1]) && !Osquares.includes(winningCombo[i][2])) {
            if (!spots.includes(winningCombo[i][2]) && !Xsquares.includes(winningCombo[i][2])) {
                spots.push(winningCombo[i][2]);
            }
        }
        if (Xsquares.includes(winningCombo[i][1]) && Xsquares.includes(winningCombo[i][2]) && !Osquares.includes(winningCombo[i][0])) {
            if (!spots.includes(winningCombo[i][0]) && !Xsquares.includes(winningCombo[i][0])) {
                spots.push(winningCombo[i][0]);
            }
        }
        if (Xsquares.includes(winningCombo[i][0]) && Xsquares.includes(winningCombo[i][2]) && !Osquares.includes(winningCombo[i][1])) {
            if (!spots.includes(winningCombo[i][1]) && !Xsquares.includes(winningCombo[i][1])) {
                spots.push(winningCombo[i][1]);
            }
        }
        
        //check if AI can win
        if (Osquares.includes(winningCombo[i][0]) && Osquares.includes(winningCombo[i][1]) && !Xsquares.includes(winningCombo[i][2])) {
            if (!winSpots.includes(winningCombo[i][2]) && !Xsquares.includes(winningCombo[i][2])) {
                winSpots.push(winningCombo[i][2]);
            }
        }
        if (Osquares.includes(winningCombo[i][1]) && Osquares.includes(winningCombo[i][2]) && !Xsquares.includes(winningCombo[i][0])) {
            if (!winSpots.includes(winningCombo[i][0]) && !Xsquares.includes(winningCombo[i][0])) {
                winSpots.push(winningCombo[i][0]);
            }
        }
        if (Osquares.includes(winningCombo[i][0]) && Osquares.includes(winningCombo[i][2]) && !Xsquares.includes(winningCombo[i][1])) {
            if (!winSpots.includes(winningCombo[i][1]) && !Xsquares.includes(winningCombo[i][1])) {
                winSpots.push(winningCombo[i][1]);
            }
        }
    }
    if (!playerTurn) {
        for (let i = 0; i < winSpots.length; i++) {
            if (Xsquares.includes(winSpots[i])) {
                winSpots.splice(i,1);
            }
        }
        AImove();
    }
}

let nextO = 5;
let int;
let str;
let numb = 0;

function AImove() {
    int = parseInt(Xsquares[numb], 10);
    nextO = int + 1;
    str = nextO.toString();
    
    console.log(Xsquares);
    console.log(str);
    console.log(winSpots);

    if (winSpots.length > 0) {
        let newID = winSpots[0];
        winSpots.shift();
        document.getElementById(newID).innerHTML = 'O';
        playerTurn = true;
        Osquares.push(newID);
    }
    else if (spots.length > 0) {
        let id = spots[0];
        spots.shift();
        document.getElementById(id).innerHTML = 'O';
        Osquares.push(id);
        playerTurn = true;
    }
    else {
        if (!Xsquares.includes('5') && !Osquares.includes('5')) {
            document.getElementById('5').innerHTML = 'O';
            playerTurn = true;
            Osquares.push('5');
        }
        else if (!Xsquares.includes('1') && !Osquares.includes('1')) {
            document.getElementById('1').innerHTML = 'O';
            playerTurn = true;
            Osquares.push('1');
        }
        else if (!Xsquares.includes('3') && !Osquares.includes('3')) {
            document.getElementById('3').innerHTML = 'O';
            playerTurn = true;
            Osquares.push('3');
        }
        else if (!Osquares.includes(str) && !Xsquares.includes(str) && int != 9) {
            document.getElementById(str).innerHTML = 'O';
            playerTurn = true;
            Osquares.push(str);
            if (Xsquares.length == 1) {
                numb = 0;
            }
            else if (Xsquares.length < 0) {
                numb++;
            }
            else {
                numb = 0;
            }
        }
        else {
            numb++;
            int = parseInt(Xsquares[numb], 10);
            nextO = int + 1;
            
            if (!Osquares.includes(str) && !Xsquares.includes(str)) {
                document.getElementById(str).innerHTML = 'O';
                playerTurn = true;
                Osquares.push(str);
            }
            else {
                let newInt = parseInt(Osquares[0], 10);
                let newNextO = newInt + 1;
                let newStr = newNextO.toString();
                
                if (!Osquares.includes(newStr) && !Xsquares.includes(newStr)) {
                    document.getElementById(newStr).innerHTML = 'O';
                    playerTurn = true;
                    Osquares.push(newStr);   
                }
            }   
        }
    }
    winCondition();
}


setInterval(AIcheck,500);

//end of AI component
//---------------------------------------------------


checkPlayerTurn();