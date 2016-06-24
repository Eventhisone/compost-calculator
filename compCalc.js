(function(angular) {
  'use strict';
// Controller
angular.module('compCalc', ['calc'])
.controller('CalcController', ['compostCalculator', function(compostCalculator) {
  this.leng = 1;
  this.width = 1;
  this.height = 1;
  this.inUnit = "yards";
  this.units = compostCalculator.units;
  this.rorc = "Radius";
  this.rorcVal = 1;
  this.depth = 1;
  this.toRadius = {
    Radius: 1,
    Circumference: 1/4
  };

  this.circVol = function total() {
    return compostCalculator.convert( Math.PI * this.toRadius[this.rorc] * this.rorcVal * this.rorcVal * this.depth, this.inUnit);
  };

  this.boxVol = function total() {
    return compostCalculator.convert( this.leng * this.width * this.height, this.inUnit);
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
