define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/new-arrivals"

  class NewArrivalsView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-new-arrivals"

    events:
      "click .home": "on_click_home"

    initialize: ->
      @template = Templates["pages/new-arrivals"]

    render: =>
      context = {}
      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"


