
(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.printListToHTML = function() {
    list.innerHTML = "<li><div>" + this.noteList + "</div></li>"
  }

  exports.NoteListView = NoteListView;


})(this);
