class noteListModel {

  constructor() {
    this.notes = []
    this.id = 0
  }

  addNote(note) {
    this.notes.push(new noteApp(note, this.id))
    this.id ++
  }

  showNotes() {
    return this.notes
  }
  
}