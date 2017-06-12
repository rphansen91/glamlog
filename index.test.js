const glamlog = require('./index')

glamlog('Hello Glamlog', 'bold,green,bg_white')
spacer()

const types = {
  Formats: ['bold','underline'],
  Colors: ['black','red','green','yellow','blue','magenta','cyan','white'],
  Backgrounds: ['bg_black','bg_red','bg_green','bg_yellow','bg_blue','bg_magenta','bg_cyan','bg_white']
}

Object.keys(types)
.map(function (t) {
  glamlog(t + '\n', 'bold, underline')
  types[t].map(glam)
  spacer()
})

glamlog.rainbow('All the colors of the rainbow', 'bold')
spacer()

function glam (style) {
  glamlog(style, style)
}

function spacer () {
  glamlog('\n\n')
}
