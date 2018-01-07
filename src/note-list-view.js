(function(exports) {

  const list = document.getElementById('list')

  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getNotesView = function() {
    var string = ""
    var notes = this.noteList.notes

    for (var i = 0; i < notes.length; i++){
    string += "<li><a href=notes/" + notes[i].id + ">" + this.first20Chars(notes[i].text) + "</a></li>"
    }

    return string;

  }

  NoteListView.prototype.first20Chars = function(text) {
    return text.substring(0,20)
  }

  exports.NoteListView = NoteListView;


})(this);
