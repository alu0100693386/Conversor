//Autor: Cristian Luis Hdez
//Proyecto: Practica 0: PL


var assert = chai.assert; //la variable assert contiene los asertos que se pueden realizar

suite( 'temperatura', function(){  //Suite equivale al describle en RAKE
  
  test('32F=0C', function(){  //test equivale a it en RAKE
    entrada.value="32F";
    calculate();
    assert.deepEqual(salida.innerHTML, "0.0C");
  });
  
  test('45C = 113.0 F', function(){
    entrada.value= "45C";
    calculate();
    assert.deepEqual(salida.innerHTML, "113.0F");
  });
  
  test('5X = Error', function(){
    entrada.value="5X";
    calculate();
    assert.match(salida.innerHTML, /FAIL/);
  });
});