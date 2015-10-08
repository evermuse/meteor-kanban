Template.login.events({

  'submit form' : function(event) {

    event.preventDefault();
    console.log('Form submitted.');
    var emailVar = event.target.loginEmail.value;
    var passwordVar = event.target.loginPassword.value;
    Meteor.loginWithPassword(emailVar, passwordVar);

  }

});

Template.signup.events({

  'submit form' : function(event) {

    event.preventDefault();
    var emailVar = event.target.registerEmail.value;
    var passwordVar = event.target.registerPassword.value;

    Accounts.createUser({

      email : emailVar,
      password : passwordVar

    });
  }

});