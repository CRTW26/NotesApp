class noteController {
  constructor(listModel) {
    this.listmodel = listModel
    this.noteview = new noteListView(this.listmodel)
  }

  // putting HTML on page 
  getHtml() {
    return this.noteview.output();
  }

  insertHtml() {
    var noteHtml = document.getElementById('app')
    console.log(noteHtml)
    noteHtml.innerHTML = this.getHtml();
  }

// can see full notes
  controller = this 
  showText() {
    console.log(controller.listmodel.notes[1].text)
    console.log(location)
    console.log(location.hash.split('#'))
    console.log(controller.listmodel.notes)
    console.log(controller.listmodel.notes[2])
    let text = controller.listmodel.notes[location.hash.split('#')[1]].text;
    document.getElementById('app').innerHTML = text; 
  }

  urlChange(){
    window.addEventListener("hashchange", this.showText);
  }
   
//submitting a new note
  submitEvents() {
    let form = document.getElementById('text')
    form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    console.log(e.target.elements[0].value);
    this.addNote(e.target.elements[0].value);
    this.insertHtml();
    console.log('event triggered')
    }) 
  }

  addNote(eventResult) {
    let note = eventResult
    this.listmodel.addNote(note);
    console.log(this.listmodel)
  }
}

var listModel = new noteListModel
var controller = new noteController(listModel)
listModel.addNote("This is a note")
listModel.addNote("This is another note")
listModel.addNote("This is another really long note and I should not be able to see the end of it")
controller.submitEvents();
controller.insertHtml();
controller.urlChange();


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

  // makeURLChange() {
  //   window.addEventListener("hashchange", this.showText);
  // }
  // showText() {
  //   this.getNote(this.getNoteFromURL(window.location))
  // }
  // getNoteFromURL(location) {
  //   return location.hash.split('#')[1];
  // }
  // getNote(note) {
  //   document.getElementById('app').innerHTML = note
  // }