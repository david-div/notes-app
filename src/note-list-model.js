(function(exports){

  function NoteList(){
    this.notes = []
    this.id = 0
  }

  NoteList.prototype.getNotes = function() {
    return this.notes
  }

  NoteList.prototype.addNote = function (text) {
    var newNote = new Note(text, this.id)
    this.id += 1
    this.notes.push(newNote)

  };

  exports.NoteList = NoteList;

})(this);
