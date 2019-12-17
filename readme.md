# if-element-exists

Execute a function only if the DOM element exists.

## Install

```sh
npm install if-element-exists
```

## Usage

```js
import ifElementExists from 'if-element-exists';

ifElementExists('.foo', x => x.classList.add('bar'));
```

## API

### ifElementExists(elementOrSelector, func)

Calls `func` if and only if the element is not null. the Returns the result of `func`.

#### elementOrSelector

Type: `HTMLElement | string`

DOM element, or query selector to get an element

#### func

Type: `function`

Receives the element as the first argument, if the element is not null. Return value of the function will be returned from `ifElementExists`.
