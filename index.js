class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
    }
    fullName(){
        let fullName=this.firstName +" "+ this.lastName;
        return  fullName;
    }
    promote(newJobTitle,newPayRate){
        this.jobTitle=newJobTitle;
        this.payRate=newPayRate;
    }
    getintro(){
        let intro= "Hi! I'm " + this.fullName()+" and I am a "+this.jobTitle;
        return intro
    }
    
}

//let employee1 = new Employee(1,"Ian","Auston","Graphic Artist",42.50);
//console.log(`Employee ${employee1.firstName} created`)    
let employee1 = new Employee(1,"Ian","Auston","Graphic Artist",42.50);
let fullName = employee1.fullName();
let intro = employee1.getintro();
console.log(fullName)
console.log(intro)
console.log(`Employee ${employee1.fullName()} created`);
employee1.promote("Sr. Graphic Artist", 46.75)
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
