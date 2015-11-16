console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'bootstrap/css/bootstrap.css!';

console.log('jquery: ' + $.fn.jquery);
console.log('underscore: ' + _.VERSION);
console.log('backbone: ' + Backbone.VERSION);

$('.btn-primary').on('click', function () {

  var module = $(this).data('module');

  console.time('Module ' + module);

  System.import('./modules/' + module + '/init.js').then(function(e){
    e.createContent();
  });
})

console.timeEnd('Init');
console.timeEnd('Load');
