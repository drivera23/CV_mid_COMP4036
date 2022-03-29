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
      var tag = document.createElement("h3");
      tag.appendChild(document.createTextNode(this.section_header))
      tag.style.cssText = "margin-left:25%;";

      var line = document.createElement("hr")
      line.style.cssText = "height: 2px; background-color: #000000; border: none; width:55%;";

      var element = document.getElementById("CV");
      element.appendChild(tag);
      element.appendChild(line);
    }

}




class CV{
  owner_FN;
  owner_LN;
  constructor(FN, LN){
      this.owner_FN = FN;
      this.owner_LN = LN;
  }

  styleHTML(){
    var tag = document.createElement("h2");
    tag.appendChild(document.createTextNode(this.owner_FN + " " + this.owner_LN))
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
    concentration;
    constructor(name, grad_year, city, state, degree_type, concentration){
        this.name = name;
        this.grad_year = grad_year;
        this.city = city;
        this.state = state;
        this.degree_type = degree_type;
        this.concentration = concentration;
    }

    to_HTML(){ // se crea el header, date, y objetivos
      var tag = document.createElement("p");

      var titletagC = document.createElement("h4")
      titletagC.style.cssText = 'margin-left: 25%;';
      titletagC.appendChild(document.createTextNode(this.name))
      tag.appendChild(titletagC)

      var titletagR = document.createElement("p")
      titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%; font-size:large';
      titletagR.appendChild(document.createTextNode(this.degree_type + " in " + this.concentration))
      tag.appendChild(titletagR)

      var element = document.getElementById("CV");
      element.appendChild(tag);


    }

    // to_HTML(){
    //   var tag = document.createElement("p");
    //
    //   var titletagC = document.createElement("h3")
    //   titletagC.style.cssText = 'margin-left: 25%;';
    //   titletagC.appendChild(document.createTextNode(this.role + " @ " + this.company ))
    //   tag.appendChild(titletagC)
    //
    //   var titletagR = document.createElement("p")
    //   titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%;';
    //   titletagR.appendChild(document.createTextNode(this.year))
    //   tag.appendChild(titletagR)
    //
    //   tag.style.cssText = 'margin-left: 25% width: 50%;';
    //   var ul = document.createElement("ul");
    //   this.display_task(ul, 'li');
    //   ul.style.cssText = 'margin-left: 25%; margin-right: 25%;';
    //   tag.appendChild(ul)
    //
    //   var element = document.getElementById("CV");
    //   element.appendChild(tag);
    // }



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


function GetCV(){
    document.body.innerHTML = " ";
    let bDiv = document.createElement("button");
    bDiv.setAttribute("class", "btn btn-primary btn-md center-block")
    bDiv.setAttribute("id", "generatePDF")
    bDiv.style.cssText = 'margin-top: 15px; display: block';
    bDiv.innerHTML = "Download CV!";
    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "CV");
    document.body.appendChild(bDiv);
    document.body.appendChild(newDiv);


    let title = new CV("Diego Luis", "Rivera Correa")
    title.styleHTML();

    let setEd = new StyleHeader("Education");
    setEd.styleHTML();

    let objEd = new Education("UPR - Mayaguez", "2023", "Mayagüez", "PR", "BS", "Computer Science");
    objEd.to_HTML();


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

    bDiv.addEventListener("click", generatePDF);

    // Skills objects
}

function generatePDF() {
    var element = document.getElementById('CV');
    html2pdf(element);
}
