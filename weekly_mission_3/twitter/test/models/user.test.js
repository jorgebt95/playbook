const User = require('./../../app/models/user')

describe("Unit test for user Class", () =>{
	test('Create an User object', () =>{
		const usuario = new User(1, "jorgebt95", "Jorge", "Bio", "dategen", "lastupdate")

		expect(usuario.id).toBe(1)
		expect(usuario.username).toBe("jorgebt95")
		expect(usuario.name).toBe("Jorge")
		expect(usuario.bio).toBe("Bio")
		expect(usuario.dategen).not.toBeUndefined()
		expect(usuario.lastupdate).not.toBeUndefined()
	});

	test('Add getters', () =>{
		const user = new User(1, "jorgebt95", "aaron", "Bio")
		expect(user.getUsername).toBe("jorgebt95")
		expect(user.getBio).toBe("Bio")
		expect(user.getDateCreated).not.toBeUndefined()
		expect(user.getLastUpdated).not.toBeUndefined()

	});

		test('Add setters', () =>{
		const user = new User(1, "jorgebt95", "aaron", "Bio")

		user.setUsername = "jorgebt95"
		expect(user.username).toBe("jorgebt95")

		user.setBio = "New bio"
		expect(user.bio).toBe("New bio")



	});

})