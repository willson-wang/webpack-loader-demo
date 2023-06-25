module.exports = function bLoader(content) {
  console.log('b-loader normal execution');
  return content
}


module.exports.pitch = function aLoader(remainingRequest, precedingRequest, data) {
  console.log('b-loader `pitch`');
}
