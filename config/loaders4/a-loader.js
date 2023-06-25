module.exports = function aLoader(content) {
  console.log('a-loader normal execution');
  return content
}

module.exports.pitch = function aLoader(remainingRequest, precedingRequest, data) {
  console.log('a-loader `pitch`');
}

