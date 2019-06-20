window.cipher = {
  encode: (messageIn, offSet) => {
    /* Acá va tu código */
    let message = messageIn;
    let encryptedText = '';
    for (let i = 0; i < message.length; i++) { // inicio, limite, incremento
      let inicialPositionL = message.charCodeAt(i);
      let finalPositionL = ''; //convertir a ascii
      if (inicialPositionL >= 65 && inicialPositionL <= 90) {
         finalPositionL = (inicialPositionL - 65 + offSet) % 26 + 65;
         encryptedText += String.fromCharCode(finalPositionL);
      }
      else if (inicialPositionL>= 97 && inicialPositionL <=122){
         finalPositionL = (inicialPositionL - 97 + offSet) % 26 + 97;
         encryptedText += String.fromCharCode(finalPositionL);
      }
      else if(inicialPositionL>= 32 && inicialPositionL<=64){
        finalPositionL = (inicialPositionL - 32 + offSet) % 33 + 32;
        encryptedText += String.fromCharCode(finalPositionL);
      }
    }
    return encryptedText;
  },
  decode: (messageIn, offSet) => {
    let message = messageIn;
    let encryptedText = '';
    for (let i = 0; i < message.length; i++) { // inicio, limite, incremento
      let inicialPositionL = message.charCodeAt(i);
      let finalPositionL = ''; //convertir a ascii
      if (inicialPositionL >= 65 && inicialPositionL <= 90) {
         finalPositionL = (inicialPositionL - 13 - offSet) % 26 + 65; // PREGUNTAR POR QUÉ ES 13 Y NO 65
         encryptedText += String.fromCharCode(finalPositionL);
      }
      else if (inicialPositionL>= 97 && inicialPositionL<=122){
         finalPositionL = (inicialPositionL - 45 - offSet) % 26 + 97; // preguntar por qué es 45
         encryptedText += String.fromCharCode(finalPositionL);
      }
      else if(inicialPositionL>= 32 && inicialPositionL<=64){
        finalPositionL = (inicialPositionL - 32 - offSet) % 33 + 32;
        encryptedText += String.fromCharCode(finalPositionL);
      }
    }
    return encryptedText;
  }
};