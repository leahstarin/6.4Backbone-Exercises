var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var Contact = Backbone.Model.extend({
 idAttribute: '_id',
 url: 'http://tiny-lasagna-server.herokuapp.com/collections/Leahscontacts'
});

module.exports = {
 'Contact': Contact
};
