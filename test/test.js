var mochi = require('mochi')
mochi.use(require('chai-interface'))

describe('createMessage', function () {

  var createMessage = require('../.')

  it('creates a message with context', function () {
    var m = createMessage('http://to.com','http://from.com','http://rel.is')
    m.should.have.interface({
      '@context': String,
      to: String,
      from: String,
      rel: String
    })
  })

  it('throws if invalid to', function () {
    mochi.expect(function () {
      var m = createMessage(null,'http://from.com','http://rel.is')
    }).to.throw('to is not a URI')
  })
  it('throws if invalid from', function () {
    mochi.expect(function () {
      var m = createMessage('http://to.com', 'from and stuff','http://rel.is')
    }).to.throw('from is not a URI')
  })
  it('throws if invalid rel', function () {
    mochi.expect(function () {
      var m = createMessage('http://to.com','http://from.com','123')
    }).to.throw('rel is not a URI')
  })

})

describe('validateMessage', function () {
  var validate = require('../.').validate

  it('is true for a valid message', function () {
    validate({
      "@context": "http://rel.is/0.1",
      "from": "http://jden.us",
      "to": "http://rel.is",
      "rel": "http://justyo.co"
    })
      .should.equal(true)
  })
  it('is false for an invalid message', function () {
    validate({
      foo: 'bar'
    })
      .should.equal(false)
  })
})