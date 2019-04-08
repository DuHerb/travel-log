function Place() {
  name = name,
  country = "",
  population = 0,
  landmark = "",
  notes = ""
}

var visitedLocations = [];

var portland = new Place();
portland.name = "Portland";
portland.country = "USA";
portland.population = 600000;
portland.landmark = "Japanese Garden";
portland.notes = "Rains Alot";
visitedLocations.push(portland);

var seattle = new Place();
seattle.name = "Seattle";
seattle.country = "USA";
seattle.population = 1000000;
seattle.landmark = "space needle";
seattle.notes = "Rains Alot";
visitedLocations.push(seattle);

function displayPlace(place) {
  $("#place-display").append("<li>" + place.name + "</li>");
  $("#place-display").append("<li>" + place.country + "</li>");
  $("#place-display").append("<li>" + place.population + "</li>");
  $("#place-display").append("<li>" + place.landmark + "</li>");
  $("#place-display").append("<li>" + place.notes + "</li>");
}

function displayCities(visitedLocations) {
  for(i=0; i<visitedLocations.length; i++) {
    $("#place-list").append('<li><button class="city-button">' + visitedLocations[i].name + '</button></li>');
  };
}

$(document).ready(function() {
  console.log(visitedLocations);
  displayCities(visitedLocations);
});
