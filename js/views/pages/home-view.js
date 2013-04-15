var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, Backbone, HomeView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/home");
  return HomeView = (function(_super) {
    __extends(HomeView, _super);

    function HomeView() {
      this.on_click_btn_about_us = __bind(this.on_click_btn_about_us, this);
      this.on_click_new_arrivals = __bind(this.on_click_new_arrivals, this);
      this.on_click_btn_featured = __bind(this.on_click_btn_featured, this);
      this.on_click_btn_match_maker = __bind(this.on_click_btn_match_maker, this);
      this.render = __bind(this.render, this);      _ref = HomeView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    HomeView.prototype.attributes = {
      "class": "page",
      "id": "page-home"
    };

    HomeView.prototype.events = {
      "click #btn-match-maker": "on_click_btn_match_maker",
      "click #btn-featured": "on_click_btn_featured",
      "click #btn-new-arrivals": "on_click_new_arrivals",
      "click #btn-about-us": "on_click_btn_about_us"
    };

    HomeView.prototype.initialize = function() {
      return this.template = Templates["pages/home"];
    };

    HomeView.prototype.render = function() {
      var context, html;

      context = {};
      html = this.template(context);
      return $(this.el).html(html);
    };

    HomeView.prototype.on_click_btn_match_maker = function() {
      console.log("match maker!");
      return this.model.set({
        "state": "match-maker"
      });
    };

    HomeView.prototype.on_click_btn_featured = function() {
      console.log("featured!");
      return this.model.set({
        "state": "featured"
      });
    };

    HomeView.prototype.on_click_new_arrivals = function() {
      console.log("new arrivlas!");
      return this.model.set({
        "state": "new-arrivals"
      });
    };

    HomeView.prototype.on_click_btn_about_us = function() {
      console.log("about us!");
      return this.model.set({
        "state": "about-us"
      });
    };

    return HomeView;

  })(Backbone.View);
});
