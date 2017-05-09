function getFirstSelector(selector) {
  return document.querySelector(selector);
}



//Define a function `nestedTarget()` that pulls a `.target` out of `#nested`
function nestedTarget() {
  return document.querySelector('#nested .target');
}


//- Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`.
//(You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}

//- Define a function `deepestChild()` that pulls out the most deeply nested child
//from `div#grand-node`. (Remember, you can iterate over elements and call
//`querySelector()` and `querySelectorAll()` on them. This is challenging to
//implement correctly, but not beyond your ability!)

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
