console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

console.log($.fn.jquery);
console.log(_.VERSION);
console.log(Backbone.VERSION);

console.timeEnd('Init');
console.timeEnd('Load');

console.log('test2');