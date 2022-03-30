// Full name                                                              DONE
// Contact information                                                    DONE
// Professional title, resume summary, or resume objective                DONE
// Research interests                                                     DONE
// Education                                                              DONE
// Work experience                                                        DONE
// Conferences and courses
// Skills                                                                 DONE
// Certificates                                                           DONE
// Languages                                                              DONE

class ProfTitle{
    title;
    objective;
    interests = [];
    constructor(title, obj){
        this.title = title;
        this.objective = obj;
    }

    add_interest(inte){
      this.interests.push(inte);
    }

    display_interest(tag){
      let text = "My interests include: ";
      for (let i = 0; i < this.interests.length; i++) {
          if (i == this.interests.length -1){
            text += this.interests[i]
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

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }

}

class Recognition{
  task = [];
  years = [];

  add_task(task, rec){
    this.task.push(task);
    this.years.push(rec);
  }

  display_task(tag, type){
    for (let i = 0; i < this.task.length; i++) {
        var item = document.createElement(type);
        item.appendChild(document.createTextNode(this.years[i] + " | " + this.task[i]))
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
        item.appendChild(document.createTextNode(this.coursecode[i] + " : " + this.courses[i]))
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

  toHTML(){
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
    GPA;
    concentration;
    courses = [];
    constructor(name, grad_year, city, state, degree_type, concentration){
        this.name = name;
        this.grad_year = grad_year;
        this.city = city;
        this.state = state;
        this.degree_type = degree_type;
        this.concentration = concentration;
    }

    to_HTML(){ // se crea el header, date, y objetivos


      var titletagR = document.createElement("p")
      titletagR.style.cssText = 'margin-top: 1%; margin-left: 25%; font-size:large';
      titletagR.appendChild(document.createTextNode(this.degree_type + " in " + this.concentration))
      tag.appendChild(titletagR)

      var element = document.getElementById("CV");
      element.appendChild(tag);


    }

    addCourses(course){
        this.courses.append(course);
    }

    addGPA(GPA){
        this.GPA.append(GPA);
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

      tag.style.cssText = 'margin-left: 25% width: 50%;';
      // var ul = document.createElement("ul");
      // this.display_task(ul, 'li');
      // ul.style.cssText = 'margin-left: 25%; margin-right: 25%;';
      // tag.appendChild(ul)

      var element = document.getElementById("CV");
      element.appendChild(tag);
    }




}

class Skills{
  type;
  skills = []
  constructor(type){
    this.type = type;
  }

  add_task(task){
    this.skills.push(task);
  }

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


    let title = new CV("Diego Luis", "Rivera Correa");
    title.styleHTML();

    let contact = new Contact("diego.rivera23@upr.edu", "787-502-0936");
    contact.toHTML();

    let setSum = new StyleHeader("Summary");
    setSum.styleHTML();

    let summary = new ProfTitle("CS Student", "I have experience in different fields of CS, specifically with Statistical Analysis.");
    summary.add_interest("Machine Learning");
    summary.add_interest("Statistics");
    summary.add_interest("Sports-Analytics");
    summary.to_HTML();


    let setEd = new StyleHeader("Education");
    setEd.styleHTML();

    let objEd = new Education("UPR - Mayaguez", "2023", "Mayaguez", "PR", "BS", "Computer Science");
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

    let skobj = new Skills("Programming");
    skobj.add_task("Python");
    skobj.add_task("C++");
    skobj.add_task("JS");
    skobj.add_task("PHP");
    skobj.to_HTML();

    let lobj = new Skills("Languages");
    lobj.add_task("Spanish");
    lobj.add_task("English");
    lobj.to_HTML();

    // Pandas, Numpy, Seaborn, Matplotlib, Scipy.Stats, OS, CSV, SKLearn
    let dobj = new Skills("Data Analysis Tools");
    dobj.add_task("Pandas");
    dobj.add_task("Numpy");
    dobj.add_task("Seaborn");
    dobj.add_task("Matplotlib");
    dobj.to_HTML();


    let setRec = new StyleHeader("Recognitions");
    setRec.styleHTML();
    let rec = new Recognition();
    rec.add_task("Georgia Tech Focus Scholar", 2022);
    rec.add_task("LinkedIn Certified: Probability and Statistics", 2021);
    rec.add_task("LinkedIn Certified: Python for Data Analysis", 2021);
    rec.add_task("UPRM Dean’s List", 2020);
    rec.add_task("BPPR Power BI and Excel Certification", 2020)
    rec.add_task("UPRM IEEE 8th Generation Scholar", 2019);
    rec.add_task("US Presidential Award for Academic Excellence", 2019);
    rec.to_HTML();

    let setCo = new StyleHeader("Courses");
    setCo.styleHTML();
    let co = new Courses();
    co.add_course("COMP4017", "Algorithms");
    co.add_course("COMP4018", "Database Systems");
    co.add_course("COMP4036", "Computer Graphics");
    co.add_course("COMP3075", "Data Structures");
    co.add_course("MATE4031", "Linear Algebra");
    co.add_course("MATE3031/3032/3063", "Calculus I-III");
    co.to_HTML();

    bDiv.addEventListener("click", generatePDF);

    // Skills objects
}

function generatePDF() {
    var element = document.getElementById('CV');
    html2pdf(element);
}
