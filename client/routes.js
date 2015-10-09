//local host:3000

Router.configure({

  layoutTemplate : 'AppLayout'

});


Router.route('/signup', function() {
  //this is the section where we want stuff to go into yield
  //first initial page

  this.render('signup');

});

Router.route('/', function() {
  //this is the section where we want stuff to go into yield
  //first initial page

  this.render('login');

});
// Router.route('/signIn', function() {

// });

Router.route('/dashboard', function() {

  this.render('dashboard');

});