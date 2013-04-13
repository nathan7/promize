
# promize

  create fulfilled and rejected promises

## Installation

    $ component install nathan7/promize

  or

    $ npm install promize

## API

### promize(value)

  Returns a fulfilled promise with the given fulfillment value.

### promize.resolved(value)

  Alias for promize(value)

### promize.rejected(reason)

  Returns a rejected promise with the given rejection reason.

### promize.never()

  Returns a promise that will never resolve.

### promize.then(fn)

  Returns a promise fulfilled with fn's return value (or rejected with fn's thrown exception).
  Useful for starting a chain of .then()s with.

## License

  MIT
