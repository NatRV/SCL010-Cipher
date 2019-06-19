function showResultText() { // función para mostrar el resultado
  let messageIn = document.getElementById('message_in').value; // declarar variable de entrada de texto
  //console.log(messageIn);
  let offSet = document.getElementById('offSetLevel').value; // declarar variable de desplazamiento
  let showResult = cipher.encode(messageIn, parseInt(offSet)); // declarar variable donde llama a la función y sus parámetros
  document.getElementById('message_out').value = showResult; // realizar llamado para mostrar la función en textarea
}
const btnEncrypt= document.getElementById('encodeM'); // declarar const para llamar al boton encriptar
btnEncrypt.addEventListener('click', showResultText); // función click para mostrar resultado con el btn encriptar

//btn desencriptar
let btnDecode = document.getElementById('decodeM');
btnDecode.addEventListener('click', () => {
  document.getElementById('message_out').innerHTML = `El resultado es: ${"message_in"}`; // colocar variable *textodescifrado*
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


// let palabra cifrada
