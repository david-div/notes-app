(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getNotesView = function() {
    var string = ""

    for (var i = 0; i < this.noteList.notes.length; i++){
    string += "<li>" + this.noteList.notes[i].text + "<li>"
    }

    return string;

  }

  exports.NoteListView = NoteListView;


})(this);
