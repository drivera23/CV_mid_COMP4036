
class ProfTitle{
    title;
    objective;
    interests = [];
    constructor(title, obj){
        this.title = title;
        this.objective = obj;
    }

    add_interest(inte){this.interests.push(inte);}

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

class Recognition{
  recog = [];
  years = [];

  add_task(recog, year){
    this.recog.push(recog);
    this.years.push(year);
  }

  display_task(tag, type){
    for (let i = 0; i < this.recog.length; i++) {
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.years[i] + " | " + this.recog[i]))
        tag.appendChild(item)
    }
    return;
  }

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

class Courses{
  courses = [];
  coursecode = [];

  add_course(code, course){
    this.coursecode.push(code);
    this.courses.push(course);
  }

  display_task(tag, type){
    for (let i = 0; i < this.courses.length; i++) {
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.coursecode[i] + ": " + this.courses[i]))
        tag.appendChild(item)
    }
    return;
  }

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

class Contact{
  email; number;
  constructor(em, num){
    this.email = em;
    this.number = num;
  }

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

    to_HTML(){

      var div = document.createElement("p");
      var tag = document.createElement("h3");
      tag.appendChild(document.createTextNode(this.section_header))
      tag.setAttribute("id", this.section_header);
      tag.style.cssText = "margin-left:25%;";

      // let resDiv = document.createElement("button");
      // resDiv.setAttribute("class", "btn btn-danger btn-md center-block")
      // resDiv.setAttribute("id", "generatePDF")
      // resDiv.style.cssText = 'margin-left:20%;';
      // resDiv.innerHTML = "Add to Resume!";

      //tag.appendChild(resDiv)


      var line = document.createElement("hr")
      line.style.cssText = "height: 2px; background-color: #000000; border: none; width:55%;";

      div.appendChild(tag);
      div.appendChild(line);

      div.setAttribute("name", this.section_header);

      var element = document.getElementById("CV");
      element.appendChild(div);
    }
}

class CV{
  name;
  constructor(FN){
      this.name = FN;
  }

  to_HTML(){
    var tag = document.createElement("h2");
    tag.appendChild(document.createTextNode(this.name))
    tag.style.cssText = "text-align: center";

    var element = document.getElementById("CV");
    element.appendChild(tag);
  }

}

class Education{
    name;
    grad_year;
    city;
    state;
    degree_type;
    GPA;
    concentration;
    constructor(name, grad_year, city, state, degree_type, concentration, GPA){
        this.name = name;
        this.grad_year = grad_year;
        this.city = city;
        this.state = state;
        this.degree_type = degree_type;
        this.concentration = concentration;
        this.GPA = GPA;
    }

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
      titletagE.appendChild(document.createTextNode("GPA: " + this.GPA + "/4.00"))
      tag.appendChild(titletagE);

      tag.style.cssText = 'margin-left: 25% width: 50%;';
      tag.setAttribute("name", "Education");

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }




}

class Skills{
  type;
  skills = []
  constructor(type){this.type = type;}

  add_task(task){this.skills.push(task);}

  display_task(tag, type){
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

class Language extends Skills{
    constructor(type){
      super(type);
    }
}



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

    add_task(task){this.tasks.push(task);}

    display_task(tag, type){
      for (let i = 0; i < this.tasks.length; i++) {
          var item = document.createElement(type);
          item.appendChild(document.createTextNode(this.tasks[i]))
          tag.appendChild(item)
      }
      return;
    }

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

class Projects{
  year;
  title;
  tasks = [];
  constructor(year, title) {
    this.year = year;
    this.title = title;
  }

  add_task(task){this.tasks.push(task);}

  display_task(tag, type){
    for (let i = 0; i < this.tasks.length; i++) {
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.tasks[i]))
        tag.appendChild(item)
    }
    return;
  }

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

class CurVi{

    dict_headers = {"Name": 1,"Contact": 1,"Summary": 1,"Education":1
    ,"Professional Experiences": 1,"Projects": 1,"Skills":1,"Recognitions":1
    ,"Courses":1}
    dict_vals = {"Name": [],"Contact": [],"Summary": [],"Education": []
    ,"Professional Experiences": [],"Projects": [],"Skills":[],"Recognitions":[]
    ,"Courses":[]}

    data;

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

    constructor(data){this.data = data;}

