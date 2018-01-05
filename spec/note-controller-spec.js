(function(exports){

  const noteController = new NoteController()

  function canBeInstansiated(){
    assert.isTrue(noteController instanceof NoteController )
  }

  canBeInstansiated();

})(this)
