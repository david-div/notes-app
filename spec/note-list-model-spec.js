(function(exports){

  const noteList = new NoteList()
  noteList.addNote("Note 1")
  noteList.addNote("Note 2")

  describe("And note to notelist", function(){
    var note = noteList.notes[0].getText()
    assert.isEqualTo(note, "Note 1")
  });

  describe("Add a second note to noteList", function(){
    var note = noteList.notes[1].getText()
    assert.isEqualTo(note, "Note 2")
  });

  describe("id is Added to note", function(){
    var idNote1 = noteList.notes[0].id
    assert.isEqualTo(idNote1, 0)
  })


})(this)
