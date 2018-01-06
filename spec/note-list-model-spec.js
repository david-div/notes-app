(function(exports){

  const noteList = new NoteList()
  noteList.addNote("Note 1")
  noteList.addNote("Note 2")

  function addNoteToNoteListTest1(){
    var note = noteList.notes[0].getText()
    assert.isEqualTo(note, "Note 1")
  }

  function addNoteToNoteListTest2(){
    var note = noteList.notes[1].getText()
    assert.isEqualTo(note, "Note 2")
  }

  function idIsAddedtoNote(){
    var idNote1 = noteList.notes[0].id
    assert.isEqualTo(idNote1, 1)
  }

  addNoteToNoteListTest1();
  addNoteToNoteListTest2();
  idIsAddedtoNote();


})(this)
