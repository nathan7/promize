var Promise = require('promise')

module.exports = exports.resolved = exports =
function promizeResolved(value) {
  return new Promise(function(resolve, reject) { resolve(value) })
}

exports.then = function(onFulfill, onReject) {
  return exports().then(onFulfill, onReject)
}

exports.rejected =
function promizeRejected(value) {
  return new Promise(function(resolve, reject) { reject(value) })
}

exports.rejected.then = function(onFulfill, onReject) {
  return exports.rejected().then(onFulfill, onReject)
}

exports.never =
function promizeNever() {
  return new Promise(function(resolve, reject) {})
}

exports.never.then = function(onFulfill, onReject) {
  return exports.never()
}
