class Pokemon {
  constructor(name) {
    this.name = name // Estás variables se le conocen como atributos
  }


  sayHello () {
    console.log(`Mi pokemon ${this.name} te saluda!`)
  }

  // método
  sayMessage (message) {
    console.log(`Mi pokemon ${this.name} dice:${message}`)
  }
}

module.exports = Pokemon