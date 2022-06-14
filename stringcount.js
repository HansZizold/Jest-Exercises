function stringLength(string) {
  if(string.length < 1) {
    return ('String empty');
  }
  if(string.length > 10) {
    return ('String longer than 10 characters')
  }
  return string.length;
}
module.exports = stringLength;