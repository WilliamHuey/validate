# Tower Validate

Simple API to individual validation functions.

If you want to get even more optimized, you can skip this module and add the specific validations you need one by one. This just makes it so you can access them all without having to dig through the list of validators out there to find the ones you need.

## Installation

node.js:

```bash
npm install tower-validate
```

browser:

```bash
component install tower/validate
```

## Example

```js
var validate = require('tower-validate');

validate({ count: 10 }, [[ 'count', 'gte', 12 ]]) // false
```

## Licence

MIT