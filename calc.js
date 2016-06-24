(function(angular) {
  'use strict';
// Service
angular.module('calc', [])
.factory('compostCalculator', function() {
  var units = ['inches', 'feet', 'yards'];
  var imperialToYards = {
    yards: 1,
    feet: 27,
    inches: 46656
  };
  var convert = function (volume, inUnits) {
    return (volume * imperialToYards["yards"] / imperialToYards[inUnits]).toFixed(3);
  };

  return {
    units: units,
    convert: convert
  };
});
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/