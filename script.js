let selectors = {
    end : document.querySelector(".end"),
    main : document.querySelector(".main"),
    rock : document.querySelector(".rock"),
    paper : document.querySelector(".paper"),
    scissors : document.querySelector(".scissor"),
    escolhaPlayer : document.querySelector(".escolhaPlayer"),
    escolhaPC : document.querySelector(".escolhaPC"),
    numPlay : document.querySelector(".numPlay"),
    numPC: document.querySelector(".numPC"),
    body: document.body,
}

let parameters = {
    i: 0,   /* turno */
    sj: 0,  /* score players*/
    sp: 0,  /* score pc */ 
    userChoice: '',
    compChoice: '',
}

let functions = {
    random: function () {
        let choices = ["Rock","Paper","Scissors"]
        parameters.compChoice = choices[Math.floor(Math.random()*3)]
    },

    gameEngine: function() { 
        if (parameters.userChoice == parameters.compChoice) {selectors.escolhaPlayer.textContent = 'You choose ' + parameters.userChoice + ' - Draw';
        selectors.escolhaPC.textContent = 'PC choose ' + parameters.compChoice + ' - Draw'; selectors.escolhaPlayer.style.backgroundColor = ' #a9a9a9'; selectors.escolhaPC.style.backgroundColor = ' #a9a9a9'}
        else if (parameters.userChoice == "Paper" && parameters.compChoice =="Rock") {this.ganhador()}
        else if (parameters.userChoice == "Rock" && parameters.compChoice =="Scissors") {this.ganhador()}
        else if (parameters.userChoice =="Scissors" && parameters.compChoice =="Paper"){this.ganhador()}
        else { this.perdedor()};
        setTimeout(functions.check, 1000)

    },

    ganhador: function () { 
        selectors.escolhaPlayer.textContent = 'You choose ' + parameters.userChoice + ' - Won';
        selectors.escolhaPC.textContent = 'PC choose ' + parameters.compChoice + ' - Lost'; 
        selectors.escolhaPlayer.style.backgroundColor = 'lightgreen'; selectors.escolhaPC.style.backgroundColor = '#ed2939' ;
        selectors.numPlay.textContent = ++parameters.sj;
    },

    perdedor: function () { 
        selectors.escolhaPlayer.textContent = 'You choose ' + parameters.userChoice + ' - Lost';
        selectors.escolhaPC.textContent = 'PC choose ' + parameters.compChoice + ' - Won'; 
        selectors.escolhaPlayer.style.backgroundColor =  '#ed2939' ; selectors.escolhaPC.style.backgroundColor = 'lightgreen';
        selectors.numPC.textContent = ++parameters.sp;
    },

    endGame: function (msg) {  
        selectors.main.style.display = 'none'; selectors.end.style.display = 'flex';
        let resultado = document.querySelector('.resultado');
        let message = document.querySelector('.message'); 
        message.textContent = msg;  
        resultado.textContent = `${parameters.sj} - ${parameters.sp}`; 
    },

    reset: function () {parameters.sj = 0 ; parameters.sp = 0; parameters.i = 0 ;
        selectors.numPlay.textContent = 0 ; 
        selectors.numPC.textContent = 0;
    },

    check: function() {
        let sj = parameters.sj;
        let sp = parameters.sp;
        if (parameters.i === 5) {
            if (Number(sj) > Number(sp)) {functions.endGame('You win!') ; functions.reset() }
            else if (Number(sj) < Number(sp)) {functions.endGame('You lose!'); functions.reset() }
            else {functions.endGame('Draw!') ; functions.reset() }
        }
    },

}

let listeners = function() {
    let rock = selectors.rock.addEventListener('click', (e) => {
        parameters.userChoice = "Rock";functions.random() ; parameters.i++ ; functions.gameEngine()
    });

    let paper = selectors.paper.addEventListener('click', (e) => {
        parameters.userChoice = "Paper" ;functions.random() ; 
        parameters.i++ ; functions.gameEngine()
    });

    let scissor = selectors.scissors.addEventListener('click', (e) => {
        parameters.userChoice = "Scissors" ; functions.random() ; 
        parameters.i++ ; functions.gameEngine()
    });

    let end = selectors.end.addEventListener('click', (e) => {selectors.main.style.display = 'flex'; selectors.end.style.display = 'none';
        selectors.escolhaPlayer.textContent = 'You choose...'; 
        selectors.escolhaPC.textContent = 'PC choose...'
        selectors.escolhaPlayer.style.backgroundColor = '#e5e5dc' ;  
        selectors.escolhaPC.style.backgroundColor = '#e5e5dc'
    });

}()
