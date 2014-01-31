"use strict"; // Comprobar el codigo de forma mas estricta.
function calculate() {
  var result;
  var element = document.getElementById("entrada");
  var temp = element.value;
  var regexp = /([+-]?\d+(?:\.\d*)?)\s*([FfCc])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    //el elmento m[0] equivale a la cadena completa
     var num = m[1]; //numero
     var type = m[2]; //F o C
     num = parseFloat(num);
     if (type == 'c' || type == 'C'){
       result = (num * (9/5)) + 32;
       result = result.toFixed(1) + "F"; //acotar resultado to fixed
     }
     else {
       result = (num -32) * (5/9);
       result = result.toFixed(1) + "C"; //acotar resultado to fixed
     }
     salida.innerHTML = result;
  }
  else {
    salida.innerHTML = "FAIL! Intentalo con algo como '-32.4F'";
  }
}//end Funtion
  