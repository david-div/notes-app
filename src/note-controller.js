(function(exports){

  const app = document.getElementById('app')

  function NoteController(noteList){
    this.noteList = noteList
    this.noteList.addNote("Favourite drink: seltzer")
    this.view = new NoteListView(this.noteList)
  }

  NoteController.prototype.addToHTML = function () {
    app.innerHTML = this.view.getNotesView();
  };

  exports.NoteController = NoteController;


})(this);
