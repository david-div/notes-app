(function(exports){

  function SingleNoteView(noteModel){
    this.noteModel = noteModel
  }

  SingleNoteView.prototype.showFullNote = function () {
    return "<div>" + this.noteModel + "</div>"
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
