const student1={
    studId:45677,
    studName:"Pranam",
    studClass:'SR KG'
}
const student2={
    studId:44444,
    studName:"Kiran",
    studClass:'SR KG'
}
const student3={
    studId:66666,
    studName:"Karan",
    studClass:'JR KG'
}
let students = [student1,student2,student3];
console.log(typeof students);
let studArray=new Array(student1,student2,student3);
console.log(typeof studArray);
students.forEach(student=>console.log(student));
students.forEach(student=>console.log(student.studName));

students.filter(student=>student.studClass.toUpperCase()=='SR KG')
        .forEach(student=>console.log(student))

class Student{
    studId;
    studName;
    studClass
    constructor(studId=0,name="NOT MENTIONED",sclass="PLAY GROUP"){
        this.studId=studId; 
        this.studName=name;
        this.studClass=sclass
    }
}
let student4=new Student(7890,"Pritam",'JR KG') // constructor called automatically

let student5=new Student(8888,"Gita",'NURSARY')
let student6=new Student(9999,"Soham",'JR KG')
let student7=new Student(5656,"Mayuri",'NURSARY')
let student8=new Student(5656,"Mayuri")
console.log(student8);
let student9=new Student(5656)
console.log(student9);
let student10=new Student();
console.log(student10);

const stud=new Student(456,"xyz","ppp");
//stud=new Student(111,"fff","gggg"); /* const reference can not be assigned to other objects */
stud.studName="Pravin" /** value of object can be changed */

console.log(student1.studId);
console.log(student1.studName);
console.log(student1.studClass);

// iterating keys of object
for(let key in student4){
    console.log(key);
    console.log(student4[key]);
}