(function(exports){

  const list = document.getElementById('list')

  const noteList = new NoteList()
  noteList.addNote("Note 1")
  noteList.addNote("Note 2")

  const noteListView = new NoteListView(noteList)

  function getNotesViewTest(){
    var view = noteListView.getNotesView()
    assert.isEqualTo(view, "<li>Note 1<li><li>Note 2<li>")
  }

  getNotesViewTest();


})(this)
