var testId = document.getElementById("test")

var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      testId.innerHTML +=("<ul> Assertion failed: " + assertionToCheck + " is not truthy </ul>");
    } else {
      var funcName = arguments.callee.caller.toString().split('\n')[0]
      testId.innerHTML +=  ("<ul> Assertion passed: " + funcName + "</ul>")
    }
  },
  isEqualTo: function(firstParam, secondParm){
    if (firstParam !== secondParm){
      testId.innerHTML += ("<ul> Assertion failed: " + " is not truthy </ul>");
    } else {
      var funcName = arguments.callee.caller.toString().split('\n')[0]
      testId.innerHTML += ("<ul> Assertion passed: " + funcName + "</ul>")
    }
  }
};

// function describe (test){
//   console.log(test.name + ": ")
//   test();
// }
