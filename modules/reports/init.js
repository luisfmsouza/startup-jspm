var moduleName = 'reports';

import handlebars from 'handlebars';

//template
import contentTemplate from './contentTemplate.html!text';

//data
import contentData from './contentData.json!';

export function createContent() {

  var template = Handlebars.compile(contentTemplate);
  var html    = template(contentData);

  $('#content').html(html);

  // i18n.loadNamespace('reports', function() {
  //   console.log(i18n.t("reports:app.name"));
  //   console.log(i18n.t("reports:report"));
  // });


  var options = { resGetPath: 'modules/' + moduleName + '/locales/__lng__/__ns__.json' };

  i18n.init(options, function () {
    console.log(i18n.t("app.name"));
  });

  console.timeEnd('Module reports');
}
