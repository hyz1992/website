System.register(["./application.73e65.js"], function (_export, _context) {
  "use strict";

  var Application, application;

  function topLevelImport(url) {
    return System["import"](url);
  }

  return {
    setters: [function (_application73e65Js) {
      Application = _application73e65Js.Application;
    }],
    execute: function () {
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});