define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  App = require "app"

  class AppRouter extends Backbone.Router
    routes:
      "match-maker": "match_maker"
      "featured-beers": "featured_beers"
      "new-arrivals": "new_arrivals"
      "about-us": "about_us"

    match_maker: ->
      console.log "match_maker"

    featured_beers: ->
      console.log "match_maker"
      App.model.set "state": "featured"

    new_arrivals: ->
      console.log "match_maker"

    about_us: ->
      console.log "match_maker"
      App.model.set "state": "about-us"
