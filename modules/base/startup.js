console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars/handlebars.runtime';
import i18n from 'i18next-client';

import 'bootstrap/css/bootstrap.css!';

var options = {
  debug: true,
  fallbackLng: 'en-US',
  lng: 'en-US',
  load: 'current',
  ns: 'base',
  resGetPath: 'modules/__ns__/locales/__lng__/__ns__.json'
}

i18n.init(options);

Handlebars.registerHelper('t', function(i18n_key) {
  var result = i18n.t(i18n_key);

  return new Handlebars.SafeString(result);
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
