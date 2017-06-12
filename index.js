const styles = require('./styles')
const rainbow = require('./rainbow')

function output (message, s) {
  if (s) message = output.style(message, s)

  process.stdout.write(`${message}\n`)
}

output.style = function (m, s) {
  return chose(s)
  .reduce(style, m)
}

output.rainbow = function (m, s) {

  function styleChar (char, c) {
    return output.style(char, chose(s).concat([c]))
  }

  output(rainbow(m, styleChar))
}

function chose (s) {
  if (typeof s === 'string') return chose(s.split(','))

  return (s || [])
  .map(trim)
  .filter(valid)
}

function trim (s) {
  return s.trim()
}

function valid (s) {
  return styles[s]
}

function style (m, s) {
  return `\x1b[${styles[s]}${m}\x1b[0m`
}

module.exports = output
