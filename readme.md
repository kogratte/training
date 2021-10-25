# Training

This little exercice is issued from a google interview.


The exercice is pretty simple, but funny to achieve.

# Input & Expectations

You've got a json, that looks like this:
```
[
	{ "gym": true, "school": false, "store": true },
	{ "gym": false, "school": false, "store": true },
	{ "gym": true, "school": true, "store": true }
]
```

Each entry in the table is describing a block. A block is composed of building.
Here, block 1 contains a gym club, and a store. Second block contains only a store, etc etc.

We want to be able to find the best blog to live, according to our expectations.

Expectations, are available throught an array, that contains requirements, ex:
```
["gym"]

// or

["gym", "school"]
```

We can also imagine we ask for something nearly impossible, like a block with a "doctor".
In that particular case, all blocks are eligible, cause no one is better than the other.
