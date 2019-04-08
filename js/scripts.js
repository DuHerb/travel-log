function Place (name){
  this.name = name,
  country = "",
  population = 0,
  landmark = "",
  notes = ""
}

var visitedLocations = [];

var portland = new Place ("Portland");
portland.country = "USA";
portland.population = 600000;
portland.landmark = "Japanese Garden";
portland.notes = "Rains Alot";
visitedLocations.push(portland);



$(document).ready(function(){
  console.log(portland);
  console.log(portland.country);
  console.log(visitedLocations[0]);
})
