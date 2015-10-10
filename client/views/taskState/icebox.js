//make the icebox list

Template.icebox.helpers({

  getIceBoxItems : function() {

    if (Meteor.user()._id === this.author) {

      return Tasks.find({ status : 0 });

    }

  }

});