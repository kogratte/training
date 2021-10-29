[![Node.js CI](https://github.com/kogratte/training/actions/workflows/node.js.yml/badge.svg)](https://github.com/kogratte/training/actions/workflows/node.js.yml)

# Presentation

This repo has been created to host some exercices bases on google coding interview, shared by [Clément Mihailescu](https://www.youtube.com/channel/UCaO6VoaYJv4kS-TQO_M-N_g)

* [Identify the best blocks](https://github.com/kogratte/training/tree/master/keerti_purswani) (by [Keerti Purswani](https://www.youtube.com/watch?v=rw4s4M3hFfs))

# Tweaks

![Benchmark](./docs/medias/perfs.png "Tests Benchmark")

# Benchmarking

To compare two implementations using benchmark, you've to install [hyperfine](https://github.com/sharkdp/hyperfine/) first.

Once installed, you just have to run it with two commands to compare. For more options, please refer to the official documentation.

If you want, for example, compare two implementations of the reverse sort algorythm, you can just process like this:

```bash
node -e "const fn = require('./keerti_purswani/src/index.js'); const input = require('./keerti_purswani/tests/example3/data/input.json'); console.log(fn(input, ['stadium']));"
```

It can be easiest writing a temporary file (feel free to use this method, benchmark*.js have been added to .gitignore)
```javascript
const fn = require('./keerti_purswani/src/index.js');
const input = require('./keerti_purswani/tests/example3/data/input.json');

console.log(fn(input, ['stadium']));
```
