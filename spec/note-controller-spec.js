(function(exports){

  const noteList = new NoteList
  const noteController = new NoteController(noteList)

  function canBeInstansiated(){
    assert.isTrue(noteController instanceof NoteController )
  }

  canBeInstansiated();

})(this)
