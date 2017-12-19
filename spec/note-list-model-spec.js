(function(exports){

  function testNoteCanBeAdded(){
    var noteList = new NoteList();
    noteList.addNote('First note')

    assert.isEqualTo(noteList.notes[0], 'First note')
  }


  testNoteCanBeAdded();


})(this)
