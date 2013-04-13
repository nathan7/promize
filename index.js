var Promise = require('promise')

module.exports = exports.resolved = exports =
function promizeResolved(value) {
  return new Promise(function(resolve, reject) { resolve(value) })
}

exports.rejected =
function promizeRejected(value) {
  return new Promise(function(resolve, reject) { reject(value) })
}

exports.never =
function promizeNever() {
  return new Promise(function(resolve, reject) {})
}

exports.then = function(onFulfill, onReject) {
  if (typeof onFulfill !== 'function')
    return exports()
  return new Promise(function(resolve, reject) {
    setImmediate(function() {
      var ret
      try { ret = onFulfill() }
      catch (e) {
        return reject(e)
      }
      resolve(ret)
    })
  })
}
