

var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      var funcName = arguments.callee.caller.toString().split('\n')[0]
      console.log("Assertion passed: " + funcName)
    }
  },
  isEqualTo: function(firstParam, secondParm){
    if (firstParam !== secondParm){
      throw new Error("Assertion failed: " + " is not truthy");
    } else {
      var funcName = arguments.callee.caller.toString().split('\n')[0]
      console.log("Assertion passed: " + funcName)
    }
  }
};

// function describe (test){
//   console.log(test.name + ": ")
//   test();
// }
