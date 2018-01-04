(function(exports){

  const list = document.getElementById('list')
  const note = new Note("Note 1")
  const noteListView = new NoteListView(note.getText())

  function getNotesViewTest(){
    var view = noteListView.getNotesView()
    assert.isEqualTo(view, "<li>Note 1<li>")
  }

  getNotesViewTest();


})(this)
