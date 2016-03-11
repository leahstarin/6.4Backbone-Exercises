var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ContactView = require('./views/views');
var models = require('./models/models');

$(document).ready(function(){
  var contact = new models.Contact();
  var contactView = new ContactView.ContactView({model: contact});
  $('.container').html(contactView.render().el);
  console.log(contactView);
});
