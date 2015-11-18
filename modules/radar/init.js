var moduleName = 'radar';

//template
// import contentTemplateHbs from './contentTemplate.hbs!hbs';
import contentTemplate from './contentTemplate.hbs!text';

//data
import contentData from './contentData.json!';

export function createContent() {

  i18n.options = {
    getAsync: false
  };

  i18n.loadNamespace('radar', function() {
    console.log('T: ' + i18n.t('radar:page.name'));

    var template = Handlebars.compile(contentTemplate);
    var html    = template(contentData);

    $('#content').html(html);

  });

  console.log('T: ' + i18n.t('app.name'));

  console.timeEnd('Module radar');

}
