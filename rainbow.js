function color (i) {
  var colors = ['red','yellow','green','blue','magenta']
  return colors[i % colors.length]
}

module.exports = function (message, cb) {
  return message
  .split('')
  .map(function (char, i) {
    return cb(char, color(i))
  })
  .join('')
}
