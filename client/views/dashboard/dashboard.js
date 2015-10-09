Template.dashboard.events({

  // eventname  selector


  'submit #addTaskForm' : function(evt, template) { // template is blaze template instance.  blaze is the renedering engine
    evt.preventDefault(); // prevents page from reloading

    Tasks.insert({

      title : evt.target.title.value,
      description : evt.target.description.value,
      createdAt : Date.now(),
      status : 1

    });

    title: evt.target.title.value = '';
    description: evt.target.description.value = '';
  },

  // delete button
  'click .deleteTask': function(evt, template){
    evt.preventDefault();
    Tasks.remove({
      _id: this._id
    });
  },

  'click #taskItem' : function(evt, template){
    evt.preventDefault();
  },

  'click .next' : function(evt, template){
    evt.preventDefault();
    console.log(this);
    var newStatus = this.status;
    newStatus++;
    Tasks.update(this._id, {$set: {status: newStatus}});
  }
});



Template.dashboard.helpers({
  getToDoAllItems: function(){
    return Tasks.find({status: 1});
  }
});

Template.dashboard.helpers({
  getInProgressAllItems: function(){
    return Tasks.find({status: 2});
  }
});

