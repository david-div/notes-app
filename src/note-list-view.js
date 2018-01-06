(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getNotesView = function() {
    var string = ""
    var noOfNotes = this.noteList.notes.length

    for (var i = 0; i < noOfNotes; i++){
    string += "<li>" + this.first20Chars(this.noteList.notes[i].text) + "</li>"
    }

    return string;

  }

  NoteListView.prototype.first20Chars = function(text) {
    return text.substring(0,20)
  }

  exports.NoteListView = NoteListView;


})(this);
