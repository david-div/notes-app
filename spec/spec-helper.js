var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Assertion passed: " + assertionToCheck)
    }
  },
  isEqualTo: function(firstParam, secondParm){
    if (firstParam !== secondParm){
      throw new Error("Assertion failed: " + " is not truthy");
    } else {
      console.log("Assertion passed: ")
    }
  }
};
