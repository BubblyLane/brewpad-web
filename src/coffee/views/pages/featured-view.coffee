define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/featured"

  class FeaturedView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-featured"

    events:
      "click .home": "on_click_home"

    initialize: ->
      @template = Templates["pages/featured"]

    render: =>
      context = {}
      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
