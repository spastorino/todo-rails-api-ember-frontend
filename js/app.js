/*global Ember, DS, Todos:true */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost:3000'
});
