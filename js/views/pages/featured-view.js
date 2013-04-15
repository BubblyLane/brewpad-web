var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, Backbone, FeaturedView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/featured");
  require("templates/_header");
  return FeaturedView = (function(_super) {
    __extends(FeaturedView, _super);

    function FeaturedView() {
      this.on_click_home = __bind(this.on_click_home, this);
      this.render = __bind(this.render, this);      _ref = FeaturedView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    FeaturedView.prototype.attributes = {
      "class": "page",
      "id": "page-featured"
    };

    FeaturedView.prototype.events = {
      "click .btn-home": "on_click_home"
    };

    FeaturedView.prototype.initialize = function() {
      return this.template = Templates["pages/featured"];
    };

    FeaturedView.prototype.render = function() {
      var context, html;

      context = {
        "title": "Featured Beers",
        "title-id": "featured-beers"
      };
      html = this.template(context);
      return $(this.el).html(html);
    };

    FeaturedView.prototype.on_click_home = function() {
      return this.model.set({
        "state": "home"
      });
    };

    return FeaturedView;

  })(Backbone.View);
});
