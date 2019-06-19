window.cipher = {
  encode: (messageIn, offSet) => {
    /* Acá va tu código */
    let message= '' + messageIn;
    let encryptedLetter = '';
    for (let i = 0; i < message.length; i++) { // inicio, limite, incremento
      let inicialPositionL= message.charCodeAt(i); //convertir a ascii
      let finalPositionL= (inicialPositionL - 65 + offSet) % 26 + 65; // aplicar formula y parseint para el offset
      let encryptedText= String.fromCharCode(finalPositionL); // convertir a letra
      // colocar acá las condicionales
      if(
  
      )
      encryptedLetter += String.fromCharCode(finalPositionL); // reasignar variable
    }
    return encryptedLetter;
  },
  decode: () => {
    /* Acá va tu código */
  }
};
