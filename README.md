# terminal-async

Install:

```sh
$ npm i --save terminal-async
```


Example run the terminal comand:

```js

const terminal = require('terminal-async');

terminal.get(`echo "Test get!"`).then(console.log); // get return the Promise with result "Test get"
terminal.run(`echo "Test run!"`).then(console.log); // run return the Promise without result

```


