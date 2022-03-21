class WorkExperience{
    company;
    year;
    constructor(company, year){
        this.company = company;
        this.year = year;
    }
  
    speak(){
      console.log(this.company, this.year);
    }
    
}
  
let obj1 = new WorkExperience("Amazon", 2022);
obj1.speak();

let obj2 = new WorkExperience("AIG", 2021);
obj2.speak();