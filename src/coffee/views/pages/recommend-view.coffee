define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/recommend"

  require "templates/_header"

  class RecommendView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-recommend"

    events:
      "click .btn-home": "on_click_home"

    initialize: ->
      @template = Templates["pages/recommend"]

    render: =>
      context =
        "title": "Recommended"
        "title-id": "recommended"

      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
