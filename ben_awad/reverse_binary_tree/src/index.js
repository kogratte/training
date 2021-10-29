const reverseTree = (src) => {
	const tmpL = src.leftChild || null;
	const tmpR = src.rightChild || null;
	
	if (tmpL && (tmpL.leftChild || tmpL.rightChild)) {
		reverseTree(tmpL);
	}

	if (tmpR && (tmpR.leftChild || tmpR.rightChild)) {
		reverseTree(tmpR);
	}

	src.leftChild = tmpR;
	src.rightChild = tmpL;
}

module.exports = reverseTree;