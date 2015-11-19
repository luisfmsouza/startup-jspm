console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars/handlebars.runtime';
import i18n from 'i18next-client';

import 'bootstrap/css/bootstrap.css!';

var options = {
  fallbackLng: 'en-US',
  lng: 'en-US',
  load: 'current',
  ns: 'base',
  resGetPath: 'modules/__ns__/locales/__ns__.__lng__.json'
}

i18n.init(options);

$('.btn-primary').on('click', function () {

  var module = $(this).data('module');

  console.time('Module ' + module);

  System.import('./modules/' + module + '/init.js').then(function(e){
    e.createContent();
  });
})

console.timeEnd('Init');
console.timeEnd('Load');
