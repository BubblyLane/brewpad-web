var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, Backbone, NewArrivalsView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/new-arrivals");
  require("templates/_header");
  return NewArrivalsView = (function(_super) {
    __extends(NewArrivalsView, _super);

    function NewArrivalsView() {
      this.on_click_home = __bind(this.on_click_home, this);
      this.render = __bind(this.render, this);      _ref = NewArrivalsView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    NewArrivalsView.prototype.attributes = {
      "class": "page",
      "id": "page-new-arrivals"
    };

    NewArrivalsView.prototype.events = {
      "click .btn-home": "on_click_home"
    };

    NewArrivalsView.prototype.initialize = function() {
      return this.template = Templates["pages/new-arrivals"];
    };

    NewArrivalsView.prototype.render = function() {
      var context, html;

      context = {
        "title": "New Arrivals",
        "title-id": "new-arrivals"
      };
      html = this.template(context);
      return $(this.el).html(html);
    };

    NewArrivalsView.prototype.on_click_home = function() {
      return this.model.set({
        "state": "home"
      });
    };

    return NewArrivalsView;

  })(Backbone.View);
});
