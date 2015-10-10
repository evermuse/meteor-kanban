Template.dashboardIcebox.events({

  // eventname  selector

  'submit #addTaskForm' : function(evt, template) { // template is blaze template instance.  blaze is the renedering engine
    evt.preventDefault(); // prevents page from reloading

    //inserts the tasks into the db
    Tasks.insert({

      author : Meteor.user()._id,
      title : evt.target.title.value,
      description : evt.target.description.value,
      createdAt : Date.now(),
      status : 1

    });

    //clears the input boxes
    title: evt.target.title.value = '';
    description: evt.target.description.value = '';
  },

  // delete button
  'click .deleteTask' : function(evt, template){

    if (Meteor.user()._id === this.author) {

      evt.preventDefault();
      Tasks.remove({
        _id: this._id
      });

    } else {

      alert('it appears you\'re not currently logged in');

    }

  },

  //space to code the description/button hide feature
  'click #taskItem' : function(evt, template) {
    evt.preventDefault();
  },

  //move taskItem to next column
  'click .next' : function(evt, template) {

    if (Meteor.user()._id === this.author) {

      evt.preventDefault();
      var newStatus = this.status;
      newStatus++;
      Tasks.update(this._id, {$set: {status: newStatus}}); //could be refactored to increment $inc >> http://docs.mongodb.org/manual/reference/operator/update/inc/

    } else {

      alert('it appears you\'re not currently logged in');

    }

  },

  //move item to previous column
  'click .previous' : function(evt, template) {

    if (Meteor.user()._id === this.author) {

      evt.preventDefault();
      var newStatus = this.status;
      newStatus--;
      Tasks.update(this._id, {$set: {status: newStatus}});

    } else {

      alert('it appears you\'re not currently logged in');

    }

  }

});