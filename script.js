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
let userChoice = prompt("Escolha entre Pedra, Papel ou Tesoura")
/*if (userChoice !== "Pedra" && userChoice !== "Papel" && userChoice !== "Tesoura") {alert("Não entendir")} 
}*/
let choices = ["Pedra","Papel","Tesoura"]
function random() {return choices[Math.floor(Math.random()*3)]}
let compChoice = random()
function game(userChoice,compChoice) {
    if (userChoice == compChoice) {alert ("Empate")}
    else if (userChoice == "Papel" && compChoice =="Pedra") {alert ("You win")}
    else if (userChoice == "Pedra" && compChoice =="Tesoura") {alert ("You win")}
    else if (userChoice =="Tesoura" && compChoice =="Papel"){alert ("You win")}
    else {alert ("You lose")}
game (userChoice,compChoice)
