// Template.login.events({

//   'submit form' : function(event) {

//     event.preventDefault();
//     console.log('Form submitted.');
//     var emailVar = event.target.loginEmail.value;
//     var passwordVar = event.target.loginPassword.value;

//     if (Meteor.loginWithPassword(emailVar, passwordVar) && Meteor.loggingIn()) {

//       console.log('inside');
//       Router.go('/dashboard');

//     }

//     var error = document.querySelector('#errorMsg');
//     error.innerHTML = 'Incorrect Email or Password. If you need an account please click below';

//   }

// });

// Template.signup.events({

//   'submit form' : function(event) {

//     event.preventDefault();
//     var emailVar = event.target.registerEmail.value;
//     var passwordVar = event.target.registerPassword.value;

//     Accounts.createUser({

//       email : emailVar,
//       password : passwordVar

//     });

//     Router.go('/dashboard');

//   }

// });