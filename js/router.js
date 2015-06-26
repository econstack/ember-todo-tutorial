Todos.Router.map(function() {
	this.resource('todos', {path: '/'});
});

// model function - returns all existing todos
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
