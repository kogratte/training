const data = require('./data/input.json');
const resolve = require('../../src/index');

describe('Example 1', () => {
	test('Result should be 2 if requirement is only school', () => {
		const res = resolve(data, ["school"]);

		expect(res.length).toBe(1);
		expect(res[0]).toBe('2');
	});

	test('Result should be [0, 2] if requirement is only gym', () => {
		const res = resolve(data, ["gym"]);

		expect(res.length).toBe(2);
		expect(res).toContain('0');
		expect(res).toContain('2');
	});

	test("Result should be [2] if requirements are gym AND school", () => {
		const res = resolve(data, ["gym", "school"]);

		expect(res.length).toBe(1);
		expect(res).toContain('2');
	});

	test("Result should be every blocks if requirements is something impossible", () => {
		const res = resolve(data, ["sport"]);

		expect(res.length).toBe(3);
		expect(res).toContain('0');
		expect(res).toContain('1');
		expect(res).toContain('2');
	});
});
