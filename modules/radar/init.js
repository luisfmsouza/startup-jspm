var moduleName = 'radar';

//template
import contentTemplate from './contentTemplate.hbs!';

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.loadNamespace('radar', function() {

    var html = contentTemplate(contentData);

    $('#content').html(html);
  });

  console.timeEnd('Module radar');

}
