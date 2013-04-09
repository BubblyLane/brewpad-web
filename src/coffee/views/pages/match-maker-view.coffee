define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/match-maker"

  class MatchMakerView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-match-maker"

    events:
      "click .home": "on_click_home"

    initialize: ->
      @template = Templates["pages/match-maker"]

    render: =>
      context = {}
      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
