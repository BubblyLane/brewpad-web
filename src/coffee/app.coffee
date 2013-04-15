define (require) ->
  AppModel = require "models/app"
  AppView = require "views/app-view"

  class Application
    constructor: ->
      @model = new AppModel()

      @view = new AppView("model": @model)
      @view.render()

  return new Application()
