var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, AboutUsView, Backbone, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/about-us");
  require("templates/_header");
  return AboutUsView = (function(_super) {
    __extends(AboutUsView, _super);

    function AboutUsView() {
      this.on_click_home = __bind(this.on_click_home, this);
      this.render = __bind(this.render, this);      _ref = AboutUsView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    AboutUsView.prototype.attributes = {
      "class": "page",
      "id": "page-about-us"
    };

    AboutUsView.prototype.events = {
      "click .btn-home": "on_click_home"
    };

    AboutUsView.prototype.initialize = function() {
      return this.template = Templates["pages/about-us"];
    };

    AboutUsView.prototype.render = function() {
      var context, html;

      context = {
        "title": "About Us",
        "title-id": "about-us"
      };
      html = this.template(context);
      return $(this.el).html(html);
    };

    AboutUsView.prototype.on_click_home = function() {
      return this.model.set({
        "state": "home"
      });
    };

    return AboutUsView;

  })(Backbone.View);
});
