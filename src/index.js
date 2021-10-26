const getBlockBuildings = (block) => Object.keys(block);

const computeBuildingPositions = (blocks, reqs) => {
	const positions = {};

	for (let i = 0; i < blocks.length; i++) {
		getBlockBuildings(blocks[i])
			.filter(building => reqs.indexOf(building) !== -1)
			.forEach(building => {

				if (blocks[i][building]) {
					positions[building] = positions[building] || [];
					positions[building].push(i);
				}
			});
	}

	return positions;
}

const computeBlocksScorings = (blocks, reqs, positions) => {
	const scoring = [];

	for (let i = 0; i < blocks.length; i++) {
		const block = blocks[i];
		scoring[i] = 0;

		getBlockBuildings(block)
			.filter(building => reqs.indexOf(building) !== -1)
			.forEach(building => {
				let distance = blocks.length + 1;
				if (block[building]) {
					distance = 0;
				} else {
					distance = Math.min(...positions[building].map(p => {
						return Math.abs(i - p);
					}));
				}

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
