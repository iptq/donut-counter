Parse.initialize("ZNuEcCxgi0YnItPMCYvypViR2fqewl36SSJJ9Kp4", "7gzmRdZVIKiNnyLFzqD8JqJGIdzOPjjHibAyMu8H");

var Donuts = Parse.Object.extend("Donuts");
var query = new Parse.Query(Donuts);
setInterval(function() {
  query.get("cei4T7N4Dy", {
    success: function(donuts) {
      console.log(donuts.get("Number"));
    },
    error: function(object, error) {

    }
  });
}, 1000*60*60);
