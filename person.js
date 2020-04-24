class Person{
    constructor(name, age, gender, intrests){
        this.name = name
        this.age = age
        this.gender = gender
        this.intrests = intrests
    }
    hello(){
        console.log(`Hello my name is ${this.name} i'm ${this.age} years old and my intrests are ${this.intrests}.`)
    }
    
}
let person = new Person('Ryan',30,'male',['being a hardarse','agile','ssd hard drives'])
let greeting = person.hello()
console.log(greeting)
