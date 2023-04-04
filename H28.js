'use strict';

let list = function list(array) {
  let ul = document.createElement('ul');
 
  array.forEach(function(element) {
   let li = document.createElement('li');
    let childElement;
 
    if (Array.isArray(element)) {
      childElement = list(element);
    } else {
      childElement = document.createTextNode(element)
    }
 
    li.appendChild(childElement);
    ul.appendChild(li);
  })
 
  return ul;
}
 
document.body.appendChild(list([1, 2, 3]));
document.body.appendChild(list([1, 2, [1.1, 1.2, 1.3], 3]));

