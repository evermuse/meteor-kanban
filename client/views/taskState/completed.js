//make the completed list

Template.completed.helpers({

  getCompletedAllItems : function() {

    return Tasks.find({ status : 3 });

  }

});