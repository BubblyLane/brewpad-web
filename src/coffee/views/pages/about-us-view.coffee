define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/about-us"

  class AboutUsView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-about-us"

    events:
      "click .home": "on_click_home"

    initialize: ->
      @template = Templates["pages/about-us"]

    render: =>
      context = {}
      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"


