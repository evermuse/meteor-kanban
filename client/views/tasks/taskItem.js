Template.taskItem.helpers({

  getTimeFromCreation : function() {

    console.log(this);
    console.log(this.createdAt);

    return moment(this.createdAt).from();

  }

});