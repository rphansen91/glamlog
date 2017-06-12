Glamlog
=======

Style console output in Nodejs applications

Usage
-----

```javascript
const glamlog = require('glamlog')
glamlog('Hello Glamlog', 'bold,green,white_bg')
```

Formats
-------

Colors
------

Backgrounds
-----------

Example
-------

```javascript
const glamlog = require('glamlog')
const R = glamlog.style('R','red')
const A = glamlog.style('A','cyan')
const I = glamlog.style('I','yellow')
const N = glamlog.style('N','green')
const B = glamlog.style('B','blue')
const O = glamlog.style('O','magenta')
const W = glamlog.style('W','red')
glamlog([R,A,I,N,B,O,W].join(''))
```
