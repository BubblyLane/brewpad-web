define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/featured"

  require "templates/_header"

  class FeaturedView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-featured"

    events:
      "click .btn-home": "on_click_home"

    initialize: ->
      @template = Templates["pages/featured"]

    render: =>
      context =
        "title": "Featured Beers"
        "title-id": "featured-beers"

      html = @template context
      $(@el).html html

    on_click_home: =>
      @model.set "state": "home"
