//make the todo list

Template.todo.helpers({

  getToDoAllItems : function() {

    return Tasks.find({ status : 1 });

  }

});