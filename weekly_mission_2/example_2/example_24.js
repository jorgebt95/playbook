// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars by ${this.author}`
  }
}
console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())
const otroRepo = new Repository("LaunchX", "jorgebt95", "js", 500)
console.log(otroRepo.getInfo())