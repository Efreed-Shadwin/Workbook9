class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    getFullName(){
        let fullName=this.firstName+" "+this.lastName;
        return fullName
    }
}
class Employee{
    constructor(firstName,lastName,id,jobTitle,payRate){
        this.firstName=firstName;
        this.lastName=lastName;
        this.id=id;
        this.jobTitle=jobTitle;
        this.payRate=payRate;
    }
    getFullName(){
        let fullName=this.firstName+" "+this.lastName;
        return fullName
    }
    getGrossPay(hoursWorked){
        let grossPay=hoursWorked*this.payRate;
        return grossPay
    }
}
let person1 =new Person("John","Doe");
let employee1 =new Employee("John","Doe",1,"Intern",15)
let employee2 =new Employee("Jane","Doe",2,"Jr. Developer",26)
console.log(person1.getFullName());
console.log(employee1.getFullName())
console.log(employee1.getGrossPay(40))
console.log(employee2.getFullName())
console.log(employee2.getGrossPay(40))