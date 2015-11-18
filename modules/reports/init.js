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

  i18n.loadNamespace('reports', function() {
    console.log(i18n.t("reports:page.name"));

    var template = Handlebars.compile(contentTemplate);
    var html    = template(contentData);

    $('#content').html(html);
  });

  console.timeEnd('Module reports');
}
