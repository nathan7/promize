var Promise = require('promise')

module.exports = exports =
function promizeResolved(value) {
  return Promise.from(value)
}
exports.then = exports().then
exports.resolved = exports

exports.rejected =
function promizeRejected(value) {
  return new Promise(function(resolve, reject) { reject(value) })
}
exports.rejected.then = exports.rejected().then


exports.never =
function promizeNever() {
  return new Promise(function(resolve, reject) {})
}
exports.never.then = exports.never().then