    title(data){
      let cv = new CV(data[1]);
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

    displayCV(){
      document.body.innerHTML = " ";
      let cvDiv = document.createElement("button");
      cvDiv.setAttribute("class", "btn btn-primary btn-md center-block")
      cvDiv.setAttribute("id", "generatePDF")
      cvDiv.style.cssText = 'margin-top: 15px; display: block';
      cvDiv.innerHTML = "Download CV!";
      //
      let resDiv = document.createElement("button");
      resDiv.setAttribute("class", "btn btn-danger btn-md center-block")
      resDiv.setAttribute("id", "generatePDF")
      resDiv.style.cssText = 'margin-top: 15px; display: block';
      resDiv.innerHTML = "See Resume! (Click on Section Header to add it to the Resume!)";

      let newDiv = document.createElement("div");
      newDiv.setAttribute("id", "CV");
      document.body.appendChild(cvDiv);
      document.body.appendChild(resDiv);
      document.body.appendChild(newDiv);

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

function ObjCollect(){

}

class Resume {

  content = [];
  fillRes(content){this.content.push(content);}

  display(){
      for (var i = 0; i < this.content.length; i++) {
          document.appendChild(this.content[i]);
      }
  }

}

function fillRes(resume, content){

}



function generatePDF() {
    var element = document.getElementById('CV');
    html2pdf(element);
}


function st(){
    // for (let i = 0; i < data.length; i++){
    //   for (var j = 0; j < data[i].length; j++) {
    //       data[i][j] = data[i][j].replace(/['"]+/g, '');
    //   }
    //     // console.log(data[i]);
    //     //     clean data
    // }
    console.log("Got it!");
    data = [
      ['Name', 'Diego Luis Rivera Correa'],
      ['Contact', 'diego.rivera23@upr.edu', '787-502-0936'],
      ['Summary', 'CS Student', '"I have experience in different fields of CS, specifically with Statistical Analysis."', "ML", "Statistics", "Cognitive Sciences"],
      ['Education', 'UPRM', '2023', "Mayaguez", "PR", "Bachelor of Science","Computer Science","3.87"],
      ['Projects', '2022', 'WhatsApp Chat Data Analysis',"Coding Python scripts…3 years into dictionaries with efficient tagging", '"Visualizing tendencies on how frequently messages…nged in hourly, daily, monthly, and yearly basis"', '"Calculated the rate in which users send messages,…s and their ‘busiest’ message sending intervals."', '"Currently researching/testing SKLearn’s DecisionT… messages and determine when would they be sent."'],
      ['Projects', '2021', 'The NBA Draft: A Historical-Numerical Approach', '"Developed a Python script that extracts data from…d their accumulated counting and computed stats."', '"Performed t-tests and f-tests using Python’s stat…eir statistics across different periods of time."', '"Cleaned and pivoted data with Pandas and prepared…animations using Python’s FuncAnimation library."', '"Created a metric that combines all counting and c…esults were 83.3% compatible with their results."', '"Documented and kept track of all progress with La…Project was made as part of the MATE4990 course."'],
      ['Skills', 'Programming', 'Python', 'C++', 'JS', 'PHP'],
      ['Languages','Spanish', 'English'],
      ['Skills', 'Data Analysis Libaries','Pandas', 'Numpy', 'Seaborn', 'Matplotlib'],
      ['Recognitions', '2022', 'Georgia Tech Focus Scholar'],
      ['Recognitions', '2021', 'LinkedIn Certified: Probability and Statistics'],
      ['Recognitions', '2021', 'LinkedIn Certified: Python for Data Analysis'],
      ['Recognitions', '2020', 'UPRM Dean’s List'],
      ['Recognitions', '2020', 'BPPR Power BI and Excel Certification'],
      ['Recognitions', '2019', 'UPRM IEEE 8th Generation Scholar'],
      ['Recognitions', '2019', 'US Presidential Award for Academic Excellence'],
      ['Courses', 'COMP4017', 'Algorithms'],
      ['Courses', 'COMP4018', 'Database Systems'],
      ['Courses', 'COMP4036', 'Computer Graphics'],
      ['Courses', 'COMP3075', 'Data Structures'],
      ['Courses', 'MATE4031', 'Linear Algebra'],
      ['Courses', 'MATE3031/3032/3063', 'Calculus I-III']

    ]
      cv = new CurVi(data);
      cv.addCV();
      cv.displayCV();

}

function rescont(){
    document.body.innerHTML = " ";
    let cvDiv = document.createElement("button");
    cvDiv.setAttribute("class", "btn btn-primary btn-md center-block")
    cvDiv.setAttribute("id", "generatePDF")
    cvDiv.style.cssText = 'margin-top: 15px; display: block';
    cvDiv.innerHTML = "Download Resume!";


    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "Resume");
    document.body.appendChild(cvDiv);
    //document.body.appendChild(resDiv);
    document.body.appendChild(newDiv);

    y = document.getElementById("Resume")
    arr = document.getElementsByName("Education");
    for (var i = 0; i < arr.length; i++) {
       y.appendChild(arr[i]);
    }


}
