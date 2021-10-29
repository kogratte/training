const reverseTree = require('../src');
const reverseTreeFifo = require('../src/index_fifo');

describe('Ben Awad coding interview', () => {
	const node1 = { value: 1, leftChild: null, rightChild: null };
	const node2 = { value: 2, leftChild: null, rightChild: null };
	const node3 = { value: 3, leftChild: null, rightChild: null };
	const node4 = { value: 4, leftChild: null, rightChild: null };
	const node5 = { value: 5, leftChild: null, rightChild: null };

	describe('Reverse binary tree - Recursive strategy', () => {
		test('It should reverse a simple binary tree', () => {
			const tree = {
				...node1,
				leftChild: { ...node2 },
				rightChild: { ...node3 }
			};

			reverseTree(tree);

			expect(tree).toStrictEqual({
				...node1,
				leftChild: { ...node3 },
				rightChild: { ...node2 }
			})
		});

		test('It should also reverse child nodes', () => {
			const tree = {
				...node1,
				leftChild: {
					...node2,
					leftChild: { ...node4 },
					rightChild: { ...node5 }
				}
			};

			reverseTree(tree);

			expect(tree).toStrictEqual({
				...node1,
				rightChild: {
					...node2,
					leftChild: { ...node5 },
					rightChild: { ...node4 }
				}
			});
		});
	});

	describe('Reverse binary tree - Queue strategy', () => {
		test('It should reverse a simple binary tree', () => {
			const tree = {
				...node1,
				leftChild: { ...node2 },
				rightChild: { ...node3 }
			};

			reverseTreeFifo(tree);

			expect(tree).toStrictEqual({
				...node1,
				leftChild: { ...node3 },
				rightChild: { ...node2 }
			})
		});

		test('It should also reverse child nodes', () => {
			const tree = {
				...node1,
				leftChild: {
					...node2,
					leftChild: { ...node4 },
					rightChild: { ...node5 }
				}
			};

			reverseTreeFifo(tree);

			expect(tree).toStrictEqual({
				...node1,
				rightChild: {
					...node2,
					leftChild: { ...node5 },
					rightChild: { ...node4 }
				}
			});
		});
	});
});
