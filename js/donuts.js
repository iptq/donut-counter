Parse.initialize("ZNuEcCxgi0YnItPMCYvypViR2fqewl36SSJJ9Kp4", "7gzmRdZVIKiNnyLFzqD8JqJGIdzOPjjHibAyMu8H");
var goal = 1000;

var Donuts = Parse.Object.extend("Donuts");
var query = new Parse.Query(Donuts);
var process = function() {
  query.get("cei4T7N4Dy", {
    success: function(donuts) {
      var num = parseInt(donuts.get("Number"));
      console.log(num);
      var percent = num * 1.0 / goal;
      $("#fill").css("width", percent + "%");
      var rounded = Math.round(percent * 10000) / 100.0;
      $("#text").html(rounded + "%");
    },
    error: function(object, error) {

    }
  });
};
setInterval(process, 1000*60*60);
process();
