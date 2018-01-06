(function(exports){

  function NoteList(){
    this.notes = []
    this.id = 0
  }

  NoteList.prototype.getNotes = function() {
    return this.notes
  }

  NoteList.prototype.addNote = function (text) {
    this.id += 1
    var newNote = new Note(text, this.id)
    this.notes.push(newNote)

  };

  exports.NoteList = NoteList;

})(this);
