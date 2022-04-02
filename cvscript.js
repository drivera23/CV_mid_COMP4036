// Este documento contiene todas las clases que facilitan el desarrollo del CV
class ProfTitle{ // Prof title asume el rol de recoger el titulo del usuario y su breve objetivo.
    title;
    objective;
    interests = []; // debido a que los intereses son secundarios, no se incluyen en el constructor
    constructor(title, obj){
        this.title = title;
        this.objective = obj;
    }
    // el metodo ayuda ingresar mas interes.
    add_interest(inte){this.interests.push(inte);}

    // este metodo es ayudante del de to_HTML, provee un estilismo de parrafo para despliegar los resultados 
    display_interest(tag){
      let text = "My interests include: ";
      for (let i = 0; i < this.interests.length; i++) {
          if (i == this.interests.length -1){
            text += "and " + this.interests[i]
          }
          else {
            text += this.interests[i] + ", ";
          }
      }
      tag.appendChild(document.createTextNode(text));
      return;
    }

    // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
	// llama al cuerpo del documento y lo coloca en el mismo
    to_HTML(){
      var tag = document.createElement("p");

      var c = document.createElement("p");
      c.appendChild(document.createTextNode("Im a(n) " + this.title + " and " + this.objective));
      c.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
      tag.appendChild(c);
      //tag.style.cssText = 'margin-left: 25% width: 50%;';

      var pi = document.createElement("p");
      this.display_interest(pi);
      pi.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
      tag.appendChild(pi);
      tag.style.cssText = 'margin-left: 25% width: 50%;';

      tag.setAttribute("name", "Summary");

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }


}

// la clase Recognition no tiene constructor, solamente agrega los recognitions a dos arreglos, uno del año, y uno del nombre del reconocimiento y 
// tambien los despliega.
class Recognition{
  recog = [];
  years = [];

  add_task(recog, year){ // se agrega un recognition dado
    this.recog.push(recog);
    this.years.push(year);
  }

  display_task(tag, type){ // se escribe un formato de año | reconocimiento como tipo lista.
    for (let i = 0; i < this.recog.length; i++) {
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.years[i] + " | " + this.recog[i]))
        tag.appendChild(item)
    }
    return;
  }

  // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
  // llama al cuerpo del documento y lo coloca en el mismo
  to_HTML(){
    var tag = document.createElement("p");

    tag.style.cssText = 'margin-left: 25% width: 50%;';
    var ul = document.createElement("ul");
    this.display_task(ul, 'li');
    ul.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
    tag.appendChild(ul);

    tag.setAttribute("name", "Recognitions");

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }
}

// la clase Courses y parecida a Recognition no tiene constructor, solamente agrega los courses a dos arreglos, uno del coursename, y uno del codigo del 
// course y tambien los despliega.
class Courses{
  courses = [];
  coursecode = [];

  add_course(code, course){ // se agrega un course dado
    this.coursecode.push(code);
    this.courses.push(course);
  }

  display_task(tag, type){
    for (let i = 0; i < this.courses.length; i++) { // se escribe un formato de coursecode : coursename como tipo lista.
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.coursecode[i] + ": " + this.courses[i]))
        tag.appendChild(item)
    }
    return;
  }

  // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
  // llama al cuerpo del documento y lo coloca en el mismo
  to_HTML(){
    var tag = document.createElement("p");

    tag.style.cssText = 'margin-left: 25% width: 50%;';
    var ul = document.createElement("ul");
    this.display_task(ul, 'li');
    ul.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
    tag.appendChild(ul);

    tag.setAttribute("name", "Courses");

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }

}

// la clase Contact tiene como variables email y number (telefono). Como constructor recibe el email y number, y tiene el metodo de despliegue 
class Contact{
  email; number;
  constructor(em, num){
    this.email = em;
    this.number = num;
  }
  // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
  // llama al cuerpo del documento y lo coloca en el mismo
  to_HTML(){
    var tag = document.createElement("h4");
    tag.appendChild(document.createTextNode(this.email + " | " + this.number))
    tag.style.cssText = "text-align:center;";

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }
}


class StyleHeader{
    section_header;
    constructor(section){
      this.section_header = section;
    }

    // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
    // llama al cuerpo del documento y lo coloca en el mismo
    to_HTML(){

      var div = document.createElement("p");
      var tag = document.createElement("h3");
      tag.appendChild(document.createTextNode(this.section_header))
      tag.setAttribute("id", this.section_header);
      tag.style.cssText = "margin-left:25%;";

      var line = document.createElement("hr")
      line.style.cssText = "height: 2px; background-color: #000000; border: none; width:55%;";

      div.appendChild(tag);
      div.appendChild(line);

      div.setAttribute("name", this.section_header);

      var element = document.getElementById("CV");
      element.appendChild(div);
    }
}

