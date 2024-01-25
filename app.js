let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


function asignarTextoElemto(elemento, texto) {
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroUsuario));
    //console.log(numeroUsuario);
    //console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemto('p', `Numero Correcto, Acertase en ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //El usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemto('p', 'Cerca, el numero es Menor');
        }else{
            asignarTextoElemto('p', 'Cerca, el numero es Mayor');
        }
        intentos++;
        limpiarCaja();
    }

   
    alert('Click desde la funcion')
    console.log(intentos)
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    //si ya sorteamos todos los numeros secretos
    if (listaNumeroSorteados.length == numeroMaximo ) {
        asignarTextoElemto('p', 'Yae sortearon todos los numeros posibles')
    }else{
        // si el numero esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemto('h1', 'Juego del numero de secreto');
    asignarTextoElemto('p',  'Indica un numero del 1 al' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego() {
    //Limpiar caja juego
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    condicionesIniciales();
    // generar numero aleatorio    
    //Inicialiozar numero de intentos
    // desahibilitar el boton de nuevo juego   
    document.getElementById("reiniciar").setAttribute("disabled", "true"); 
}

condicionesIniciales();