define(function(require) {
  var AppModel, AppView, Application;

  AppModel = require("models/app");
  AppView = require("views/app-view");
  Application = (function() {
    function Application() {
      this.model = new AppModel();
      this.view = new AppView({
        "model": this.model
      });
      this.view.render();
    }

    return Application;

  })();
  return new Application();
});
