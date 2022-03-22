class CV{

}

class WorkExperience{
    company;
    year;
    tasks = [];
    constructor(company, year){
        this.company = company;
        this.year = year;
    }

    details(){
      return this.company + this.year;
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
      var tag = document.createElement("p"); // <p></p>
      tag.style.cssText = 'margin-left: 25% width: 50%; ';
      var ul = document.createElement("ul");
      ul.style.cssText = 'margin-left: 25%; ';
      this.display_task(ul, 'li');
      tag.appendChild(ul)
      var element = document.getElementsByTagName("body")[0];
      element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>
    }

}

// Experience objects
let obj = new WorkExperience("AIG", 2021);
obj.add_task("Optimized data-gathering code using Ruby to examine thousands of server checkpoints and compliance standards");
obj.add_task("Wrote queries using PostgreSQL to connect multiple relations and further analyze servers and their data fields.");
obj.add_task("Developed a Power BI dashboard to demonstrate outliers and group/label data for future compliance updates.");

obj.to_HTML();
// Experience objects