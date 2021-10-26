const computeBuildingPositions = (blocks, reqs) => {
	const positions = {};

	for (let i = 0; i < blocks.length; i++) {
		Object.keys(blocks[i])
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
	const scoring = {};

	for (let i = 0; i < blocks.length; i++) {
		Object.keys(blocks[i])
			.filter(building => reqs.indexOf(building) !== -1)
			.forEach(building => {
				let distance = blocks.length + 1;
				if (blocks[i][building]) {
					distance = 0;
				} else {
					distance = Math.min(...positions[building].map(p => {
						return Math.abs(i - p);
					}));
				}

				scoring[i] = {
					...scoring[i] || { totalScore: 0 },
					[building]: distance
				};

				scoring[i].totalScore += distance;
			});
	}

	return scoring;
}

const buildResult = (scoring, blocks) => {
	const results = [];

	if (Object.keys(scoring).length) {
		const totalScores = Object.keys(scoring)
			.map(block => scoring[block].totalScore);
		const bestScore = Math.min(...totalScores);

		for (let i = 0; i < blocks.length; i++) {
			if (scoring[i].totalScore === bestScore) {
				results.push(i.toString());
			}
		}
	} else {
		return [...Object.keys(blocks)];
	}

	return results;
}

module.exports = (blocks, reqs) => {
	const positions = computeBuildingPositions(blocks, reqs);
	const scoring = computeBlocksScorings(blocks, reqs, positions);

	return buildResult(scoring, blocks);
};
