const reverseLinkedList = require('../src');

describe('Ben Awad coding interview', () => {
	describe('Reverse a linked list', () => {
		const item1 = { value: 1, next: null };
		const item2 = { value: 2, next: null };
		const item3 = { value: 3, next: null };

		test('It should revert the provided linked list', () => {
			item1.next = item2;
			item2.next = item3;

			const result = reverseLinkedList(item1);
			expect(result).toStrictEqual({
				...item3,
				next: {
					...item2,
					next: {
						...item1,
						next: null
					}
				}
			});
		});
	});
});
