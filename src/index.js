const getBlockBuildings = (block) => Object.keys(block);

/**
 * 
 * @param {*} blocks 
 * @param {*} reqs 
 * @returns 
 */
const computeBuildingPositions = (blocks, reqs) => {
	const positions = {};

	for (let i = 0; i < blocks.length; i++) {
		getBlockBuildings(blocks[i])
			.filter(building => reqs.indexOf(building) !== -1 && blocks[i][building] === true)
			.forEach(building => {
					positions[building] = positions[building] || [];
					positions[building].push(i);
			});
	}

	return positions;
}

/**
 * 
 * @param {*} blocks 
 * @param {*} reqs 
 * @param {*} positions 
 * @returns
 * 
 * Time complexity: O(blocks * blockBuildings * reqs) 
 * Space complexity: O(blocks)
 */
const computeBlocksScorings = (blocks, reqs, positions) => {
	const scoring = [];

	for (let i = 0; i < blocks.length; i++) {
		const block = blocks[i];
		scoring[i] = 0;

		getBlockBuildings(block)
			.filter(building => reqs.indexOf(building) !== -1 && block[building] === false)
			.forEach(building => {
				const distance = Math.min(...positions[building].map(p => {
					return Math.abs(i - p);
				}));

				scoring[i] += distance;
			});
	}

	return scoring;
}


const buildResult = (scoring) => {
	const bestScore = Math.min(...scoring);

	const res = [];
	scoring.reduce((acc, _, i) => {
		if (_ === bestScore) {
			acc.push(i.toString());
		}
		return acc;
	}, res);

	return res;
}

module.exports = (blocks, reqs) => {

	const positions = computeBuildingPositions(blocks, reqs);
	const scoring = computeBlocksScorings(blocks, reqs, positions);
	const result = buildResult(scoring, blocks);

	return result;
};
