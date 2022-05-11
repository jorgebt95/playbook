const myObject3 = {
  name: "Tulio",
  age: 2,
  nicknames: [
   "Tulipan",
    "Tulancingo",
    "Tulish"
  ],
  address: {
    zip_code: "10000",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "CDMX"
  }
}

const ObjtAaronFull = {
  name: "aaron",
  age: 25,
  nicknames:[
  "Eiron",
  "Laron",
  "Crayo"
    ] ,
  address:{  
  street: "paseo de mexico",
  zip_code: "76904",
  city:"qro"
   }
}

console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["address"])
console.log(ObjtAaronFull)
console.log(ObjtAaronFull["nicknames"])