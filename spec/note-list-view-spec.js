(function(exports){

  const list = document.getElementById('list')
  const noteListView = new NoteListView('Note List 1');

  function noteAddedtoHTMLElement(){
    noteListView.printListToHTML()
    assert.isEqualTo('Note List 1', list.textContent)
  }

  noteAddedtoHTMLElement();


})(this)
