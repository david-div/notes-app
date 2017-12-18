(function(exports) {
  function testCircleRadiusDefaultsTo10(){
    var circle = new Circle();

    if (circle.radius !== 10) {
      throw new Error("Circle size is not 10");
    } else {
      console.log("Test passes")
    }
  };

  testCircleRadiusDefaultsTo10();
})(this);
