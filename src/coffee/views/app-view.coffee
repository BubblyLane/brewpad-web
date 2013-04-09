define (require) ->
  $ = require "jquery"
  Backbone = require "backbone"
  Templates = require "templates/app"
  HomeView = require "views/pages/home-view"
  FeaturedView = require "views/pages/featured-view"
  MatchMakerView = require "views/pages/match-maker-view"
  RecommendView = require "views/pages/recommend-view"
  NewArrivalsView = require "views/pages/new-arrivals-view"
  AboutUsView = require "views/pages/about-us-view"

  class AppView extends Backbone.View

    initialize: ->
      @template = Templates["app"]

      @listenTo @model, "change:state", @on_change_state


    render: =>
      context = {}
      html = @template context
      $("body").append html

      home_view = new HomeView("model": @model)
      home_view.render()

      featured_view = new FeaturedView("model": @model)
      featured_view.render()

      match_maker_view = new MatchMakerView("model": @model)
      match_maker_view.render()

      recommend_view = new RecommendView("model": @model)
      recommend_view.render()

      new_arrivals_view = new NewArrivalsView("model": @model)
      new_arrivals_view.render()

      about_us_view = new AboutUsView("model": @model)
      about_us_view.render()

      el_target = $(".inner-container")
      el_target.append home_view.el
      el_target.append featured_view.el
      el_target.append match_maker_view.el
      el_target.append recommend_view.el
      el_target.append new_arrivals_view.el
      el_target.append about_us_view.el

      @on_change_state()

    on_change_state: =>
      state = @model.get "state"
      console.log "state is now: ", state

      $(".page").hide()
      $("#page-#{ state }").show()
