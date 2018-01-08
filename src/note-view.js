(function(exports){

  function SingleNoteView(noteModel){
    this.noteModel = noteModel
  }

  SingleNoteView.prototype.stringOfHTML = function () {
    return "<div>" + this.note.text + "</div>"
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
