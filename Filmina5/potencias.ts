/*
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos. 
*/

btnEnviar.addEventListener("click", () => {
  // declaracion de variables
  let base: number;
  let exponente: number;
  let resultado: number = 1;

  // declaracion de la funcion
  function calcularPotencia(base: number, exponente: number): number {
    for (let index = 1; index <= exponente; index++) {
      resultado = resultado * base;
    }
    return resultado;
  }

  //ingreso de datos
  base = Number(prompt("Ingrese un número"));
  exponente = Number(prompt("Ingrese un número"));

  if (exponente < 0) {
    exponente = Number(
      prompt("ingrese un numero mayor o igual a cero como exponente")
    );
  }
  //obtencion del resultado
  calcularPotencia(base, exponente);

  //se muestra el resultado por consola
  console.log("el resultado es " + resultado);
});
