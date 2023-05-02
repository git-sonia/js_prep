let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

let printCities = cities => {
  for (let city of cities) {
    if (!city) {
      continue;
    }
    console.log(city.length);
  }
}

printCities(cities);
