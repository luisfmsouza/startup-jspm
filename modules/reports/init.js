var moduleName = 'reports';

import handlebars from 'handlebars';

//template
import contentTemplate from './contentTemplate.html!text';

// Handlebars helper to translate
Handlebars.registerHelper('t', function(i18n_key) {
  var result = i18n.t(i18n_key);

  return new Handlebars.SafeString(result);
});

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.loadNamespace('../../modules/reports/locales/en-US/reports', function() {
    console.log(i18n.t("../../modules/reports/locales/en-US/reports:page.name"));
    console.log(i18n);
  });

  var template = Handlebars.compile(contentTemplate);
  var html    = template(contentData);

  $('#content').html(html);

  console.timeEnd('Module reports');
}
