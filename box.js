(function(angular) {
  'use strict';
// Controller
angular.module('box', ['calc'])
.controller('BoxCalcController', ['compostCalculator', function(compostCalculator) {
  this.leng = 1;
  this.width = 1;
  this.height = 1;
  this.inUnit = "yards";
  this.units = compostCalculator.units;

  this.total = function total() {
    return compostCalculator.convert( this.leng * this.width * this.height, this.inUnit)
  };

  this.done = function done(){
    window.alert('Thanks!');
  };
}]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/