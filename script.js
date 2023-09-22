"use strict"
let student={
    name:"Nicolas",
    favouritefood:"salad",
    city:"Paris",
}
let values=Objet.values(student);
let count=values.reduce((acc,value)=>acc+value.length,0)
console.log(count)