// la clase Name le da el primer elemento al CV. Con su constructor recibe el nombre completo de la persona.
class Name{
  name;
  constructor(FN){
      this.name = FN;
  }

  // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
  // llama al cuerpo del documento y lo coloca en el mismo

  to_HTML(){
    var tag = document.createElement("h2");
    tag.appendChild(document.createTextNode(this.name))
    tag.style.cssText = "text-align: center";

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }

}

// la clase Education tiene como variables: name (college Name), grad_year, city (college location), state, degree_type (MS, BS, PhD), GPA
// concentration (CS, Math, English, etc.). Las mismas son pasadas por el constructor.
class Education{
    name;
    grad_year;
    city;
    state;
    degree_type;
    gpa;
    concentration;
    constructor(name, grad_year, city, state, degree_type, concentration, gpa){
        this.name = name;
        this.grad_year = grad_year;
        this.city = city;
        this.state = state;
        this.degree_type = degree_type;
        this.concentration = concentration;
        this.gpa = gpa;
    }

   // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
   // llama al cuerpo del documento y lo coloca en el mismo

    to_HTML(){
      var tag = document.createElement("p");

      var titletagC = document.createElement("h4")
      titletagC.style.cssText = 'margin-left: 25%;';
      titletagC.appendChild(document.createTextNode(this.grad_year + " | " + this.name + ", " + this.city + ", " + this.state  ))
      tag.appendChild(titletagC)

      var titletagR = document.createElement("p")
      titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%; font-size:large';
      titletagR.appendChild(document.createTextNode(this.degree_type + " in " + this.concentration))
      tag.appendChild(titletagR);

      var titletagE = document.createElement("p")
      titletagE.style.cssText = 'margin-top: 1%; margin-left: 25%; font-size:large';
      titletagE.appendChild(document.createTextNode("GPA: " + this.gpa + "/4.00"))
      tag.appendChild(titletagE);

      tag.style.cssText = 'margin-left: 25% width: 50%;';
      tag.setAttribute("name", "Education");

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }
}

// la clase Skills es bien parecida a recognitions y courses. Tiene una variable que representa el tipo de skill (Language, Programming, Analysis, etc), 
// y los almacena en un arreglo.
class Skills{
  type;
  skills = []
  constructor(type){this.type = type;}

  add_task(task){this.skills.push(task);} // recibe un skill y lo almacena en el arreglo.


  display_task(tag, type){ // se escribe un formato de tipo: skill, skill, etc.
    let text = "";
    for (let i = 0; i < this.skills.length; i++) {
        if (i == this.skills.length -1){
          text += this.skills[i]
        }
        else {
          text += this.skills[i] + ", ";
        }
    }
    var item = document.createElement(type);
    item.appendChild(document.createTextNode(text));
    tag.appendChild(item);
    return;
  }
   // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
   // llama al cuerpo del documento y lo coloca en el mismo


  to_HTML(){
    var tag = document.createElement("p");

    var titletagC = document.createElement("h4")
    titletagC.style.cssText = 'margin-left: 25%;';
    titletagC.appendChild(document.createTextNode(this.type + ": "))
    tag.appendChild(titletagC)

    var titletagR = document.createElement("p")
    titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%;';
    // titletagR.appendChild(document.createTextNode(this.yea))
    tag.appendChild(titletagR)

    tag.style.cssText = 'margin-left: 25% width: 50%;';
    var ul = document.createElement("ul");
    this.display_task(ul, 'li');
    ul.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
    tag.appendChild(ul);

    tag.setAttribute("name", "Skills");

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }

}

// la clase Language hereda los atributos de Skills. Ya que Language es un tipo de Skill
class Language extends Skills{
    constructor(type){
      super(type);
    }
}


// La clase de WorkExperience tiene como variables al nombre de la compañîa/institución, el año del trabajo y el rol. Junto a estas hay un arreglo de
// eventos/responsabilidades que se llevaron a cabo. companía, rol y año se pasa por el constructor, y la función add_task agrega los eventos
class WorkExperience{
    company;
    year;
    role;
    tasks = [];

    constructor(company, year, role){
        this.company = company;
        this.year = year;
        this.role = role;
    }

    add_task(task){this.tasks.push(task);} // se agrega evento al arreglo

    display_task(tag, type){ // se escribe un formato lista con cada task.
      for (let i = 0; i < this.tasks.length; i++) {
          var item = document.createElement(type);
          item.appendChild(document.createTextNode(this.tasks[i]))
          tag.appendChild(item)
      }
      return;
    }

