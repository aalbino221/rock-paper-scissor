/*
- pedir que usuario escolha entre "pedra", "papel" ou "tesoura" = userChoice
 se for diferente das escolhas => printe Não entendir
 else - continue
- computador escolhe entre "pedra", "papel" ou "tesoura" = compChoice
    Escolhe entre um array ["pedra","papel","tesoura"]
    Função que escolha 0,1 ou 2 => Math.floor(Math.random()*3)
- computador compara escolha de usuario com escolha do computador
- se userChoice === compChoice => printe "Empate"
- se Pedra && Papel => ganhador = Papel
- se Pedra && Tesoura => ganhador = Pedra
- se Tesoura && Papel => ganhador = Tesoura 
if userChoice === ganhador => printe "You win"
else printe "You lose"*/


function input() {
    let inpu = prompt("Pedra, Papel ou Tesoura?")
    userChoice = inpu[0].toUpperCase()+(inpu.slice(1)).toLowerCase()
}
function random () {
    let choices = ["Pedra","Papel","Tesoura"]
    compChoice = choices[Math.floor(Math.random()*3)]}

function gameEngine() {
    if (i === 6) { if (Number(sj) > Number(sp)){endGame('You win!') ; i = 0 ; numPlay.textContent = 0 ; numPC.textContent = 0; sj = 0 ; sp = 0;}
        else if (Number(sj) < Number(sp)) { endGame('You lose!')  ; i = 0 ; numPlay.textContent = 0 ; numPC.textContent = 0; sj = 0 ; sp = 0;}
        else {endGame('Empate!') ; i = 0 ; numPlay.textContent = 0 ; numPC.textContent = 0; sj = 0 ; sp = 0;}}

    else if (userChoice == compChoice) {escolhaPlayer.textContent = 'Você escolheu ' + userChoice + ' - Empate';
    escolhaPC.textContent = 'PC escolheu ' + compChoice + ' - Empate';  escolhaPlayer.style.backgroundColor = ' #a9a9a9'; escolhaPC.style.backgroundColor = ' #a9a9a9'}
    else if (userChoice == "Papel" && compChoice =="Pedra") {numPlay.textContent = ++sj; ganhador()}
    else if (userChoice == "Pedra" && compChoice =="Tesoura") {numPlay.textContent = ++sj; ganhador()}
    else if (userChoice =="Tesoura" && compChoice =="Papel"){numPlay.textContent = ++sj; ganhador()}
    else {numPC.textContent = ++sp; perdedor()}}

function ganhador() { escolhaPlayer.textContent = 'Você escolheu ' + userChoice + ' - Ganhou';
    escolhaPC.textContent = 'PC escolheu ' + compChoice + ' - Perdeu'; escolhaPlayer.style.backgroundColor = 'lightgreen'; escolhaPC.style.backgroundColor = '#ed2939' }

function perdedor() { escolhaPlayer.textContent = 'Você escolheu ' + userChoice + ' - Perdeu';
escolhaPC.textContent = 'PC escolheu ' + compChoice + ' - Ganhou'; escolhaPlayer.style.backgroundColor =  '#ed2939' ; escolhaPC.style.backgroundColor = 'lightgreen'}

function endGame(mensagi) {  main.style.display = 'none'; end.style.display = 'flex';
    let resultado = document.querySelector('.resultado'); resultado.textContent = `${sj} - ${sp}`;
    let message = document.querySelector('.message'); message.textContent = mensagi }


let end = document.querySelector(".end")
let main = document.querySelector(".main")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissor = document.querySelector(".scissor")
let escolhaPlayer = document.querySelector(".escolhaPlayer")
let escolhaPC = document.querySelector(".escolhaPC")
let i = 0
let numPlay = document.querySelector(".numPlay")
let numPC = document.querySelector(".numPC")
let sj = Number(numPlay.textContent); /* score do jogador */
let sp = Number(numPC.textContent); /* score do pc */
let userChoice = ''
let body = document.body

rock.addEventListener('click', (e) => {userChoice = "Pedra";random() ; i++ ; gameEngine()})

paper.addEventListener('click', (e) => {userChoice = "Papel" ;random() ; i++ ; gameEngine()})

scissor.addEventListener('click', (e) => {userChoice = "Tesoura" ; random() ; i++ ; gameEngine()})

end.addEventListener('click', (e) => {main.style.display = 'flex'; end.style.display = 'none'; escolhaPlayer.textContent = 'Você escolheu...'; escolhaPC.textContent = 'PC escolheu...'
 escolhaPlayer.style.backgroundColor = '#e5e5dc' ;  escolhaPC.style.backgroundColor = '#e5e5dc'})
