module.exports = function bLoader(content) {
  console.log('c-loader normal execution');
  return content
}


module.exports.pitch = function aLoader(remainingRequest, precedingRequest, data) {
  console.log('c-loader `pitch`', {
    remainingRequest, precedingRequest, data
  });
}
