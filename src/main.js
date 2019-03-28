import './styles.css';
import $ from 'jquery';
// import  Weather  from './weather.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

// we create a new Promise
// We are passing in two parameters; resolve will determine what happens when the promise is resolved while reject
// will handle the promise if it’s rejected.
// Because we’re solving this problem with JavaScript, not jQuery, we create a new XMLHttpRequest object here

 // onload() is called once the request is complete. Before, we used onreadystatechange

 // onreadystatechange is called every time the readyState of our request changes. It will work its way from 0 to 4,
 // but a promise can only be rejected once

// With onload(), we wait until the request is complete. If the response has a 200 status, we’ll resolve the promise,
// which will return the response from the request.
// If the API call doesn’t have a 200 status, the promise will be rejected. We’ll call a new instance of JavaScript’s built-in Error class.
// The specific error will be the statusText of our request. (A quick reminder: statusText is a built-in prototype that can be called on a XMLHttpRequest object.)

// Our promise also handles opening and sending the request. We now have an async API call wrapped inside a promise, waiting to be called.
//
// We’ve built a promise from scratch. Promises have a number of prototypes, including the then() method.
// While it works in a similar fashion to jQuery’s then() method, note the differences in syntax.
// If the promise is resolved, we’ll parse the JSON and return the temperature and humidity.
//
// If it’s rejected, we’ll take advantage of the Error object’s message prototype to return the error.
// For instance, if we submit a request without inputting a city, we’ll get the following: There was an error processing your request: Bad Request.
//
// JavaScript’s Promise API exposes several useful prototype methods. For instance,
// let’s say that you have an application that needs to wait for the result of multiple API calls. We could do the following with Promise.all():

// Promise.all(promise1, promise2, promise3);

// Promise.all() wraps the enclosed promises into a single giant promise that only resolves after each of the included promises are resolved.
//
// There are a number of other methods such as Promise.race() and Promise.catch(). Check out Mozilla’s documentation on promises to learn more.


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`).then(function(response) {
//       $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
//     }).fail(function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//     });
//   });
// });

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
