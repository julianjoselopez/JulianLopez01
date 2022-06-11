/*
• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/

btnEnviar.addEventListener("click", () => {
  // declaracion de variables
  let resultado: boolean;

  // declaracion de la funcion
  function esMultiplo(num1: number, num2: number): boolean {
    if (num1 % num2 == 0) {
      resultado = true;
    } else {
      resultado = false;
    }
    return resultado;
  }

  //ingreso de datos
  let num1: number = Number(prompt("ingrese el primer numero"));
  let num2: number = Number(prompt("ingrese el segundo numero"));

  //obtencion del resultado
  esMultiplo(num1, num2);

  //se muestra el resultado por consola
  if (resultado == true) {
    console.log(num1 + " es multiplo de " + num2);
  } else {
    console.log(num1 + " NO es multiplo de " + num2);
  }
});
