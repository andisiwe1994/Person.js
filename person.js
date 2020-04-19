class person{
    constructor(name, age, gender, intrests){
        this.name = name
        this.age = age
        this.gender = gender
        this.intrests = intrests
    }
    Hello(){
        console.log(`Hello my name is ${this.name} i'm ${this.age} years old and my intrests are ${this.intrests}.`)
    }
    
}
let Person = new person('Ryan',30,'male',['being a hardarse','agile','ssd hard drives'])
let greeting = Person.Hello()
console.log(greeting)
