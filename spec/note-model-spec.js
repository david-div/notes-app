(function(exports){

  function testNoteCanBeAdded(){
    var note = new Note("First note");

    assert.isEqualTo(note.getText(), 'First note')
  }


  testNoteCanBeAdded();


})(this)
