(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getNotesView = function() {
    return "<li>" + this.noteList + "<li>"
  }

  exports.NoteListView = NoteListView;


})(this);
