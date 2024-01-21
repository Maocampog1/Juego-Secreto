let numeroSecreto = generarNumeroSecreto();
let intentos =  1;

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Digita un número del 1 - 10";

function asignarTextoElemento(elemento,texto){
    let textoElemento = document.querySelector(elemento);
    textoElemento.innerHTML = texto;
}


function verificarIntento() {
    let numeroUsuario =  parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    
    console.log(numeroUsuario);
   
    console.log(numeroSecreto ==  numeroUsuario); 
    if (numeroUsuario===numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos == 1) ? "vez" : "Veces "}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    
    }else {
        //el usurio no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento("p","El numero es menor");
        }else{
            asignarTextoElemento("p","El numero es mayor")
        }
        intentos++
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
     document.querySelector("#valorUsuario").value ="";
  
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}
asignarTextoElemento("h1","Adivina el Numero!");
asignarTextoElemento("p","Digita el numero del 1-10")
