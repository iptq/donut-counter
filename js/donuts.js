Parse.initialize("ZNuEcCxgi0YnItPMCYvypViR2fqewl36SSJJ9Kp4", "7gzmRdZVIKiNnyLFzqD8JqJGIdzOPjjHibAyMu8H");
var goal = 1000.0;

var Donuts = Parse.Object.extend("Donuts");
var query = new Parse.Query(Donuts);
var process = function() {
  query.get("cei4T7N4Dy", {
    success: function(donuts) {
      var num = parseFloat(donuts.get("Number"));
      console.log(num);
      var percent = num * 100.0 / goal;
      $("#fill").css("width", percent + "%");
      var rounded = Math.round(percent * 100) / 100.0;
      $("#text").html(rounded + "%");
      $("#remaining").html("$"+(goal - num));
    },
    error: function(object, error) {

    }
  });
};
setInterval(process, 1000*60*60);
process();
