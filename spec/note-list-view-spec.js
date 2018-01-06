(function(exports){

  const list = document.getElementById('list')

  function getNotesViewTest(){
    var noteList = new NoteList()
    noteList.addNote("Note 1")
    noteList.addNote("Note 2")
    var noteListView = new NoteListView(noteList)
    var view = noteListView.getNotesView()
    assert.isEqualTo(view, "<li>Note 1</li><li>Note 2</li>")
  }

  function getNotesViewHas20CharsTest(){
    var noteList = new NoteList()
    var note = "So how about that ride in?"
    var note20Car = note.substring(0,20)
    noteList.addNote(note)
    var noteListView = new NoteListView(noteList)
    var view = noteListView.getNotesView()
    assert.isEqualTo(view, "<li>" + note20Car + "</li>")
  }

  getNotesViewTest();
  getNotesViewHas20CharsTest();



})(this)
