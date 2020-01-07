# Validators

[![npm version](https://img.shields.io/npm/v/@currency-one/validators.svg)](https://www.npmjs.com/package/@currency-one/validators)
![](https://github.com/Currency-One/validators/workflows/build/badge.svg)
[![License](https://img.shields.io/npm/l/@currency-one/validators.svg)](https://github.com/Currency-One/validators/blob/master/LICENSE.md)

This is typescript package of validators and regexp patterns

## Installation

To install run:
```
npm i @currency-one/validators
```
or

```
yarn add @currency-one/validators
```


Basic usage with React and build systems (webpack, parcel etc.):

```js
import { isNotEmptyStringValidator, isAccountNumberPattern } from '@currency-one/validators'

export const notEmptyValidator = (value) => {
  return !isNotEmptyStringValidator(value) ? 'This field can't be empty' : ''
}

export const accountNumberPattern = value => {
  return !isAccountNumberPattern(value) ? 'This field can contain only: letters, numbers and space' : ''
}
```

## Documentation

See [documentation](DOCS.md) for more details
