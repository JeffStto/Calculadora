// variables necesarias para calculos aritmeticos
var operandoa
var operandob
var operacion
var resultado

// funcion
function init(){

     // definicion de variable para almacenar eventos de click operadores
     var resultado = document.getElementById('resultado');

     // definicion de variables botonera
     var reset = document.getElementById('reset');
     var suma = document.getElementById('suma');
     var resta = document.getElementById('resta');
     var multiplicacion = document.getElementById('multiplicacion');
     var division = document.getElementById('division');
     var igual = document.getElementById('igual');
     var uno = document.getElementById('uno');
     var dos = document.getElementById('dos');
     var tres = document.getElementById('tres');
     var cuatro = document.getElementById('cuatro');
     var cinco = document.getElementById('cinco');
     var seis = document.getElementById('seis');
     var siete = document.getElementById('siete');
     var ocho = document.getElementById('ocho');
     var nueve = document.getElementById('nueve');
     var cero = document.getElementById('cero');


     //Eventos de click

     // 1
     uno.onclick = function (e){
          resultado.textContent = resultado.textContent + "1";
     // 2
     }
     dos.onclick = function (e){
          resultado.textContent = resultado.textContent + "2";
     // 3
     }
     tres.onclick = function (e){
          resultado.textContent = resultado.textContent + "3";
     // 4
     }
     cuatro.onclick = function (e){
          resultado.textContent = resultado.textContent + "4";
     // 5
     }
     cinco.onclick = function (e){
          resultado.textContent = resultado.textContent + "5";
     // 6
     }
     seis.onclick = function (e){
          resultado.textContent = resultado.textContent + "6";
     // 7
     }
     siete.onclick = function (e){
          resultado.textContent = resultado.textContent + "7";
     // 8
     }
     ocho.onclick = function (e){
          resultado.textContent = resultado.textContent + "8";
     // 9
     }
     nueve.onclick = function (e){
          resultado.textContent = resultado.textContent + "9";
     // 0
     }
     cero.onclick = function (e){
          resultado.textContent = resultado.textContent + "0";

     // C
     }
     reset.onclick = function (e){
          Resetear();


     // +
     }
     suma.onclick = function (e){
          operandoa = resultado.textContent;
          operacion = "+";
          limpiar();
     // -
     }
     resta.onclick = function (e){
          operandoa = resultado.textContent;
          operacion = "-";
          limpiar();
     // *
     }
     multiplicacion.onclick = function (e){
          operandoa = resultado.textContent;
          operacion = "*";
          limpiar();
     // /
     }
     division.onclick = function (e){
          operandoa = resultado.textContent;
          operacion = "/";
          limpiar();
     // =
     }
     igual.onclick = function (e){
          operandob = resultado.textContent;
          resolver();
     }



     // funcion resetear tablero
     function Resetear(){
          resultado.textContent = "";
          operandoa = 0;
          operandob = 0;
          operacion = "";
     }


     // funcion limpiar tablero
     function limpiar(){
          resultado.textContent = "";
     }



     //  bucle operaciones aritmeticas
     function resolver(){
          var res = res;
          switch(operacion){
               case "+":
                    res = parseFloat(operandoa) + parseFloat(operandob);
                    break;

               case "-":
                    res = parseFloat(operandoa) - parseFloat(operandob);
                    break;

               case "*":
                    res = parseFloat(operandoa) * parseFloat(operandob);
                    break;

               case "/":
                    if(operandob == 0) {
                         alert ("no se puede dividir entre cero");
                    } else {
                         res = parseFloat(operandoa) / parseFloat(operandob);
                    }
                    break;
          }

      Resetear();
      resultado.textContent = res;
     }


}