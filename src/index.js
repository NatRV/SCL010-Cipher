//**********LOGICA Y ORDEN PARA QUE FUNCIONE EN CONSOLA(sólo funciona en consola):
// let input = 'HOLA HOLA HOLA';
// let offSet= 1;
// let palabraCifrada = '';

// for (let i=0; i<input.length; i++){
//     let posicionInicialLetras = input[i].charCodeAt(0);
//     let posicionFInalLetras = (posicionInicialLetras - 65 + offSet)% 26 + 65;
//     let letraCifrada = String.fromCharCode(posicionFInalLetras);

//     palabraCifrada = palabraCifrada + letraCifrada;
// }
// console.log(palabraCifrada); //imprimir si funciona

//btn encriptar y que muestre en textarea
let btnEncode= document.getElementById('encodeM');
btnEncode.addEventListener('click', () => {
  document.getElementById('message_out').innerHTML = `El resultado es: ${"message_in"}`; // colocar variable *textocifrado*
})
//btn desencriptar y que muestre en textarea
let btnDecode= document.getElementById('decodeM');
btnDecode.addEventListener('click', () => {
  document.getElementById('message_out').innerHTML = `El resultado es: ${"message_in"}`; // colocar variable *textocifrado*
})
//función botón "enviar" mensaje, es un boton falso que mostrará otra pantalla
let btnSend = document.getElementById('sendMessage'); //declarar variable boton enviar
btnSend.addEventListener('click', () => {
  document.getElementById('scrnNotice').style.display = 'block';
  document.getElementById('scrnPrincipal').style.display = 'none';
})
//función botón "volver" mensaje, es un boton que llevará la pantalla de inicio
let btnBack = document.getElementById('toBack'); //declarar variable boton enviar
btnBack.addEventListener('click', () => {
  document.getElementById('scrnNotice').style.display = 'none';
  document.getElementById('scrnPrincipal').style.display = 'block';
})