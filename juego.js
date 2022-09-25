var nombre = prompt ('Bienvenido Humano. ¿Cómo te llamas?');
var min = 1;
var max = 100;
var intentos = 0
var numero = 22;

for (intentos; intentos < 7; intentos ++) {
    numero = parseInt(prompt(nombre+', estás aquí porque has solicitado escapar del Bucle Eterno en el que te encuentras. Para lograrlo, deberás adivinar en qué número estoy pensando. Prueba tu suerte ingresando números entre el '+min+' y el '+max+'. Pero te advierto... si no puedes lograrlo en el transcurso de 7 intentos, las puertas de salida se cerrarán P A R A  S I E M P R E ...' ));
  
    if (numero >= min && numero <= max) {
    if (numero < 22) {
        alert('Qué mal, el número en mi mente es más alto!')
    } else if(numero > 22) {
        alert('Ufff.. apuntaste demasiado alto, el número de mi mente es más bajo!');
    } else if(numero == 22) {
        break;
    }
   } else {
    alert('Jajajajaj ¿Acaso no has entendido? Debes ingresar un número entre '+min+' y '+max);
   }
}
if(numero == 22) {
    alert('¡Felicidades '+nombre+'!, has logrado escapar del Bucle Eterno en '+intentos+' intentos, puedes regresar a donde perteneces👽❤');
} else {
    alert('Agotaste el número de intentos, Humano. ¡Las puertas de escape se han cerrado!😈💀')
}


