class Person{
    constructor(uName,Uage){
        this.name=uName;
        this.age=Uage;
    }
    details(){
        console.log(`The age of ${this.name} is ${this.age} years`);
    }
}

const p = new Person("Ahsan",11);
p.details();

const q = new Person("Umer",15);
q.details();

const und = new Person();     // if we dont pass argument then it will take default value as undefined
und.details();


