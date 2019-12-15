/**

Execute a function if and only if the element exists.

@param elementOrSelector - A DOM element or query selector string
@param func - The function to call, receives the element as the first argument

@example
```
const ifElementExists = require('if-element-exists');

ifElementExists('.foo', x => x.classList.add('bar'));
```
*/
declare function ifElementExists(elementOrSelector?: Element | string, func: Function);

export = ifElementExists;
