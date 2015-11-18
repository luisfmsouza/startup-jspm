console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import i18n from 'i18next-client';

import 'bootstrap/css/bootstrap.css!';

console.log('jquery: ' + $.fn.jquery);
console.log('underscore: ' + _.VERSION);
console.log('backbone: ' + Backbone.VERSION);

var options = {
  debug: true,
  fallbackLng: 'en-US',
  lng: "en-US",
  load: 'current',
  ns: 'base',
  resGetPath: 'modules/__ns__/locales/__lng__/__ns__.json'
}

i18n.init(options, function(err, t) {
  console.log('T: ' + t("app.name"));
});

$('.btn-primary').on('click', function () {

  var module = $(this).data('module');

  console.time('Module ' + module);

  System.import('./modules/' + module + '/init.js').then(function(e){
    e.createContent();
  });
})

console.timeEnd('Init');
console.timeEnd('Load');
