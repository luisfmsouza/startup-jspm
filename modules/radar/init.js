import handlebars from 'handlebars';

//template
import contentTemplate from './contentTemplate.html!text';

//data
import contentData from './contentData.json!';

export function createContent() {

  var template = Handlebars.compile(contentTemplate);
  var html    = template(contentData);

  $('#content').append(html);

  console.timeEnd('Module Radar');
}