    // este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
    // llama al cuerpo del documento y lo coloca en el mismo

    to_HTML(){ // se crea el header, date, y objetivos
      var tag = document.createElement("p");

      var titletagC = document.createElement("h4")
      titletagC.style.cssText = 'margin-left: 25%;';
      titletagC.appendChild(document.createTextNode(this.year + " | " + this.role + " @ " + this.company ))
      tag.appendChild(titletagC)

      tag.style.cssText = 'margin-left: 25% width: 50%;';
      var ul = document.createElement("ul");
      this.display_task(ul, 'li');
      ul.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
      tag.appendChild(ul)

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }

}

// La clase de Projects es bien parecida a la de WorkExperience. tiene como variables el año del trabajo y el titulo del trabajo. Junto a estas hay un arreglo de
// eventos/responsabilidades que se llevaron a cabo. año y titulo se pasa por el constructor, y la función add_task agrega los eventos
class Projects{
  year;
  title;
  tasks = [];
  constructor(year, title) {
    this.year = year;
    this.title = title;
  }

  add_task(task){this.tasks.push(task);} // se agrega evento al arreglo

  display_task(tag, type){
    for (let i = 0; i < this.tasks.length; i++) { // se escribe un formato lista con cada task.
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.tasks[i]))
        tag.appendChild(item)
    }
    return;
  }

// este metodo es el corazon. Crea un parrafo que contiene toda la informacion de la clase, y luego 
  // llama al cuerpo del documento y lo coloca en el mismo

  to_HTML(){
    var tag = document.createElement("p");

    var titletagC = document.createElement("h4")
    titletagC.style.cssText = 'margin-left: 25%;';
    titletagC.appendChild(document.createTextNode(this.year + " | " + this.title ))
    tag.appendChild(titletagC)

    tag.style.cssText = 'margin-left: 25% width: 50%;';
    var ul = document.createElement("ul");
    this.display_task(ul, 'li');
    ul.style.cssText = 'font-size: large; margin-left: 25%; margin-right: 25%;';
    tag.appendChild(ul)

    tag.setAttribute("name","Projects")

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }


}


// CurVi es la clase principal que constituye la generacion del CV. Su contructor recibe el valor de un arreglo, y dada una clave con cada punto de valor, 
// lo corre por su menu de decisiones y crea el objeto que le corresponde. Debido a su poder, la informacion de data se va creando y luego guardando entre
// los diccionarios dict_headers y dict_vals. dict_headers contiene el nombre de todas las secciones, junto a su valor, inicialmente en 1. A la que se vaya
// recogiendo la informacion, su valor en el diccionario se actualiza, con el proposito de reducir redundancias. dict_vals tiene como valor inicial un arreglo
// vacio, y a la que la informacion se procesa, se va almacenando objetos en dicho arreglo, con el proposito de hacer el despliegue de manera organizada.
class CurVi{

    dict_headers = {"Name": 1,"Contact": 1,"Summary": 1,"Education":1
    ,"Professional Experiences": 1,"Projects": 1,"Skills":1,"Recognitions":1
    ,"Courses":1}
    dict_vals = {"Name": [],"Contact": [],"Summary": [],"Education": []
    ,"Professional Experiences": [],"Projects": [],"Skills":[],"Recognitions":[]
    ,"Courses":[]}

    data;

// setHeader tiene como proposito recibir data y verificar si el titulo de dicha seccion a existe. Si existe, no se hace nada, pero si no existe, se inicializa
// el objeto y se almacena el mismo en el diccionario de titulares. 
    setHeader(data){
      var testData = this.dict_headers[data[0]];
      if (1 > 0){
          if (testData != 1) {console.log("cool");}
          else {
            let title = new StyleHeader(data[0]);
            //title.to_HTML();
            this.dict_headers[data[0]] = title;
          }
      }
    }

// como mencionado previamente, el constructor del CV es la data que vaya a recoger y demostrar. 
    constructor(data){this.data = data;}


    title(data){
      let cv = new Name(data[1]);
      this.dict_headers[data[0]] = cv;
    }

    contact(data){
      let contact = new Contact(data[1], data[2]);
      this.dict_headers[data[0]] = contact;
    }

    summary(data){
      this.setHeader(data);
      let summ = new ProfTitle(data[1], data[2]);
      for (var i = 3; i < data.length; i++) {
          summ.add_interest(data[i]);
      }
      this.dict_vals[data[0]].push(summ);
    }

