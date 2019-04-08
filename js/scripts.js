function Place(name, country, population) {
  this.name = name,
  this.country = country,
  this.population = population,
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
}

function displayCities(travelLog) {
  for(i=0; i<travelLog.locations.length; i++) {
    var id = travelLog.locations[i].id;
    $("#place-list").append('<li class="btn btn-dark">' + travelLog.locations[i].name + '</li>');
  };
}

$(document).ready(function() {
  displayCities(travelLog);

  $('#input-submit').click(function(event) {
    event.preventDefault();
    var nameInput = $("input[value='name']").val();
    var countryInput = $("input[value='country']").val();
    var populationInput = $("input[value='population']").val();
    var newCity = new Place(nameInput, countryInput, populationInput);
    travelLog.addLocation(newCity);
    $('#place-list').empty();
    $('#city-display').empty();
    displayCities(travelLog);
    return;
  });

  $("#place-list").on("click", "li", function(event){
    event.preventDefault();
    var id = $(this).text();
    $('#city-display').empty();
    for(i=0; i<travelLog.locations.length; i++) {
      if(travelLog.locations[i].name === id) {
        var id = travelLog.locations[i].id;
        $('#city-display').append(displayPlace(id-1));
      }
    }
  });
});
