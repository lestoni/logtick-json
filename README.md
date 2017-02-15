# Logtick JSON

> Transform [logtic-parser](https://www.npmjs.com/package/logtick-parser) to JSON
> Output

## Install

```
  npm install logtick-json --save
```

## Usage

Run example `$ node test.js`

```js
  const logtickParser = require('logtick-parser');
  const logtickJSON   = require('logtick-json');

  let tokens = logtickParser(gitlogString);
  let output = logtickJSON(tokens);
```

## LICENSE

MIT
