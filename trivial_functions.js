// GetMinMax busca el minimo y maximo de un conjunto con un for loop lineal sencillo y escribe los resultados en el espacio indicado en el archivo de side.php
function GetMinMax(){
  numbers = [5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92];
  console.log("Given the array: " + numbers);
  max = 0;
  min = 0;

  for (i = 0; i < numbers.length; i++){
    if (numbers[i] < min || min == 0){
      min = numbers[i];
    }
    if (numbers[i] > max || max == 0){
      max = numbers[i];
    }
  }

  element = document.getElementById("JS1");
  element.innerHTML = "The max =  "+ max + "<br> The min = " + min;

}

// fact es la funcion estandar para usar recursividad al generar numeros factoriales
function fact(n){
    if (n <= 1){
        return 1;
    }
    return  n * fact(n-1);
}

// GetMinMax busca el producto y suma de los primeros 10 numeros naturales con un for loop lineal sencillo y escribe los resultados en el espacio indicado en el archivo de side.php
function Get10NN(){

  total = 0;
  prod = 1;
  for (i = 1; i < 11; i++){
    total += i;
    prod *= i;
  }

  element = document.getElementById("JS3");
  element.innerHTML = "The sum =  "+ total + "<br> The product = " + prod;
}


// getNfact usa el window object para recibir el URL, lo rompemos con el divisor de ? y como es solo una parametro, lo que esta despues del = ya es lo necesario, se convierte a entero e invocamos
// la funcion factorial y se escribe el resultado en el espacio indicado en el archivo de side.php
function getNfact(){
  let S = window.location.href;
  let paramString = S.split('?')[1];
  let val = paramString.split('=')[1];

  i = parseInt(val);

  let res = fact(i);

  element = document.getElementById("JS4");
  element.innerHTML = res;
}

// la funcion isPrime devuelve un C/F si un numero no es primo, hace el trabajo mas facil de leer

function isPrime(n) {

	if(n == 1 || n == 0) return false;

	for(var i = 2; i < n; i++){
		if(n % i == 0) return false;
	}

	return true;
}

// la funcion findPrime establece el range de los numeros a ser examinados, a cada uno se invoca la funcion isPrime, si es cierto, se agrega a un arreglo y se despliuega el resultado en el espacio indicado en el archivo de side.php
function findPrime(){
r = [];
var N = 20;

for(var i = 1; i <= N; i++) {
	if(isPrime(i)) {
		r.push(i);
	}
}

element = document.getElementById("JS2");
element.innerHTML = "[" + r + "]";


}
