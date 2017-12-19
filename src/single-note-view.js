(function(exports){

  function singleNoteView(noteModel){
    this.noteModel = noteModel
  }

  singleNoteView.prototype.stringOfHTML = function () {
    return "<div>Favourite drink: seltzer</div>"
  }

  exports.singleNoteView = singleNoteView;

})(this);
