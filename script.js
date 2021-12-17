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
    if (userChoice == compChoice) {alert ("Empate")}
    else if (userChoice == "Papel" && compChoice =="Pedra") {alert ("You win! " + userChoice + " beats " + compChoice)}
    else if (userChoice == "Pedra" && compChoice =="Tesoura") {alert ("You win! " + userChoice + " beats " + compChoice)}
    else if (userChoice =="Tesoura" && compChoice =="Papel"){alert  ("You win! " + userChoice + " beats " + compChoice)}
    else {alert ("You lose! " + compChoice + " beats " + userChoice)}}


function game() {
    input()
    if (userChoice == "Pedra" || userChoice == "Papel" || userChoice == "Tesoura") {random()
        gameEngine()}
    else {alert ("Isso non excsite")}
    }
