module.exports = (item) => {
	let head = item;
	let previous = null;
	while (head) {
		let _head = head.next;

		head.next = previous;
		previous = head;

		head = _head;
	}
	return previous;
};
