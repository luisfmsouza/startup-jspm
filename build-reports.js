System.registerDynamic("modules/reports/contentData.json!github:systemjs/plugin-json@0.1.0", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {"content": [{
      "title": "Reports First",
      "body": "First content"
    }, {
      "title": "Reports Second",
      "body": "Second content"
    }]};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("modules/reports/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1", ["github:components/handlebars.js@4.0.4/handlebars.runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.4/handlebars.runtime').template({
    "1": function(container, depth0, helpers, partials, data) {
      var helper;
      return "  <h3>" + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "title",
        "hash": {},
        "data": data
      }) : helper))) + "</h3>\n  <p>" + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "body",
        "hash": {},
        "data": data
      }) : helper))) + "</p>\n";
    },
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var stack1;
      return "<h2>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "reports:page.name", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "<h2>\n\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.content : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data
      })) != null ? stack1 : "") + "\n<a href=\"#\"> back to " + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "app.name", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</a>\n\n";
    },
    "useData": true
  });
  global.define = __define;
  return module.exports;
});

System.register('modules/reports/init.js', ['modules/reports/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1', 'modules/reports/contentData.json!github:systemjs/plugin-json@0.1.0'], function (_export) {

  //template
  'use strict';

  //data
  var contentTemplate, contentData, moduleName;

  _export('createContent', createContent);

  function createContent() {

    i18n.loadNamespace('reports', function () {

      var html = contentTemplate(contentData);

      $('#content').html(html);
    });

    console.timeEnd('Module reports');
  }

  return {
    setters: [function (_modulesReportsContentTemplateHbsGithubDavisPluginHbs121) {
      contentTemplate = _modulesReportsContentTemplateHbsGithubDavisPluginHbs121['default'];
    }, function (_modulesReportsContentDataJsonGithubSystemjsPluginJson010) {
      contentData = _modulesReportsContentDataJsonGithubSystemjsPluginJson010['default'];
    }],
    execute: function () {
      moduleName = 'reports';
    }
  };
});
//# sourceMappingURL=build-reports.js.map