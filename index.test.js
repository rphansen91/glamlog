const glamlog = require('./index')

spacer()
glamlog('Hello Glamlog', 'bold,green,white_bg')
spacer()

const R = glamlog.style('R','red')
const A = glamlog.style('A','cyan')
const I = glamlog.style('I','yellow')
const N = glamlog.style('N','green')
const B = glamlog.style('B','blue')
const O = glamlog.style('O','magenta')
const W = glamlog.style('W','red')

spacer()
glamlog([R,A,I,N,B,O,W].join(''))
spacer()

const types = {
  Formats: ['bold','underline'],
  Colors: ['black','red','green','yellow','blue','magenta','cyan','white'],
  Backgrounds: ['bg_black','bg_red','bg_green','bg_yellow','bg_blue','bg_magenta','bg_cyan','bg_white']
}

Object.keys(types)
.map(function (t) {
  spacer()
  glamlog(t + '\n')
  types[t].map(glam)
  spacer()
})

function glam (style) {
  glamlog(style, style)
}

function spacer () {
  glamlog('\n\n')
}
