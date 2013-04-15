define(function(require) {
  var AppRouter, Application;

  Application = require("app");
  AppRouter = require("app-router");
  new AppRouter();
  return Backbone.history.start();
});
