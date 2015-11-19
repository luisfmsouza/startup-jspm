var moduleName = 'radar';

import contentTemplate from './templates/contentTemplate.hbs!';
import contentComments from './templates/contentComments.hbs!';
import contentData from './contentData.json!';

export function createContent(Handlebars) {

  i18n.loadNamespace('radar', function() {

    Handlebars.registerPartial('contentComments', contentComments);

    $('#content').html(contentTemplate(contentData));
  });

  console.timeEnd('Module radar');
}
