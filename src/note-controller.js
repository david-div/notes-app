(function(exports){

  const app = document.getElementById('app')

  function NoteController(noteList){
    this.noteList = noteList
    this.view = new NoteListView(noteList)
  }

  NoteController.prototype.addToHTML = function () {
    app.innerHTML = this.view.getNotesView();
  };

  exports.NoteController = NoteController;


})(this);
