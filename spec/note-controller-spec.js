class noteControllerSpec {

  static instantiatesWithnoteApp() {
    
    var listModel = new noteListModel
    var controller = new noteController(listModel)
    // console.log(listmodel.constructor.name)
    // console.log(controller.listmodel.constructor.name)
    assert.isTrue("checking it instantiates with a list model", controller.listmodel.constructor.name === listModel.constructor.name)
  }

  static addsANote() {
    var listModel = new noteListModel
    var controller = new noteController(listModel)
    assert.isTrue("instantiates with a note ", controller.listmodel.showNotes()[0] === "Favourite drink: seltzer")
  }
}

noteControllerSpec.instantiatesWithnoteApp()
noteControllerSpec.addsANote()