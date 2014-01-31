var assert = chai.assert;

suite( 'temperatura', function(){
  
  test('32F=0C', function(){
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