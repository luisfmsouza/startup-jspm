var moduleName = 'reports';

//template
import contentTemplate from './contentTemplate.hbs!';

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.loadNamespace('reports', function() {
    console.log('T: ' + i18n.t('reports:page.name'));

    var html = contentTemplate(contentData);

    $('#content').html(html);
  });

  console.timeEnd('Module reports');
}
