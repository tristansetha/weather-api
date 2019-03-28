import './styles.css';
import $ from 'jquery';
// import  Weather  from './weather.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});

// $(document).ready(function() {
//     $('#weatherLocation').click(function() {
//       const city = $('#location').val();
//       $('#location').val("");
//
//       let request = new XMLHttpRequest();
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`).;
//
//       request.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//           const response = JSON.parse(this.responseText);
//           getElements(response);
//         }
//       }
//
//       request.open("GET", url, true); //getElements(response) won’t be called until the conditional becomes true. In other words, by using a callback, we ensure the function doesn’t run until after we get a response from the server.
//       request.send();
//
//      const getElements = function(response) {
//         $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//       }
//     });
//   });

//   Data nested inside a JSON object looks like this:
//   {
//     ...
//     "main": {
//           "temp": 297.15,
//           "pressure": 1010,
//           "humidity": 94,
//           "temp_min": 297.15,
//           "temp_max": 297.15
//       },
//   ...
//   }

// 982ab0a2656419ff4bb629ae52805f3c
