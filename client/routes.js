//local host:3000

Router.configure({

  layoutTemplate : 'AppLayout'

});


Router.route('/', function() {
  //this is the section where we want stuff to go into yield
  //first initial page

  // this.render('login');
  this.render('dashboard');


});

