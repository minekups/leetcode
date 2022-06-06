/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 == 1) {
    return false;
  }
  let left = ['(', '[', '{'];
  let right = [')', ']', '}'];
  let myStack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (myStack.isEmpty()) {
      let index = left.indexOf(s[i]);
      if (-1 < index) {
        myStack.push(s[i]);
      } else {
        return false;
      }
    } else {
      let index = left.indexOf(s[i]);
      if (-1 < index) {
        myStack.push(s[i]);
      } else {
        let index = right.indexOf(s[i]);
        let popStr = myStack.pop();
        if (left[index] != popStr) {
          return false;
        }
      }
    }
  }
  if(!myStack.isEmpty()){
    return false;
  }
  return true;
};

var Stack = function () {
  var items = [];

  this.push = function (element) {
    items.push(element);
  }

  this.pop = function () {
    return items.pop();
  }

  this.top = function () {
    return items.length > 0 ? items[0] : null;
  }

  this.isEmpty = function () {
    return items.length > 0 ? false : true;
  }

}
