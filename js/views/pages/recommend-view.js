var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, Backbone, RecommendView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/recommend");
  require("templates/_header");
  return RecommendView = (function(_super) {
    __extends(RecommendView, _super);

    function RecommendView() {
      this.on_click_home = __bind(this.on_click_home, this);
      this.render = __bind(this.render, this);      _ref = RecommendView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RecommendView.prototype.attributes = {
      "class": "page",
      "id": "page-recommend"
    };

    RecommendView.prototype.events = {
      "click .btn-home": "on_click_home"
    };

    RecommendView.prototype.initialize = function() {
      return this.template = Templates["pages/recommend"];
    };

    RecommendView.prototype.render = function() {
      var context, html;

      context = {
        "title": "Recommended",
        "title-id": "recommended"
      };
      html = this.template(context);
      return $(this.el).html(html);
    };

    RecommendView.prototype.on_click_home = function() {
      return this.model.set({
        "state": "home"
      });
    };

    return RecommendView;

  })(Backbone.View);
});
