/*Acá va tu código*/

//charCodeAt(6);
//String.fromCharCode(65,66,67)
//console.log(String.charCodeAt(76));
//
//
//
//
//window.onload es decirle a la página que cuando cargue desencadeneaón
//metodoaddeventlistener(nuevo en html5)
//let name = "Marcia";
// name.lenght

// let nameSeparado = name.split ("");
// nameSeparado

// nameSeparado.toUpperCase();
// //
// const btnSave =document.getElementById ("save"); //porque siempre va a ser boton, guardar botn en una variable
// //console.log(btnSave) , para verificar sihay error en la consola

// //llamar a mi funcion con el escuchador (forma1)
// btnSave.addEventListener("click", () => { //Función del botón click, luego del click, colocar lo que yo quiero que pase
//     //colocar getelement
// })


// //llamar a mi funcion con el escuchador (forma2)
// function hello (){ //forma dellamar funcion1
//     alert("hola")
// }
// btnSave.addEventListener("click", hello);

// //otra forma de declarar funcion
// const btnSave = document.getElementById
// ("save");
// btnSave.addEventListener("click", hello);

// btnSave.addEventListener("click", ()=> {
//     let saveName = document.getElementById
//     ("name").value;
//     //console.log(saveName);
//     let nameMayuscula = saveName.toUpperCase ();
//     //console.log(nameMayuscula);
// for(let i = 0; i < nameMayuscula.length; i++)    //la i es el índice, length es para recorrer toda la longitus
// console.log(nameMayuscula [i]);
// })
let btnCode = document.getElementById('encrypt'); // se declara la variable del botón
//console.log("encrypt"); // probar con consola


//función botón "enviar" mensaje, es un boton falso que mostrará un aviso
//function sendMssge(){
//    document.getElementById('scrnNotice').style.display= 'block';
//    document.getElementById('scrnPrincipal').style.display= 'none';
//también ocultar title, h1,h2/ agregar divs
//}

let btnSend = document.getElementById('sendMessage'); //declarar variable boton enviar
btnSend.addEventListener('click', () => {
  document.getElementById('scrnNotice').style.display = 'block';
  document.getElementById('scrnPrincipal').style.display = 'none';
})
