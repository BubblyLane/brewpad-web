define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/pages/home"

  class HomeView extends Backbone.View
    attributes:
      "class": "page"
      "id": "page-home"

    events:
      "click #btn-match-maker": "on_click_btn_match_maker"
      "click #btn-featured": "on_click_btn_featured"
      "click #btn-new-arrivals": "on_click_new_arrivals"
      "click #btn-about-us": "on_click_btn_about_us"

    initialize: ->
      @template = Templates["pages/home"]

    render: =>
      context = {}
      html = @template context
      $(@el).html html

    on_click_btn_match_maker: =>
      console.log "match maker!"
      @model.set "state": "match-maker"

    on_click_btn_featured: =>
      console.log "featured!"
      @model.set "state": "featured"

    on_click_new_arrivals: =>
      console.log "new arrivlas!"
      @model.set "state": "new-arrivals"

    on_click_btn_about_us: =>
      console.log "about us!"
      @model.set "state": "about-us"
