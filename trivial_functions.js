
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

function fact(n){
    if (n <= 1){
        return 1;
    }
    return  n * fact(n-1);
}

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

function GMMPHP(){
  var htmlString="<?php echo $htmlString; ?>";
}

function getNfact(){
  let S = window.location.href;
  let paramString = S.split('?')[1];
  let val = paramString.split('=')[1];

  i = parseInt(val);

  let res = fact(i);

  element = document.getElementById("JS4");
  element.innerHTML = res;
}

function isPrime(n) {

	if(n == 1 || n == 0) return false;

	for(var i = 2; i < n; i++){
		if(n % i == 0) return false;
	}

	return true;
}

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
