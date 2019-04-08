function Place(name, country, population) {
  this.name = name,
  this.country = country,
  this.population = population,
  this.landmark = "",
  this.notes = "",
  this.id = 0;
}

function TravelLog() {
  this.locations = [],
  this.currentId = 0
}

TravelLog.prototype.addLocation = function(place) {
  place.id = this.assignId();
  this.locations.push(place);
}

TravelLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

var portland = new Place("Portland", "USA", 600000);
var seattle = new Place("Seattle", "USA", 1000000);

var travelLog = new TravelLog();
travelLog.addLocation(portland);
travelLog.addLocation(seattle);


function displayPlace(id) {
  $("#city-display").append("<li>" + travelLog.locations[id].name + "</li>");
  $("#city-display").append("<li>" + travelLog.locations[id].country + "</li>");
  $("#city-display").append("<li>" + travelLog.locations[id].population + "</li>");
  $("#city-display").append("<li>" + travelLog.locations[id].landmark + "</li>");
  $("#city-display").append("<li>" + travelLog.locations[id].notes + "</li>");
}

function displayCities(travelLog) {
  for(i=0; i<travelLog.locations.length; i++) {
    var id = travelLog.locations[i].id;
    $("#place-list").append('<li><button class="city-button" value=' + id + '>' + travelLog.locations[i].name + '</button></li>');
  };
}

$(document).ready(function() {
  console.log(travelLog);
  displayCities(travelLog);

  $('.city-button').click(function(){
    var id = $(this).val();
    $('#city-display').empty();
    $('#city-display').append(displayPlace(id-1));
  })
});
