// Full name                                                              DONE
// Contact information
// Professional title, resume summary, or resume objective
// Research interests
// Education
// Work experience                                                        DONE
// Conferences and courses
// Skills
// Certificates
// Languages
// Grants of fellowships
// References

class StyleHeader{
    section_header;
    constructor(section){
      this.section_header = section;
    }

    styleHTML(){
      var tag = document.createElement("h2");
      tag.appendChild(document.createTextNode(this.section_header))
      tag.style.cssText = "margin-left:25%;";

      var line = document.createElement("hr")
      line.style.cssText = "background-color: #000000; width:55%; height: 10px;";

      var element = document.getElementsByTagName("body")[0];
      element.appendChild(tag);
      element.appendChild(line);
    }

}




class CV{

}


class Skills{
  type;
  skills = []
  constructor(type){
    this.type = type;
  }

  add_task(task){
    this.tasks.push(task);
  }

  to_HTML(){
    var tag = document.createElement("p");

    var titletagC = document.createElement("h3")
    titletagC.style.cssText = 'margin-left: 25%;';
    titletagC.appendChild(document.createTextNode(this.role + " @ " + this.company ))
    tag.appendChild(titletagC)

    var titletagR = document.createElement("p")
    titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%;';
    titletagR.appendChild(document.createTextNode(this.year))
    tag.appendChild(titletagR)

    tag.style.cssText = 'margin-left: 25% width: 50%;';
    var ul = document.createElement("ul");
    this.display_task(ul, 'li');
    ul.style.cssText = 'margin-left: 25%; margin-right: 25%;';
    tag.appendChild(ul)

    var element = document.getElementsByTagName("body")[0];
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

    add_task(task){
      this.tasks.push(task);
    }

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

      var titletagC = document.createElement("h3")
      titletagC.style.cssText = 'margin-left: 25%;';
      titletagC.appendChild(document.createTextNode(this.role + " @ " + this.company ))
      tag.appendChild(titletagC)

      var titletagR = document.createElement("p")
      titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%;';
      titletagR.appendChild(document.createTextNode(this.year))
      tag.appendChild(titletagR)

      tag.style.cssText = 'margin-left: 25% width: 50%;';
      var ul = document.createElement("ul");
      this.display_task(ul, 'li');
      ul.style.cssText = 'margin-left: 25%; margin-right: 25%;';
      tag.appendChild(ul)

      var element = document.getElementsByTagName("body")[0];
      element.appendChild(tag);
    }

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

function GetCV(){
    document.body.innerHTML = " ";
    let btn = document.createElement("button");
    btn.style.cssText = 'margin-top: 5%; margin: auto; display: block';
    btn.innerHTML = "Download CV!";
    document.body.appendChild(btn);
    // // Experience objects
    let setOBJ = new StyleHeader("Experience");
    setOBJ.styleHTML();

    let obj = new WorkExperience("AIG", 2021, "App Development Intern");
    obj.add_task("Optimized data-gathering code using Ruby to examine thousands of server checkpoints and compliance standards");
    obj.add_task("Wrote queries using PostgreSQL to connect multiple relations and further analyze servers and their data fields.");
    obj.add_task("Developed a Power BI dashboard to demonstrate outliers and group/label data for future compliance updates.");
    obj.to_HTML();

    let obj2 = new WorkExperience("Andeno", 2021, "Data Science Intern");
    obj2.add_task("Worked on historical transaction data using Jupyter Notebooks for user inflow/outflow analytics and visualization.");
    obj2.add_task("Performed multiple statistical tests on gathered data for possible algorithm improvement and outlier detection.");
    obj2.add_task("Coded Python scripts for data labelling, cleaning, and extraction for predictive tendency models for hundreds of users.");
    obj2.add_task("Used Python libraries: Pandas, Matplotlib, CSV, Numpy, Scipy.Stats, and Seaborn.");
    obj2.to_HTML();

    // Experience objects

    // Skills objects

    let setSkill = new StyleHeader("Skills");
    setSkill.styleHTML();

    // Skills objects



}
