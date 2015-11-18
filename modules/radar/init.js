var moduleName = 'radar';

import handlebars from 'handlebars';

//template
// import contentTemplate from './contentTemplate.html!text';
import contentTemplate from './contentTemplate.hbs!text';

//data
import contentData from './contentData.json!';

// Handlebars helper to translate
Handlebars.registerHelper('t', function(i18n_key) {
  var result = i18n.t(i18n_key);

  return new Handlebars.SafeString(result);
});

export function createContent() {

  i18n.options = {
    getAsync: false
  };

  i18n.loadNamespace('radar', function() {
    console.log('T: ' + i18n.t("radar:page.name"));

    var template = Handlebars.compile(contentTemplate);
    var html    = template(contentData);

    $('#content').html(html);

  });

  console.log('T: ' + i18n.t("app.name"));

  console.timeEnd('Module radar');

}
