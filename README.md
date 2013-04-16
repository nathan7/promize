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

### promize.then(onFulfilled, onRejected)

  Equivalent to promize().then(onFulfilled, onRejected).
  Useful for starting a chain of .then()s with.

#### promize.resolved.then(onFulfilled, onRejected)

  Alias for promize.then(onFulfilled, onRejected).

#### promize.rejected.then(onFulfilled, onRejected)

  Equivalent to promize.rejected().then(onFulfilled, onRejected).

#### promize.never.then(onFulfilled, onRejected)

  Equivalent to promize.never(), which is equivalent to promize.never().then().

## License

  MIT
