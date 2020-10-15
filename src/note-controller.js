class noteController {
  constructor(listModel) {
    this.listmodel = listModel
    this.noteview = new noteListView(this.listmodel)
  }

  getHtml() {
    return this.noteview.output();
  }

  insertHtml() {
    var noteHtml = document.getElementById('app')
    console.log(noteHtml)
    noteHtml.innerHTML = this.getHtml();
  }

//   displayChange() {
  
//     let notecontroller = this;
//     listenForUrlChange();

//   function listenForUrlChange() {
//     window.addEventListener('hashchange', showNewPage);
//   }

//   function showNewPage(){
//     getNote(getNoteFromURL(window.location));
//   }

//   function getNoteFromURL(location) {
//     return location.hash.split('#')[1];
//   }

//   function getNote(noteurl) {
//     let id = noteurl.substring(noteurl.indexOf("/") + 1);
//     console.log(id)
//     let note = notecontroller.noteview.noteList.notes[id];
//     let list = document.getElementById('notes')
//     list.innerHTML = notecontroller.noteview.output();
//     let singlenoteview = new singleNoteView(note);
//     let div = document.getElementById('app')
//     div.insertHtml = singlenoteview.htmlify();
//   }
// }
    controller = this 
  showText() {
    console.log(controller.listmodel.notes[1].text)
    let text = controller.listmodel.notes[location.hash.split('#')[1]].text;
    document.getElementById('app').innerHTML = text; 
  }

  urlChange(){
    window.addEventListener("hashchange", this.showText);
  }
   
  // makeURLChange() {
  //   window.addEventListener("hashchange", this.showText);
  // }
  // showText() {
  //   this.getNote(getNoteFromURL(window.location))
  // }
  // getNoteFromURL(location) {
  //   return location.hash.split('#')[1];
  // }
  // getNote(note) {
  //   document.getElementById('app').innerHTML = note
  // }
}

var listModel = new noteListModel
var controller = new noteController(listModel)
listModel.addNote("This is a note")
listModel.addNote("This is another note")
listModel.addNote("This is another really long note and I should not be able to see the end of it")
controller.insertHtml();
controller.urlChange();



