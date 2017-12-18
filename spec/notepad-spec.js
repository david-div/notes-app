(function(exports){

  function testNoteCanBeAdded(){
    var notepad = new NotePad();
    notepad.addNote('First note')

    assert.isEqualTo(notepad.notes[0], 'First note')
  }

  testNoteCanBeAdded();


})(this)
