class noteListView {
  
  constructor(noteList) {
    this.noteList = noteList
  }

  returnNoteList() {
    for(var i = 0; i <= this.noteList.notes.length-1; i ++) {
      return this.noteList.notes[i]
    }
    
    
    //this.noteList.notes
  }

  output() {
    var htmlString = "<ul>";
    var notes = this.noteList.notes//returnNoteList()

    var htmlString = "<ul>";
    for(var index = 0; index <= notes.length-1; index++) {
      
      // var noteTwenty = notes[index].split('')
      // while(noteTwenty.length > 20){
      //   noteTwenty.pop()
      // }

    htmlString += '<li><div><a href="#' + notes[index].id.toString() +'">' + notes[index].text.substring(0,20) + "</a></div></li>"
    console.log(htmlString)
    if(index == notes.length-1) 
      { htmlString += "</ul>" }
    }
    console.log(htmlString)
    return htmlString
  }

}