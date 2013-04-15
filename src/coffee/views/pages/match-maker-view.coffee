define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/match-maker"

  require "templates/_header"

  class MatchMakerView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-match-maker"

    events:
      "click .btn-home": "on_click_home"

    initialize: ->
      @template = Templates["pages/match-maker"]

    render: =>
      context =
        "title": "Beer Match Maker"
        "title-id": "match-maker"

      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
