module.exports = function bLoader(content) {
  console.log('d-loader normal execution');
  return content
}


module.exports.pitch = function aLoader(remainingRequest, precedingRequest, data) {
  console.log('d-loader `pitch`');
}
