/*
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
*/

btnEnviar.addEventListener("click", () => {
  // declaracion de variables
  let resultado: boolean;
  let divisores: number = 0;

  // declaracion de las funciones
  function esMultiplo(num1: number, num2: number): boolean {
    if (num1 % num2 == 0) {
      resultado = true;
    } else {
      resultado = false;
    }
    return resultado;
  }

  function cantidadDeDivisores(num1: number): number {
    for (let indice = 1; indice <= num1; indice++) {
      if (esMultiplo(num1, indice) == true) {
        divisores++;
      }
    }
    return divisores;
  }

  /*function cantidadDeDivisores(num1: number): number {
   for (let indice = 0; indice < num1; indice++) {
    if (esMultiplo(num1,indice) == true) {
      divisores ++
    }
  return divisores     
   }
   */

  //ingreso de datos
  let num1: number = Number(prompt("ingrese un numero"));
  //let num2: number = prompt("ingrese un numero");

  //obtencion del resultado
  cantidadDeDivisores(num1);
  
  //se muestra el resultado por consola
  console.log(num1 + " tiene " + divisores "divisores");
});
