define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/new-arrivals"

  require "templates/_header"

  class NewArrivalsView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-new-arrivals"

    events:
      "click .btn-home": "on_click_home"

    initialize: ->
      @template = Templates["pages/new-arrivals"]

    render: =>
      context =
        "title": "New Arrivals"
        "title-id": "new-arrivals"

      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
