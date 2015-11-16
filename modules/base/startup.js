console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'bootstrap/css/bootstrap.css!';

console.log('jquery: ' + $.fn.jquery);
console.log('underscore: ' + _.VERSION);
console.log('backbone: ' + Backbone.VERSION);

$('#load-radar').on('click', function () {
  console.time('Module Radar');

  System.import('./modules/radar/init.js').then(function(e){
    e.createContent();
  });
})

console.timeEnd('Init');
console.timeEnd('Load');
