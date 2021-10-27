[![Node.js CI](https://github.com/kogratte/training/actions/workflows/node.js.yml/badge.svg)](https://github.com/kogratte/training/actions/workflows/node.js.yml)

# Training

This little exercice is issued from a google interview.

Source: [Youtube](https://www.youtube.com/watch?v=rw4s4M3hFfs)

The exercice is pretty simple, but funny to achieve.

# Input & Expectations

Imagine a city, organised with blocks. Each blocks has some buildings, like a store, a bank...

It can be described using the following json:

```json
[
	{ "gym": true, "school": false, "store": true },
	{ "gym": false, "school": false, "store": true },
	{ "gym": true, "school": true, "store": true }
]
```

We want an algorithm that can find the best block we should buy/rent a home, according to our requirements.

Using the previous city description, and if my requirements are gym and store, then, I should buy something in the third block.

If my requirement is focused on a doctor, every blocks are fine, cause there is no doctor at all.

# Something more complex


```json
[
	{ "gym": false, "school": false, 	"store": false, "stadium": false 	},
	{ "gym": false, "school": false, 	"store": true , "stadium": false	},
	{ "gym": false, "school": true, 	"store": false, "stadium": false 	},
	{ "gym": false, "school": true, 	"store": true , "stadium": false	},
	{ "gym": true, 	"school": false, 	"store": false, "stadium": true 	},
	{ "gym": true, 	"school": false, 	"store": true , "stadium": false	},
	{ "gym": true, 	"school": true, 	"store": false, "stadium": false 	},
	{ "gym": true, 	"school": true, 	"store": true , "stadium": false	},
]
```

If my requirements are ["stadium", "store"], then, the best blocks to live are the ones around the stadium (including stadium), and result should be 3, 4 and 5.

If I live in the 3rd block, I'll have to walk 1 to stadium, 0 to store.
If I live in the 4th block, I'll have to walk 0 to stadium, 1 to store.
If I live in the 5th block, I'll have to walk 1 to stadium, 0 to store.

This is, for all of this blocks, the closest distance I have to walk to fill all my requirements.

This test case is available under "tests/example3".