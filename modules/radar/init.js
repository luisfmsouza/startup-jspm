var moduleName = 'radar';

//template

import Handlebars from 'handlebars/handlebars.runtime';

import contentTemplate from './templates/contentTemplate.hbs!';
import userMessage from './templates/userMessage.hbs!';

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.loadNamespace('radar', function() {

    Handlebars.registerHelper('t', function(i18nKey) {
      var result = i18n.t(i18nKey);

      return new Handlebars.SafeString(result);
    });

    Handlebars.registerPartial('userMessage', userMessage);

    var html = contentTemplate(contentData);

    $('#content').html(html);
  });

  console.timeEnd('Module radar');

}
