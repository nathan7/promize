# promize

  create fulfilled and rejected promises

## Installation

    $ component install nathan7/promize

  or

    $ npm install promize

## API

### promize(value)

  Returns a promise resolved with the given value.

### promize.resolved(value)

  Alias for promize(value)

### promize.rejected(reason)

  Returns a promise rejected with the given reason.

### promize.never()

  Returns a promise that will never resolve.

### promize.then(fn)

  Returns a promise fulfilled with fn's return value (or rejected with fn's thrown exception).
  Useful for starting a chain of .then()s with.

## License

  MIT
