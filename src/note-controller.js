(function(exports){

  const app = document.getElementById('app')

  function NoteController(noteList){
    this.noteList = noteList
    this.noteList.addNote("Favourite drink: seltzer")
    this.noteList.addNote("Favourite food: chicken nuggets")
  }

  // adds shortened notes to DOM
  NoteController.prototype.addToHTML = function () {
    app.innerHTML = new NoteListView(this.noteList).getNotesView();
  };

  // returns the note based on id
  NoteController.prototype.getNoteText = function (){
    var noteId = window.location.hash.split("/")[1]
    var text =  this.noteList.notes[noteId].text
    return text
  }

  NoteController.prototype.showNoteText = function () {
    var text = this.getNoteText()
    var singleNoteView = new SingleNoteView(text)
    app.innerHTML = singleNoteView.stringOfHTML();
  };

  NoteController.prototype.showFullNoteForCurrentPage = function () {
    var that = this;
    var note = function(){
      that.showNoteText();
    }

    window.addEventListener("hashchange", not )
  }

  exports.NoteController = NoteController;


})(this);
