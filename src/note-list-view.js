
(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.printListToHTML = function() {
    list.innerHTML = "<li>" + this.noteList + "</li>"
  }

  exports.NoteListView = NoteListView;


})(this);
