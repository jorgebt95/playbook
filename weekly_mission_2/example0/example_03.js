const pet = {
  name: "Bella",
  // Esta es una función que se guarda como propiedad
  sayHello: function(){
    // this.name hace referencia a la propiedad del objeto
    console.log(`${this.name} te saluda en español!`)
  }
}

console.log("Ejemplo 4: Objeto con métodos")
pet.sayHello()

// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
  name: "Woopa",
  sayHelloToMyPet: function(yourPet){
    console.log(`${this.name} say's hello to ${yourPet}`)
  }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Nicky")