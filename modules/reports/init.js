var moduleName = 'reports';

import contentTemplate from './templates/contentTemplate.hbs!';
import contentData from './contentData.json!';

export function createContent(Handlebars) {

  i18n.loadNamespace('reports', function() {
    $('#content').html(contentTemplate(contentData));
  });

  console.timeEnd('Module reports');
}
