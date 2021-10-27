const data = require('./data/input.json');
const resolve = require('../../src/index');

describe('Example 3', () => {
	test('Result should be [3, 4, 5] if requirements are stadium and store', () => {
		const res = resolve(data, ["stadium", "store"]);

		expect(res.length).toBe(3);
		expect(res).toContain('3');
		expect(res).toContain('4');
		expect(res).toContain('5');
	});
});
