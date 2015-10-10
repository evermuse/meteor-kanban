//local host:3000

Router.configure({

  layoutTemplate : 'AppLayout'

});

Router.route('/', function() {

  this.render('dashboard');

});

Router.route('/icebox', function() {

  this.render('dashboardIcebox');

});

Router.route('/accessDenied', function() {

  this.render('accessDenied');

});

Router.onBeforeAction(function() {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.user()) {

    if (Meteor.loggingIn()) {

      this.render('dashboard');

    }

    this.render('accessDenied');

  } else {

     this.next();

  }

});

