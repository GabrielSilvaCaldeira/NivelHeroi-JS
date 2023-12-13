let nomeHeroi = "SuperPato"//entrada de variável
let nivelHeroi = "11000"

//condicional com operações e valores lógicos 
if(nivelHeroi <= 1000){ 
    nivel = "Ferro!"
} 
else if (nivelHeroi > 1001  && nivelHeroi <= 2000){
    nivel = "Bronze!"
}
else if (nivelHeroi > 2001 && nivelHeroi <= 3000){
    nivel = "Prata!"
}
else if (nivelHeroi > 3001 && nivelHeroi <= 4000){
    nivel = "Ouro!"
}
else if (nivelHeroi > 5001 && nivelHeroi <= 6000){
    nivel = "Platina!"
}
else if (nivelHeroi > 6001 && nivelHeroi <= 7001){
    nivel = "Rubi!"
}
else if (nivelHeroi > 8001 && nivelHeroi <= 9000){
    nivel = "Diamante!"
}
else if (nivelHeroi > 9001 && nivelHeroi <= 10000){
    nivel = "Mestre!"
}
else nivel= "Challenger!"

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi
+ " Seu nível é: " + nivel)