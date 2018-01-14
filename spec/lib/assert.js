const testId = document.getElementById("test")

var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      testId.innerHTML +=("<ul> Assertion failed: " + assertionToCheck + " is not truthy </ul>");
    } else {
      testId.innerHTML +=  ("<ul> Assertion passed: </ul>")
    }
  },
  isEqualTo: function(firstParam, secondParm){
    if (firstParam !== secondParm){
      testId.innerHTML += ("<ul> Assertion failed: " + " is not truthy </ul>");
    } else {
      testId.innerHTML += ("<ul> Assertion passed: </ul>")
    }
  }
};

function describe (description, test){
  testId.innerHTML += description
  test();
}
