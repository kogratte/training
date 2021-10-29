const queue = [];

const swapNodes = (node) => {
	const tmpl = node.leftChild;
	const tmpr = node.rightChild;
	node.leftChild = tmpr;
	node.rightChild = tmpl;
}

const reverseTree = (src) => {
	if (!src) {
		return;
	}
	queue.push(src);

	while (queue.length) {
		const node = queue.pop();
		swapNodes(node);
		if (node.leftChild) {
			queue.push(node.leftChild);
		}
		if (node.rightChild) {
			queue.push(node.rightChild);
		}
	}
};

module.exports = reverseTree;
