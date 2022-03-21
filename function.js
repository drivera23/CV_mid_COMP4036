class WorkExperience{
    company;
    year;
    tasks = ["Optimized data-gathering code using Ruby to examine thousands of server checkpoints and compliance standards.", 
    "Wrote queries using PostgreSQL to connect multiple relations and further analyze servers and their data fields.",
    "Developed a Power BI dashboard to demonstrate outliers and group/label data for future compliance updates."
    ];
    constructor(company, year){
        this.company = company;
        this.year = year;
    }

    speak(){
      console.log(this.company, this.year);
      return
    }

    display_task(){
      for (let i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i]) + "\n";
      }
    }
    
}
  
let obj1 = new WorkExperience("Amazon", 2022);
obj1.speak();
obj1.display_task();

let obj2 = new WorkExperience("AIG", 2021);
obj2.speak();