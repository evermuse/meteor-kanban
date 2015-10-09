//make the icebox list

Template.icebox.helpers({

  getIceBoxItems : function() {

    return Tasks.find({ status : 0 });

  }

});