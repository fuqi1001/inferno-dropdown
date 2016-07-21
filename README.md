inferno-dropdown
==============

This is a fork of [react-dropdown](http://fraserxu.me/react-dropdown/)
for [Inferno](https://github.com/trueadm/inferno)

<p>&nbsp;</p>
<p align="center"><img src="http://infernojs.org/img/inferno.png" width="150px"></p>
<p>&nbsp;</p>

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

Simple Dropdown component for Inferno.

### Why

* The default HTML select element is hard to style
* And sometime we also want grouped menus

### Installation

```
$ npm install react-dropdown  --save
```

### Usage

Flat Array options

```JavaScript

const options = [
  'one', 'two', 'three'
]
```

Object Array options

```JavaScript

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  {
   type: 'group', name: 'group1', items: [
     { value: 'three', label: 'Three' },
     { value: 'four', label: 'Four' }
   ]
  },
  {
   type: 'group', name: 'group2', items: [
     { value: 'five', label: 'Five' },
     { value: 'six', label: 'Six' }
   ]
  }
]
```

Monut

```JavaScript
import Dropdown from 'inferno-dropdown'
const defaultOption = options[0]
<Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
```

Check more examples in the example folder.

**Run example**

```
$ npm start
```

### License

MIT | Build for [CSViz](https://csviz.org) project @[Wiredcraft](http://wiredcraft.com)

[npm-image]: https://img.shields.io/npm/v/inferno-dropdown.svg?style=flat-square
[npm-url]: https://npmjs.org/package/inferno-dropdown
[downloads-image]: http://img.shields.io/npm/dm/inferno-dropdown.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/inferno-dropdown
