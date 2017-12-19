(function(exports){

  function NoteController(noteList){
    this.noteList = noteList
  }

  NoteController.prototype.printToDOM = function () {
    const noteListView = new NoteListView(this.noteList)
    noteListView.printListToHTML();
  };

  exports.NoteController = NoteController;


})(this);
