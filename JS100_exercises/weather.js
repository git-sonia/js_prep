let checkWeather = weather => {

switch (weather) {
  case 'sunny':
    console.log('sunny');
    break;
  case 'rainy':
    console.log('rainy');
    break;
  default:
    console.log('default');
}
}

checkWeather('sunny');

