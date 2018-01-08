(function(exports){

  const app = document.getElementById('app')

  function NoteController(noteList){
    this.noteList = noteList
    this.noteList.addNote("Favourite drink: seltzer")
    this.view = new NoteListView(this.noteList)
    this.singleNoteView = new SingleNoteView()
  }

  // adds shortened notes to DOM
  NoteController.prototype.addToHTML = function () {
    app.innerHTML = this.view.getNotesView();
  };

  NoteController.prototype.showNoteText = function (){
    var noteId = window.location.hash.split("/")[1]
    var note =  this.noteList.notes[noteId].text
    app.innerHTML = note
  }

  exports.NoteController = NoteController;


})(this);
