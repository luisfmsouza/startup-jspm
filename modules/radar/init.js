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

  var options = {
    resGetPath: 'modules/' + moduleName + '/locales/__lng__/__ns__.json',
    getAsync: false
  };

  i18n.init(options);

  var template = Handlebars.compile(contentTemplate);
  var html    = template(contentData);

  $('#content').html(html);

  console.timeEnd('Module radar');

}
