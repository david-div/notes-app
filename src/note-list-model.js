(function(exports) {

  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note)
  };

  NoteList.prototype.showNotes = function() {
    for (var i = 0; i < this.notes.length; i++) {
      console.log(this.notes[i])
    }
  }

  exports.NoteList = NoteList;

})(this);
