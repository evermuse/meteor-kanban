// mock up for the html

Meteor.startup(function(){
  if (Tasks.find().count() === 0) {
    var task = [
      { id: 1,
        title: 'make it work',
        description: 'make the list',
      },

      { id: 2,
        title: 'make it move',
        description: 'next column',
      }
      ];
    for(var i = 0; i < task.length; i++){
      Tasks.insert({id: task[i].id, title: task[i].title, description: task[i].description, score: 0});
    }
  }
});