console.time('Load');

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import 'bootstrap/css/bootstrap.css!';

console.log('jquery: ' + $.fn.jquery);
console.log('underscore: ' + _.VERSION);
console.log('backbone: ' + Backbone.VERSION);

import {createTabs} from '../tabs/tabs.js';

$('.btn-primary').on('click', function () {
  createTabs();
})

console.timeEnd('Init');
console.timeEnd('Load');
