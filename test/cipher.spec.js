describe('cipher', () => { //describe a quién voy a testear, describe('operations')

      it('debería ser un objeto', () => { // qué voy a testear
        assert.equal(typeof cipher, 'object'); //es mi comparación
      });

      describe('cipher.encode', () => {

            it('debería ser una función', () => {
              assert.equal(typeof cipher.encode, 'function');
            });

            it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => { //test mayúsculas
              assert.equal(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33), "HIJKLMNOPQRSTUVWXYZABCDEFG")
            });
            it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => { // test minúsculas
              assert.equal(window.cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg")
            });
            // it('debería retornar ' !"#$%&'()*+,-./0123456789:;<=>?@' para " !"#$%&'()*+,-./0123456789:;<=>?@"
            //   con offset 33', ()=> { // test minúsculas
            //   assert.equal(window.cipher.encode(" !"#$%&'()*+,-./0123456789:;<=>?@", 33)," !"#$%&'()*+,-. / 0123456789: ; <= > ? @ ")
            //   });
            });

          describe('cipher.decode', () => {

            it('debería ser una función', () => {
              assert.equal(typeof cipher.decode, 'function');
            });

            it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
              assert.equal(window.cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG", 33), "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
            });
            it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
              assert.equal(window.cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33), "abcdefghijklmnopqrstuvwxyz")
            });
          });
        });