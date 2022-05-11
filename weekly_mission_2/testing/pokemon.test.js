import Pokemon from './pokemon'

test('1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachu'); // Corrige esta prueba
});
//node --experimental-vm-modules ./node_modules/jest/bin/jest