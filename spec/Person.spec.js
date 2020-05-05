let  Person  = require("../src/person");
let person = new Person ("Ryan", 30, "male",['being a hardarse', ' agile', ' ssd hard drives'])

describe("Person", function() {

it ("should return name", function(){
    expect(person.name).toEqual("Ryan")
})

it ("should return age", function(){
    expect (person.age). toEqual(30)
})

it ("should return gender", function(){
    expect(person.gender).toEqual("male")
})

it ("should return interests", function(){
    expect(person.interests).toEqual(['being a hardarse', ' agile', ' ssd hard drives'])
})
it ("should return hello", function(){
    expect(person.hello()).toBe('Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives')
})
})