<!-- Este documento contiene los programas de JS/PHP -->
<?php
  // GetMax recoge el valor maximo del arreglo usando un loop sencillo
  function GetMax(){
      $numbers = array(5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92);
      $maximum = 0;

      foreach($numbers as $vals){
        if($vals > $maximum or $maximum == 0){
          $maximum = $vals;
        }
      }

      return $maximum;
  }
  // GetMin recoge el valor minimo del arreglo usando un loop sencillo
  function GetMin(){
      $numbers = array(5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92);
      $minimum = 0;

      foreach($numbers as $vals){
        if($vals < $minimum or $minimum == 0){
          $minimum = $vals;
        }
      }

      return $minimum;
  }

  // GetSumNN devuelve la suma de los primeros 10 numeros naturales
  function GetSumNN(){
     $total = 0;
     for ($x = 0; $x <= 10; $x++) {
       $total += $x;
     }
     return $total;
  }

  // GetProdNN devuelve el producto de los primeros 10 numeros naturales
  function GetProdNN(){
     $total = 1;
     for ($x = 1; $x <= 10; $x++) {
       $total *= $x;
     }
     return $total;
  }

  // getPrime recoge los numeros primos entre [1,20], hace un loop entre cada candidato en dicho intervalo, devuelve un string con todos seguidos.
  function getPrime(){
      $count = 0;
      $num = 2;
      $st = "";
      while ($count < 8 ) {
          $div_count=0;
          for ( $i=1; $i<=$num; $i++){
              if (($num%$i)==0) {
                  $div_count++;
              }
          }
          if ($div_count<3)  {
              if ($count == 7){
                  $st .= $num;
              }
              else{
                  $st .= $num.",";
              }
              $count=$count+1;
          }
      $num=$num+1;
    	}
        return $st;
    }

  // En estas variables se asignan cada funcion para que JS las recoja y las presenta de manera bonita.
  $primes = getPrime();
  $sumNN = GetSumNN();
  $prodNN = GetProdNN();
  $ma = GetMax();
  $mi = GetMin();
 ?>


<!DOCTYPE html>
<html>
	<!-- libretos de estilismo y data -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.1/html2pdf.bundle.min.js"
     integrity= "sha512-vDKWohFHe2vkVWXHp3tKvIxxXg0pJxeid5eo+UjdjME3DBFBn2F8yWOE0XmiFcFbXxrEOR1JriWEno5Ckpn15A=="
     crossorigin="anonymous"> </script>

<!-- Estilismo basico -->
<head>
  <title>PHP/JS Programs</title>
</head>

<body style="background-color: #DFCFBE;">


<h1 style="text-align: center;">Problems using JavaScript and PHP </h1>

<div style="margin-top: 4%;">

  <!-- Problem 1 (Min/Max) : Se crea el titulo del problema detallando la premisa, junto a los dos botones indicando la solucion con su lenguaje especifico, cada boton tiene su funcion de evento -->
    <div class="col-sm-12 text-center">
        <h4 style="text-align: center "> Find the Max and Min of the set: </h4>
        <h4 style="text-align: center "> [5, 6, 8, 11, 16, 18, 26, 27, 29, 30, 31, 33, 34, 61, 70, 75, 79, 89, 90, 92] </h4>

        <button type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="GetMinMax()"> Solution with JS </button>

        <button type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="GetMinMaxPHP()"> Solution with PHP </button>
    </div>
    <div class="col-sm-12 text-center">

        <button id = "JS1" type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>

        <button id = "PHP1" type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>
    </div>
  <!-- Problem 1 -->

  <!-- Problem 2 (Prime Number) : Se crea el titulo del problema detallando la premisa, junto a los dos botones indicando la solucion con su lenguaje especifico, cada boton tiene su funcion de evento-->
    <div class="col-sm-12 text-center">
        <h4 style="text-align: center "> Find the prime numbers between [1,20] </h4>

        <button type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="findPrime()"> Solution with JS </button>

        <button type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="getPrime()"> Solution with PHP </button>
    </div>
    <div class="col-sm-12 text-center">

        <button id = "JS2" type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>

        <button id = "PHP2" type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>
    </div>
  <!-- Problem 2 -->

  <!-- Problem 3 (Sum/Product 10 Natural Numbers): Se crea el titulo del problema detallando la premisa, junto a los dos botones indicando la solucion con su lenguaje especifico, cada boton tiene su funcion de evento  -->
    <div class="col-sm-12 text-center">
        <h4 style="text-align: center "> Find the sum/product of the first 10 Natural Numbers! </h4>

        <button type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="Get10NN()"> Solution with JS </button>

        <button type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="GetNNPHP()"> Solution with PHP </button>
    </div>
    <div class="col-sm-12 text-center">

        <button id = "JS3" type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>

        <button id = "PHP3" type="button" class="btn btn-danger btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>
    </div>
  <!-- Problem 3 -->

  <!-- Problem 4 (N! passed by URL): Se crea el titulo del problema detallando la premisa, junto al boton indicando la solucion con su lenguaje especifico, el boton tiene su funcion de evento  -->
    <div class="col-sm-12 text-center">
        <h4 style="text-align: center "> Find N! (type at the end of the URL "?N=#", # being your number) </h4>

        <button type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top;" onclick="getNfact()"> Solution with JS </button>

    </div>
    <div class="col-sm-12 text-center">

        <button id = "JS4" type="button" class="btn btn-primary btn-md center-block"
        style="width: 200px; content-align: center; display: inline-block; vertical-align: top; pointer-events: none;"> Answer... </button>


    </div>
  <!-- Problem 4 -->


</div>



<!-- Seccion de libretos -->
<script type="text/javascript" src="cvscript.js"> </script>
<script type="text/javascript" src="trivial_functions.js"> </script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"> </script>
  <script type="text/javascript">

   // GetMinMaxPHP se encarga de recoger las variables establecidas originalmente en el codigo de PHP mas arriba qie corresponde al minimo y maximo de un conjunto y las escribe en el espacio indicado
     function GetMinMaxPHP(){
       let el = document.getElementById("PHP1");
       let ma = "<?php echo $ma ?>";
       let mi = "<?php echo $mi ?>";
       el.innerHTML = "The max = " + ma + "<br> The min = " + mi;
     }
	
  // GetNNPHP se encarga de recoger las variables establecidas originalmente en el codigo de PHP mas arriba que corresponden a los 10 numeros naturales y su suma/producto y las escribe en el espacio indicado

     function GetNNPHP(){
       let el = document.getElementById("PHP3");
       let sum = "<?php echo $sumNN ?>";
       let prod = "<?php echo $prodNN ?>";
       el.innerHTML = "The sum = " + sum + "<br> The product = " + prod;
     }

    // getPrime se encarga de recoger las variables establecidas originalmente en el codigo de PHP mas arriba que corresponde al problema de los Primos y las escribe en el espacio indicado


     function getPrime(){
       let el = document.getElementById("PHP2");
       let primes = "<?php echo $primes ?>";
       el.innerHTML = "[" + primes + "]";
     }


 </script>

<!-- <script src="src/html2pdf.js"></script>
<script src="https://unpkg.com/html-pdf-adaptive"></script> -->

</body>
</html>
