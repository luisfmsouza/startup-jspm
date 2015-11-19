System.registerDynamic("modules/reports/contentData.json!github:systemjs/plugin-json@0.1.0", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {"person": [{
      "id": "1",
      "name": "Paulo",
      "lastName": "Silva",
      "username": "paulo.silva"
    }, {
      "id": "2",
      "name": "João",
      "lastName": "Gilberto",
      "username": "joao.gilberto"
    }]};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("modules/reports/templates/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1", ["github:components/handlebars.js@4.0.4/handlebars.runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.4/handlebars.runtime').template({
    "1": function(container, depth0, helpers, partials, data) {
      var helper;
      return "      <tr>\n        <th scope=\"row\">" + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "id",
        "hash": {},
        "data": data
      }) : helper))) + "</th>\n        <td>" + container.escapeExpression(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "firstName",
        "hash": {},
        "data": data
      }) : helper))) + "</td>\n        <td>" + container.escapeExpression(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "lastName",
        "hash": {},
        "data": data
      }) : helper))) + "</td>\n        <td>" + container.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "username",
        "hash": {},
        "data": data
      }) : helper))) + "</td>\n      </tr>\n";
    },
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var stack1;
      return "<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "reports:label.id", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</th>\n      <th>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "reports:label.firstName", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</th>\n      <th>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "reports:label.lastName", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</th>\n      <th>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "reports:label.username", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</th>\n    </tr>\n  </thead>\n  <tbody>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.person : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data
      })) != null ? stack1 : "") + "  </tbody>\n</table>\n";
    },
    "useData": true
  });
  global.define = __define;
  return module.exports;
});

System.register('modules/reports/init.js', ['modules/reports/templates/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1', 'modules/reports/contentData.json!github:systemjs/plugin-json@0.1.0'], function (_export) {
  'use strict';

  var contentTemplate, contentData, moduleName;

  _export('createContent', createContent);

  function createContent(Handlebars) {

    i18n.loadNamespace('reports', function () {
      $('#content').html(contentTemplate(contentData));
    });

    console.timeEnd('Module reports');
  }

  return {
    setters: [function (_modulesReportsTemplatesContentTemplateHbsGithubDavisPluginHbs121) {
      contentTemplate = _modulesReportsTemplatesContentTemplateHbsGithubDavisPluginHbs121['default'];
    }, function (_modulesReportsContentDataJsonGithubSystemjsPluginJson010) {
      contentData = _modulesReportsContentDataJsonGithubSystemjsPluginJson010['default'];
    }],
    execute: function () {
      moduleName = 'reports';
    }
  };
});
//# sourceMappingURL=build-reports.js.map