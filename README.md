# last-element
Get the last or last n elements in an array.

![npm](https://img.shields.io/npm/v/last-element.svg) ![license](https://img.shields.io/npm/l/last-element.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/last-element.svg) 


![nodei.co](https://nodei.co/npm/last-element.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/last-element.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/last-element.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/last-element.svg)

## Features


## `npm` Install

`npm install --save last-element`

## Script Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
```

## Usage

```js
const last = require('last-element');

last([]);
//=> []

last([1]);
//=> 1

last([1,5,6,""]);
//=> ''

last([1,5,6,"",{}]);
//=> {}

last([1,5,6,"",{},[]]);
//=> []

last([1,5,6,"",{},[],-5]);
//=> -5

last(); // without parameter this function will throw a type error
//=> TypeError: last() expects an array parameter

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT**
