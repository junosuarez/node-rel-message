var tracery = require('tracery')
var URI = require('URIjs')
var and = require('connective').and

function isURI(x) {
  if (typeof x !== 'string') {
    return false
  }
  var uri = URI.parse(x)
  return uri.path && (uri.urn || uri.hostname)
}

var validate = tracery({
  '@context': and(isURI, function (x) {
    return x === 'http://rel.is/0.1'
  }),
  from: isURI,
  to: isURI,
  rel: isURI
})

function createMessage(to, from, rel) {
  if (!isURI(to)) {
    throw new Error('to is not a URI')
  }
  if (!isURI(from)) {
    throw new Error('from is not a URI')
  }
  if (!isURI(rel)) {
    throw new Error('rel is not a URI')
  }
  return {
    "@context":"http://rel.is/0.1",
    to: to,
    from: from,
    rel: rel
  }
}

module.exports = createMessage
module.exports.validate = validate