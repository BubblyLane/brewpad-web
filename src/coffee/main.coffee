define (require) ->
  Application = require "app"
  AppRouter = require "app-router"

  new AppRouter()
  Backbone.history.start()
