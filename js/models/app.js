var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(["backbone"], function(Backbone) {
  var App, _ref;

  return App = (function(_super) {
    __extends(App, _super);

    function App() {
      _ref = App.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    App.prototype.defaults = {
      "state": "home"
    };

    App.prototype.initialize = function() {
      return console.log("Starting BrewPad...");
    };

    return App;

  })(Backbone.Model);
});
