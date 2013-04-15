var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(function(require) {
  var $, Backbone, MatchMakerView, Templates, _ref;

  $ = require("jquery");
  Backbone = require("backbone");
  Templates = require("templates/pages/match-maker");
  require("templates/_header");
  return MatchMakerView = (function(_super) {
    __extends(MatchMakerView, _super);

    function MatchMakerView() {
      this.on_click_home = __bind(this.on_click_home, this);
      this.render = __bind(this.render, this);      _ref = MatchMakerView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    MatchMakerView.prototype.attributes = {
      "class": "page",
      "id": "page-match-maker"
    };

    MatchMakerView.prototype.events = {
      "click .btn-home": "on_click_home"
    };

    MatchMakerView.prototype.initialize = function() {
      return this.template = Templates["pages/match-maker"];
    };

    MatchMakerView.prototype.render = function() {
      var context, html;

      context = {
        "title": "Beer Match Maker",
        "title-id": "match-maker"
      };
      html = this.template(context);
      return $(this.el).html(html);
    };

    MatchMakerView.prototype.on_click_home = function() {
      return this.model.set({
        "state": "home"
      });
    };

    return MatchMakerView;

  })(Backbone.View);
});
