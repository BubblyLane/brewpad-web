var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, App, AppRouter, Backbone, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  App = require("app");
  return AppRouter = (function(_super) {
    __extends(AppRouter, _super);

    function AppRouter() {
      _ref = AppRouter.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppRouter.prototype.routes = {
      "match-maker": "match_maker",
      "featured-beers": "featured_beers",
      "new-arrivals": "new_arrivals",
      "about-us": "about_us"
    };

    AppRouter.prototype.match_maker = function() {
      return console.log("match_maker");
    };

    AppRouter.prototype.featured_beers = function() {
      console.log("match_maker");
      return App.model.set({
        "state": "featured"
      });
    };

    AppRouter.prototype.new_arrivals = function() {
      return console.log("match_maker");
    };

    AppRouter.prototype.about_us = function() {
      console.log("match_maker");
      return App.model.set({
        "state": "about-us"
      });
    };

    return AppRouter;

  })(Backbone.Router);
});
