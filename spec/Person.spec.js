let  mytest  = require("../src/person");
let person = new mytest ("Ryan", 30, "male","being a hardarse, agile, ssd hard drives")

describe("hello method inside 'person' class", function() {

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
    expect(person.interests).toEqual("being a hardarse, agile, ssd hard drives")
})
})