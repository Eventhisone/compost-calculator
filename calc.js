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
