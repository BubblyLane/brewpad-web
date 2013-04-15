var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, AboutUsView, AppView, Backbone, FeaturedView, HomeView, MatchMakerView, NewArrivalsView, RecommendView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/app");
  HomeView = require("views/pages/home-view");
  FeaturedView = require("views/pages/featured-view");
  MatchMakerView = require("views/pages/match-maker-view");
  RecommendView = require("views/pages/recommend-view");
  NewArrivalsView = require("views/pages/new-arrivals-view");
  AboutUsView = require("views/pages/about-us-view");
  return AppView = (function(_super) {
    __extends(AppView, _super);

    function AppView() {
      this.on_change_state = __bind(this.on_change_state, this);
      this.render = __bind(this.render, this);      _ref = AppView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AppView.prototype.initialize = function() {
      this.template = Templates["app"];
      return this.listenTo(this.model, "change:state", this.on_change_state);
    };

    AppView.prototype.render = function() {
      var about_us_view, context, el_target, featured_view, home_view, html, match_maker_view, new_arrivals_view, recommend_view;

      context = {};
      html = this.template(context);
      $("body").append(html);
      home_view = new HomeView({
        "model": this.model
      });
      home_view.render();
      featured_view = new FeaturedView({
        "model": this.model
      });
      featured_view.render();
      match_maker_view = new MatchMakerView({
        "model": this.model
      });
      match_maker_view.render();
      recommend_view = new RecommendView({
        "model": this.model
      });
      recommend_view.render();
      new_arrivals_view = new NewArrivalsView({
        "model": this.model
      });
      new_arrivals_view.render();
      about_us_view = new AboutUsView({
        "model": this.model
      });
      about_us_view.render();
      el_target = $(".inner-container");
      el_target.append(home_view.el);
      el_target.append(featured_view.el);
      el_target.append(match_maker_view.el);
      el_target.append(recommend_view.el);
      el_target.append(new_arrivals_view.el);
      el_target.append(about_us_view.el);
      return this.on_change_state();
    };

    AppView.prototype.on_change_state = function() {
      var state;

      state = this.model.get("state");
      console.log("state is now: ", state);
      $(".page").hide();
      return $("#page-" + state).show();
    };

    return AppView;

  })(Backbone.View);
});
