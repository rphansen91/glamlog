Glamlog
=======

Style console output in Nodejs applications

![Usage](https://rphansen91.github.io/glamlog/public/usage.png)

Usage
-----

```javascript
const glamlog = require('glamlog')
glamlog('Hello Glamlog', 'bold,green,white_bg')
```

Formats
-------

![Formats](https://rphansen91.github.io/glamlog/public/formats.png)

Colors
------

![Colors](https://rphansen91.github.io/glamlog/public/colors.png)

Backgrounds
-----------

![Backgrounds](https://rphansen91.github.io/glamlog/public/backgrounds.png)

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

![Rainbow](https://rphansen91.github.io/glamlog/public/rainbow.png)
