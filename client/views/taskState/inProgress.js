//make inProgress task list

Template.inProgress.helpers({

  getInProgressAllItems : function() {

    return Tasks.find({ status : 2});

  }

});