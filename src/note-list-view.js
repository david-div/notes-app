(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getNotesView = function() {
    var string = ""
    var noOfNotes = this.noteList.notes.length

    for (var i = 0; i < noOfNotes; i++){
    string += "<li>" + this.noteList.notes[i].text + "<li>"
    }

    return string;

  }

  exports.NoteListView = NoteListView;


})(this);
