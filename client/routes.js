//local host:3000

Router.configure({

  layoutTemplate : 'AppLayout'

});

Router.route('/', function() {

  this.render('dashboard');

});

Router.route('/icebox', function() {

  this.render('dashboard-icebox');

});

