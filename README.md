# rel-message
validation for rel messages

## usage
```js
var relMessage = require('rel-message')

var message = relMessage(
  'http://to.com',
  'http://from.com',
  'http://rel.com')

relMessage.validate(message)
// => true

```


## api

### relMessage : (to: URI, from: URI, rel: URI) => Object

returns a rel message object with the proper jsonld context set

### relMessage.validate : (message: Object) => Boolean

## installation

    $ npm install rel-message


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

ISC. (c) MMXIV jden <jason@denizac.org>. See LICENSE.md