    project(data){
      this.setHeader(data);
      let proj = new Projects(data[1], data[2]);
      for (var i = 3; i < data.length; i++) {
          proj.add_task(data[i]);
      }
      this.dict_vals[data[0]].push(proj);
    }

    courses(data){
      this.setHeader(data);
      let co = new Courses();
      co.add_course(data[1], data[2]);
      this.dict_vals[data[0]].push(co);
    }
    //
    skills(data){
      this.setHeader(data);
      let skobj = new Skills(data[1]);
      for (var i = 2; i < data.length; i++) {
          skobj.add_task(data[i]);
      }
      this.dict_vals[data[0]].push(skobj);
    }
    //
    recog(data){
      this.setHeader(data);
      let rec = new Recognition();
      rec.add_task(data[2], data[1]);
      this.dict_vals[data[0]].push(rec);
    }
    //
    workex(data){
      this.setHeader(data);
      let obj = new WorkExperience(data[1], data[2], data[3]);
      for (var i = 4; i < data.length; i++) {
          obj.add_task(data[i]);
      }
      this.dict_vals[data[0]].push(obj);
    }
    //
    education(data){
      this.setHeader(data);
      let objEd = new Education(data[1], data[2], data[3], data[4], data[5], data[6], data[7]);
      //objEd.to_HTML();
      this.dict_vals[data[0]].push(objEd);
    }
// La siguiente funcion de addCV se encarga de de recoger la data entregada y genera la cascada de decisiones. Cada punto de data va a una funcion especifica.
    addCV(){
        for (var i = 0; i < this.data.length; i++) {
              if (this.data[i].length == 1) {
                  continue;
              }
              else {
                  if (this.data[i][0] == "Name") {
                      this.title(this.data[i]);
                  }
                  if (this.data[i][0] == "Contact") {
                      this.contact(this.data[i]);
                  }
                  if (this.data[i][0] == "Summary") {
                      this.summary(this.data[i]);
                  }
                  if (this.data[i][0] == "Education") {
                      this.education(this.data[i]);
                  }
                  if (this.data[i][0] == "Professional Experiences") {
                      this.workex(this.data[i]);
                  }
                  if (this.data[i][0] == "Projects") {
                      this.project(this.data[i]);
                  }
                  if (this.data[i][0] == "Skills") {
                      this.skills(this.data[i]);
                  }
                  if (this.data[i][0] == "Recognitions") {
                      this.recog(this.data[i]);
                  }
                  if (this.data[i][0] == "Courses") {
                      this.courses(this.data[i]);
                  }
                }
            }

    }

// displayCV se asegura de vaciar el contendio de la pagina. Procede a establecer el boton de descarga y crea el div principal
// donde se carga toda la informacion. 

    displayCV(){
      document.body.innerHTML = " ";
      let cvDiv = document.createElement("button");
      cvDiv.setAttribute("class", "btn btn-primary btn-md center-block")
      cvDiv.setAttribute("id", "generatePDF")
      cvDiv.style.cssText = 'margin-top: 15px; display: block';
      cvDiv.innerHTML = "Download CV!";

      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "CV");
      document.body.appendChild(cvDiv);
   //   document.body.appendChild(resDiv);
      document.body.appendChild(newDiv);

// el siguiente loop corre por los titulares del diccionario. Si ve que existe un objeto, lo despliega. Luego usa esa misma llave
// para recorrer el arreglo de objetos, para cada uno, tambien lo despliega en la pantalla. Finalmente ofrece el evento del boton
// establecido para descargar el PDF.
      for (var key in this.dict_headers) {
          var objHeader = this.dict_headers[key];
          if (objHeader == 1){
            continue;
          }
          else{
              objHeader.to_HTML()
              for (var i = 0; i < this.dict_vals[key].length; i++) {
                  var objCont = this.dict_vals[key][i];
                  objCont.to_HTML();
              }
          }
      }
       cvDiv.addEventListener("click", generatePDF);
    }
}

// esta funcion usa el framework de HMTL2PDF para generar el mismo
function generatePDF() {
    var element = document.getElementById('CV');
    html2pdf(element);
}

// Esta funcion es la que es llamada por la funcion getData() del archivo .php, recibe el arreglo 2D, y primero le limpia las doble comillas innecesarias.
// Al acabar con la limepieza, crea el objeto CV y le da la señal para add y display.
function createCV(data){
    for (let i = 0; i < data.length; i++){
      for (var j = 0; j < data[i].length; j++) {
          data[i][j] = data[i][j].replace(/['"]+/g, '');
      }
    }

      cv = new CurVi(data);
      cv.addCV();
      cv.displayCV();
}
