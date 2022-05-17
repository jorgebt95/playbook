const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]



console.log("Ejercicio 2.1")
explorers.forEach(explorer => console.log(explorer.name)) // Nombre de cada explorer


console.log("Ejercicio 2.2")
explorers.forEach(explorer => console.log(explorer.stack))  // stack de cada explorer

console.log("Ejercicio 2.3 ")

function generarStack({ stack }) {
  return `${stack}`;
}

const stacks = explorers.map(generarStack);

console.log(stacks); // Lista de Stacks


console.log("Ejercicio 2.4 ")

const explorersjs = explorers.filter((stack) => stack.stack ==('js'))
console.log(explorersjs)              // Explorers con js



console.log("Ejercicio 2.5 ")

const cdmx = explorers.find((user) => user.city == "CDMX")
console.log(cdmx.name)



function generarEjerc({exercises_completed}){
  return parseInt(`${exercises_completed}`)
}


console.log("Ejercicio 2.6 ")


const lokos = explorers.map(generarEjerc)

const result_of_reduce = lokos.reduce(function(acc, element) {return acc + element } )
console.log(result_of_reduce)

console.log("Ejercicio 2.7 ")



// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = explorers.some((b) =>  b = true)
console.log("Alguno de los usuarios tiene true:   " + areSomeTrue) //true



const areAllStr = explorers.every((isFinished) => typeof isFinished === true ) // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)