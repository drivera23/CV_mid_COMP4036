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
    pr1.appendChild(document.createTextNode("Find the Max and Min of a set!"))
    pr1.style.cssText = "text-align: center";
    p_1.appendChild(pr1);

    let p1js = document.createElement("button");
    p1js.setAttribute("class", "btn btn-primary btn-md center-block");
    p1js.innerHTML = "Solution with JS";
    p1js.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";
    p1js.addEventListener("click", GetMinMax);
    let p1php = document.createElement("button");
    p1php.innerHTML = "Solution with PHP";
    p1php.setAttribute("class", "btn btn-danger btn-md center-block");
    p1php.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";

    p_1.appendChild(p1js);
    p_1.appendChild(p1php);

    cont.appendChild(p_1);

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
    p2js.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";
    p2js.addEventListener("click", GetFact);
    let p2php = document.createElement("button");
    p2php.innerHTML = "Solution with PHP";
    p2php.setAttribute("class", "btn btn-danger btn-md center-block");
    p2php.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";

    p_2.appendChild(p2js);
    p_2.appendChild(p2php);

    cont.appendChild(p_2);

    // problem 3

    // let p_2 = document.createElement("div");
    // p_2.setAttribute("class", "col-sm-12 text-center");
    // let pr2 = document.createElement("h4");
    // pr2.appendChild(document.createTextNode("Find N factorial!"))
    // pr2.style.cssText = "text-align: center";
    // p_2.appendChild(pr2);
    //
    // let p2js = document.createElement("button");
    // p2js.setAttribute("class", "btn btn-primary btn-md center-block");
    // p2js.innerHTML = "Solution with JS";
    // p2js.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";
    // let p2php = document.createElement("button");
    // p2php.innerHTML = "Solution with PHP";
    // p2php.setAttribute("class", "btn btn-danger btn-md center-block");
    // p2php.style.cssText = "content-align: center; display: inline-block; vertical-align: top;";
    //
    // p_2.appendChild(p2js);
    // p_2.appendChild(p2php);
    //
    // cont.appendChild(p_2);

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

  console.log("The max = " + max);
  console.log("The min = " + min);
}

function GetFact(){
  n = 6;
  console.log(n + " factorial is equal to: " + fact(n));
}

function fact(n){
    if (n <= 1){
        return 1;
    }
    return  n * fact(n-1);
}
