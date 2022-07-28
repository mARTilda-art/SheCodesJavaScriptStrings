let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

let sentence = `I went to visit the ${attraction} in ${city}, right next to my school. Now, I'm getting ready for my trip to ${country}.`;
console.log(sentence);

country = country.replace(" ", "-");
city = city.trim();
attraction = attraction.toLowerCase();
place = place.toUpperCase();

console.log(country);
console.log(city);
console.log(attraction);
console.log(place);
