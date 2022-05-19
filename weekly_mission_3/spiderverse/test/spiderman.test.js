const Spiderman = require('./../app/spiderman')


describe("Test Suite for Spidey  Description", ()=>{
	test('Create an spiderman object', () =>{
		const andreGarfield = new Spiderman("Spiderman Sony", 31, "Andre Garfield", 2, "Sony")

		expect(andreGarfield.name).toBe("Spiderman Sony");
		expect(andreGarfield.age).toBe(31);
		expect(andreGarfield.actor).toBe("Andre Garfield");
		expect(andreGarfield.movies).toBe(2);
		expect(andreGarfield.studio).toBe("Sony");
	});

		test('Testing the use of getInfo()', () =>{
		const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
		expect(tomHolland.getSpideyInfo()).toBe("Hey I´m Tom Holland from Marvel studio");
	
	});
})