const styles = require('./styles')

function output (message, s) {
  if (s) message = output.style(message, s)

  process.stdout.write(`${message}\n`)
}

output.style = function (m, s) {
  if (typeof s === 'string') s = s.replace(/\ /g, '').split(',')

  return (s || [])
  .map(trim)
  .filter(valid)
  .reduce(style, m)
}

function trim (s) {
  return s.trim()
}

function style (m, s) {
  return `\x1b[${styles[s]}${m}\x1b[0m`
}

function valid (s) {
  return styles[s]
}

module.exports = output
