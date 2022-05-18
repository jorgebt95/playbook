const MissionCommander = require('./../app/missionCommander');


describe("Esto es una suite de pruebas", () => {
	test('Caso de prueba 1', ()=> {
		const myMissionCommander = new MissionCommander("woopa")
		expect(myMissionCommander.name).toBe("woopa");
	});
})