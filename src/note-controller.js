(function(exports){

  const app = document.getElementById('app')

  function NoteController(noteList){
    this.noteList = noteList
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
    app.innerHTML = singleNoteView.showFullNote();
  };

  NoteController.prototype.showFullNoteForCurrentPage = function () {
    var that = this;
    var note = function(){
      that.showNoteText();
    }

    window.addEventListener("hashchange", note)
  }

  exports.NoteController = NoteController;


})(this);
