define ["backbone"], (Backbone) ->
  class App extends Backbone.Model
    defaults:
      "state": "home"

    initialize: ->
      console.log "Starting BrewPad..."
