(function(exports){

  describe("Test note can be added", function (){
      var note = new Note("First note");
      assert.isEqualTo(note.getText(), 'First note')
    })


})(this)
