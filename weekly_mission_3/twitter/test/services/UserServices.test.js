const UserService = require('./../../app/services/UserServices')


describe("Test for UserServices", () =>{

	test("1. Create a ne user using the userService", () => {
		const user = UserService.create(1, "jorgebt95", "aaron")
		expect(user.username).toBe("jorgebt95")
		expect(user.name).toBe("aaron")
		expect(user.id).toBe(1)
		expect(user.bio).not.toBeUndefined()
	});

	test("2. Get all user data in a list", () =>{
		const user = UserService.create(1, "jorgebt95", "aaron")
		const userInfoInList = UserService.getInfo(user)
		expect(userInfoInList[0]).toBe(1)
		expect(userInfoInList[1]).toBe("jorgebt95")
		expect(userInfoInList[2]).toBe("aaron")
		expect(userInfoInList[3]).toBe("sin bio")
	});

	test("3. Update username", () =>{
		const user = UserService.create(1, "jorgebt95", "aaron")
		UserService.updateUserUsername(user, "000")
		expect(user.username).toBe("000");
	});

		test("4. Given a list of users, list the users", () =>{
		const user1 = UserService.create(1, "jorgebt951", "aaron")
		const user2 = UserService.create(1, "jorgebt952", "aaron")
		const user3 = UserService.create(1, "jorgebt953", "aaron")
		const usernames = UserService.getAllUsernames([user1, user2, user3])
		console.log(usernames)
		expect(usernames).toContain("jorgebt951")
		expect(usernames).toContain("jorgebt952")
		expect(usernames).toContain("jorgebt953")

	})
})