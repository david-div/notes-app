(function(exports){

  const noteList = new NoteList
  const noteController = new NoteController(noteList)

  describe("Can create a new instance of NoteController", function(){
    assert.isTrue(noteController instanceof NoteController )
  })

})(this)
