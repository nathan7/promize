var Promise = require('promise')

module.exports = exports.resolved = exports =
function promizeResolved(value) {
  return new Promise(function(resolve, reject) { resolve(value) })
}

exports.rejected =
function promizeRejected(value) {
  return new Promise(function(resolve, reject) { reject(value) })
}
