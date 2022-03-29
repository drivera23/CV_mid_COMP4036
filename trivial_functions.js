function displayProblems(){
    document.body.innerHTML = " ";

    let cont = document.createElement("div");

    let title = document.createElement("h2");
    title.style.cssText = "text-align: center";
    title.appendChild(document.createTextNode("Problems using JavaScript and PHP"))

    let sub= document.createElement("h3");
    sub.style.cssText = "text-align: center";
    sub.appendChild(document.createTextNode("Check the console for the results!"))

    document.body.appendChild(title);
    document.body.appendChild(sub);

    // problems

    // problem 1
    let p_1 = document.createElement("div");
    p_1.setAttribute("class", "col-sm-12 text-center");
    let pr1 = document.createElement("h4");
    pr1.appendChild(document.createTextNode("Find the Max and Min of the set:"))
    pr1.style.cssText = "text-align: center";
    let ar1 = document.createElement("h4");
    ar1.appendChild(document.createTextNode("[5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92]"))
    ar1.style.cssText = "text-align: center";
    p_1.appendChild(pr1);
    p_1.appendChild(ar1);

    let p1js = document.createElement("button");
    p1js.setAttribute("class", "btn btn-primary btn-md center-block");
    p1js.innerHTML = "Solution with JS";
    p1js.style.cssText = "width: 200px; content-align: center; display: inline-block; vertical-align: top;";
    p1js.addEventListener("click", GetMinMax);
    let p1php = document.createElement("button");
    p1php.innerHTML = "Solution with PHP";
    p1php.setAttribute("class", "btn btn-danger btn-md center-block");
    p1php.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top;";

    p_1.appendChild(p1js);
    p_1.appendChild(p1php);

    cont.appendChild(p_1);

    let a_1 = document.createElement("div");
    a_1.setAttribute("class", "col-sm-12 text-center");
    let a1js = document.createElement("button");
    a1js.setAttribute("class", "btn btn-primary btn-md center-block");
    a1js.setAttribute("id", "JS1");
    a1js.innerHTML = "Solution...";
    a1js.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";
    let a1php = document.createElement("button");
    a1php.setAttribute("class", "btn btn-danger btn-md center-block");
    a1php.setAttribute("id", "PHP1");
    a1php.innerHTML = "Solution...";
    a1php.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";

    a_1.appendChild(a1js);
    a_1.appendChild(a1php);

    cont.appendChild(a_1);

    // problem 2

    let p_2 = document.createElement("div");
    p_2.setAttribute("class", "col-sm-12 text-center");
    let pr2 = document.createElement("h4");
    pr2.appendChild(document.createTextNode("Find N factorial!"))
    pr2.style.cssText = "text-align: center";
    p_2.appendChild(pr2);

    let p2js = document.createElement("button");
    p2js.setAttribute("class", "btn btn-primary btn-md center-block");
    p2js.innerHTML = "Solution with JS";
    p2js.style.cssText = "width: 200px; content-align: center; display: inline-block; vertical-align: top;";
    p2js.addEventListener("click", GetFact);
    let p2php = document.createElement("button");
    p2php.innerHTML = "Solution with PHP";
    p2php.setAttribute("class", "btn btn-danger btn-md center-block");
    p2php.style.cssText = "width: 200px; content-align: center; display: inline-block; vertical-align: top;";

    p_2.appendChild(p2js);
    p_2.appendChild(p2php);

    cont.appendChild(p_2);

    let a_2 = document.createElement("div");
    a_2.setAttribute("class", "col-sm-12 text-center");
    let a2js = document.createElement("button");
    a2js.setAttribute("class", "btn btn-primary btn-md center-block");
    a2js.setAttribute("id", "JS2");
    a2js.innerHTML = "Solution...";
    a2js.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";
    let a2php = document.createElement("button");
    a2php.setAttribute("class", "btn btn-danger btn-md center-block");
    a2php.setAttribute("id", "PHP2");
    a2php.innerHTML = "Solution...";
    a2php.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";

    a_2.appendChild(a2js);
    a_2.appendChild(a2php);

    cont.appendChild(a_2);

    // problem 3

    // problem 2

    let p_3 = document.createElement("div");
    p_3.setAttribute("class", "col-sm-12 text-center");
    let pr3 = document.createElement("h4");
    pr3.appendChild(document.createTextNode("Find the sum/product of the first 10 Natural Numbers!"))
    pr3.style.cssText = "text-align: center";
    p_3.appendChild(pr3);

    let p3js = document.createElement("button");
    p3js.setAttribute("class", "btn btn-primary btn-md center-block");
    p3js.innerHTML = "Solution with JS";
    p3js.style.cssText = "width: 200px; content-align: center; display: inline-block; vertical-align: top;";
    p3js.addEventListener("click", Get10NN);
    let p3php = document.createElement("button");
    p3php.innerHTML = "Solution with PHP";
    p3php.setAttribute("class", "btn btn-danger btn-md center-block");
    p3php.style.cssText = "width: 200px; content-align: center; display: inline-block; vertical-align: top;";

    p_3.appendChild(p3js);
    p_3.appendChild(p3php);

    cont.appendChild(p_3);

    let a_3 = document.createElement("div");
    a_3.setAttribute("class", "col-sm-12 text-center");
    let a3js = document.createElement("button");
    a3js.setAttribute("class", "btn btn-primary btn-md center-block");
    a3js.setAttribute("id", "JS3");
    a3js.innerHTML = "Solution...";
    a3js.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";
    let a3php = document.createElement("button");
    a3php.setAttribute("class", "btn btn-danger btn-md center-block");
    a3php.setAttribute("id", "PHP3");
    a3php.innerHTML = "Solution...";
    a3php.style.cssText = "width: 200px;content-align: center; display: inline-block; vertical-align: top; pointer-events:none";

    a_3.appendChild(a3js);
    a_3.appendChild(a3php);

    cont.appendChild(a_3);

    cont.style.cssText = "margin-top: 4%;"

    document.body.appendChild(cont)

}

function getURL(){
    var S = window.location.href;
    const urlParams = new URLSearchParams(S);
    const i = urlParams.get('product');
    console.log(i * i);
}


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
  console.log("The max = " + max);
  console.log("The min = " + min);
}

function GetFact(){
  n = 6;
  element = document.getElementById("JS2");
  element.innerHTML = n + " factorial is equal to: " + fact(n);
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
