System.registerDynamic("modules/radar/contentData.json!github:systemjs/plugin-json@0.1.0", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {"content": [{
      "title": "Find the best opportunities",
      "author": "Carlos",
      "body": "Here you can find the best opportunities in the world.",
      "comment": [{
        "title": "Thanks",
        "body": "Hey, thanks for your post!"
      }, {
        "title": "I don't agree",
        "body": "The best opportunities are in other place."
      }]
    }, {
      "title": "System updated",
      "author": "José",
      "body": "Last weekend we made an update.",
      "comment": [{
        "title": "It's slow",
        "body": "Hey, take care with updates, now it's slow."
      }]
    }]};
  global.define = __define;
  return module.exports;
});

System.registerDynamic("modules/radar/templates/contentComments.hbs!github:davis/plugin-hbs@1.2.1", ["github:components/handlebars.js@4.0.4/handlebars.runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.4/handlebars.runtime').template({
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var helper;
      return "<div class=\"panel-heading\">\n  <h3 class=\"panel-title\">" + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "title",
        "hash": {},
        "data": data
      }) : helper))) + "</h3>\n</div>\n<div class=\"panel-body\">\n  " + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "body",
        "hash": {},
        "data": data
      }) : helper))) + "\n</div>\n";
    },
    "useData": true
  });
  global.define = __define;
  return module.exports;
});

System.registerDynamic("modules/radar/templates/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1", ["github:components/handlebars.js@4.0.4/handlebars.runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.4/handlebars.runtime').template({
    "1": function(container, depth0, helpers, partials, data) {
      var stack1,
          helper;
      return "  <div class=\"jumbotron\">\n    <h2>" + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "title",
        "hash": {},
        "data": data
      }) : helper))) + ", <small>By " + container.escapeExpression(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "author",
        "hash": {},
        "data": data
      }) : helper))) + "</small></h2>\n    <p class=\"lead\">" + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "body",
        "hash": {},
        "data": data
      }) : helper))) + "</p>\n  </div>\n\n  <h2>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "radar:label.comments", {
        "name": "t",
        "hash": {},
        "data": data
      })) + " <span class=\"glyphicon glyphicon-comment\"></span></h2>\n\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.comment : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(2, data, 0),
        "inverse": container.noop,
        "data": data
      })) != null ? stack1 : "");
    },
    "2": function(container, depth0, helpers, partials, data) {
      var stack1;
      return "    <div class=\"panel panel-default\">\n" + ((stack1 = container.invokePartial(partials.contentComments, depth0, {
        "name": "contentComments",
        "data": data,
        "indent": "      ",
        "helpers": helpers,
        "partials": partials,
        "decorators": container.decorators
      })) != null ? stack1 : "") + "    </div>\n";
    },
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var stack1;
      return "<h2>" + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "radar:label.posts", {
        "name": "t",
        "hash": {},
        "data": data
      })) + " <span class=\"glyphicon glyphicon-pencil\"></span></h2>\n\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.content : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data
      })) != null ? stack1 : "") + "\n<a href=\"#\">Back to " + container.escapeExpression((helpers.t || (depth0 && depth0.t) || helpers.helperMissing).call(depth0 != null ? depth0 : {}, "nav.home", {
        "name": "t",
        "hash": {},
        "data": data
      })) + "</a>\n";
    },
    "usePartial": true,
    "useData": true
  });
  global.define = __define;
  return module.exports;
});

System.register('modules/radar/init.js', ['modules/radar/templates/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1', 'modules/radar/templates/contentComments.hbs!github:davis/plugin-hbs@1.2.1', 'modules/radar/contentData.json!github:systemjs/plugin-json@0.1.0'], function (_export) {
  'use strict';

  var contentTemplate, contentComments, contentData, moduleName;

  _export('createContent', createContent);

  function createContent(Handlebars) {

    i18n.loadNamespace('radar', function () {

      Handlebars.registerPartial('contentComments', contentComments);

      $('#content').html(contentTemplate(contentData));
    });

    console.timeEnd('Module radar');
  }

  return {
    setters: [function (_modulesRadarTemplatesContentTemplateHbsGithubDavisPluginHbs121) {
      contentTemplate = _modulesRadarTemplatesContentTemplateHbsGithubDavisPluginHbs121['default'];
    }, function (_modulesRadarTemplatesContentCommentsHbsGithubDavisPluginHbs121) {
      contentComments = _modulesRadarTemplatesContentCommentsHbsGithubDavisPluginHbs121['default'];
    }, function (_modulesRadarContentDataJsonGithubSystemjsPluginJson010) {
      contentData = _modulesRadarContentDataJsonGithubSystemjsPluginJson010['default'];
    }],
    execute: function () {
      moduleName = 'radar';
    }
  };
});
//# sourceMappingURL=build-radar.js.map