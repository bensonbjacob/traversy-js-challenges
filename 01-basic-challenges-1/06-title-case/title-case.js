function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(' ');
}

module.exports = titleCase;
