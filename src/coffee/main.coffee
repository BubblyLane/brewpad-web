define ["models/app", "views/app-view"], (App, AppView) ->


  # Create the App
  app = new App()

  app_view = new AppView("model": app)
  app_view.render()
