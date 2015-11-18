var moduleName = 'radar';

//template
import contentTemplate from './contentTemplate.hbs!';

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.options = {
    getAsync: false
  };

  i18n.loadNamespace('radar', function() {
    console.log('T: ' + i18n.t('radar:page.name'));

    var html = contentTemplate(contentData);

    $('#content').html(html);

  });

  console.log('T: ' + i18n.t('app.name'));

  console.timeEnd('Module radar');

}
