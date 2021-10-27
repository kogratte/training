const data = require('./data/input.json');
const resolve = require('../../src/index');

describe('Example 2 - Bigger map', () => {
	test('Result should be [1] if requirements are gym and school', () => {
		const res = resolve(data, ["gym", "school"]);

		expect(res.length).toBe(1);
		expect(res).toContain('1');
	});

	test('Result should be [6, 7, 8, 9, 10, 11] if requirements are stadium and zoo', () => {
		const res = resolve(data, ["stadium", "zoo"]);

		expect(res.length).toBe(6);
		expect(res).toContain('6');
		expect(res).toContain('7');
		expect(res).toContain('8');
		expect(res).toContain('9');
		expect(res).toContain('10');
		expect(res).toContain('11');
	});

});
