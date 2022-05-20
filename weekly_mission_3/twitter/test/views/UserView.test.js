const UserViews = require('./../../app/views/UserViews')
const UserServices = require('./../../app/services/UserServices')

describe("test for userview", () =>{
	test("Return an error object when trying to create a new user with a null payload",() =>{
		const payload = null
		const result = UserViews.createUser(payload)
		expect(result.error).toMatch(/payload no existe/)
	})


	test("Return an error object when trying to create a new user with a payload with invalid properties", () =>{
		const payload = {username: null, name: 12, id:"id"}
		const result = UserViews.createUser(payload)
		expect(result.error).toMatch(/necesita tener valor valido/)
	})



	test("Resturn an error object when trying to create a new user with a payload with  missing properties", ()=>{
		const payload = {username:"Username"}
		const result = UserViews.createUser(payload)
		expect(result.error).toMatch(/necesita tener valor valido/)
	})

	test('Create a user by a give valid payload', () => { 
        const payload = { username: "username", id: 1, name: "name"}
        const result = UserViews.createUser(payload)
        expect(result.name).toMatch("name")
        expect(result.username).toMatch("username")
        expect(result.id).toBe(1)
    });


})