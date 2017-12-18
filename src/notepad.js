(function(exports){

  function NotePad(){
    this.notes = []
  };

  NotePad.prototype.addNote = function (note) {
    this.notes.push(note)
  };

  NotePad.prototype.showNotes = function(){
    for (var i = 0; i < this.notes.length; i ++ ){
      console.log(this.notes[i])
    }
  }

exports.NotePad = NotePad;

})(this);
