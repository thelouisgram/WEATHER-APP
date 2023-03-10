/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function() {\r\n  document.documentElement.classList.add('loaded');\r\n  document.querySelector('.container').classList.add('move-up')\r\n\r\n});\r\n\r\n\r\nconst weather = {\r\n\tapiKey: 'e338f4f4424d82ce7e60c9d26f59eb76',\r\n\tfetchWeather: function(city) {\r\n\t\tfetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)\r\n\t\t\t.then((response) => response.json())\r\n\t\t\t.then((data) => this.displayWeather(data))\r\n\t\t\t.catch((error) => {\r\n\t\t\t\tdocument.querySelector('.city').innerText = 'Location Not found';\r\n\t\t\t\tdocument.querySelector('.city').style.fontSize = '1.2rem'\r\n\t\t\t\tdocument.querySelector('.temp').innerText = '--';\r\n\t\t\t\tdocument.querySelector('.status').innerText = '--';\r\n\t\t\t\tdocument.querySelector('.humidity').innerText = '--';\r\n\t\t\t\tdocument.querySelector('.wind').innerText = '--';\r\n\t\t\t\tconst img = document.querySelector('.icon');\r\n\t\t\t\tdocument.querySelector('.weather').classList.remove('loading');\r\n\t\t\t\tdocument.querySelector('.weather').classList.add('fadeIn');\r\n\t\t\t\tdocument.querySelector('.card').classList.remove('loading');\r\n\t\t\t\timg.src = 'https://img.icons8.com/fluency/100/null/sad-cloud.png';\r\n\t\t\t\tdocument.querySelector('.tools').classList.remove('blink');\r\n\r\n\t\t\t});\r\n\t},\r\n\tdisplayWeather: function(data) {\r\n\t\tconst { name } = data;\r\n\t\tconst { icon, description } = data.weather[0];\r\n\t\tconst { temp, humidity } = data.main;\r\n\t\tconst { speed } = data.wind;\r\n\t\tconst img = document.querySelector('.icon');\r\n\r\n\t\tdocument.querySelector('.city').innerText = 'Weather in ' + name;\r\n\t\tdocument.querySelector('.temp').innerText = temp + '°C';\r\n\t\tdocument.querySelector('.status').innerText = description;\r\n\t\tdocument.querySelector('.humidity').innerText = humidity + '%';\r\n\t\tdocument.querySelector('.wind').innerText = speed + 'km/h';\r\n\t\tweather.clear();\r\n\r\n\t\tif (icon === '01d') {\r\n\t\t\timg.src = 'https://img.icons8.com/fluency/100/null/sun.png';\r\n\t\t} else if (icon === '01n') {\r\n\t\t\timg.src =\r\n\t\t\t\t'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/null/external-night-weather-smashingstocks-flat-smashing-stocks.png';\r\n\t\t} else if (icon === '02d') {\r\n\t\t\timg.src = 'https://img.icons8.com/fluency/100/null/partly-cloudy-day.png';\r\n\t\t} else if (icon === '02n') {\r\n\t\t\timg.src = 'https://img.icons8.com/3d-fluency/100/null/partly-cloudy-night.png';\r\n\t\t} else if (icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {\r\n\t\t\timg.src = 'https://img.icons8.com/emoji/100/null/cloud-emoji.png';\r\n\t\t} else if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {\r\n\t\t\timg.src = 'https://img.icons8.com/emoji/100/null/cloud-with-rain-emoji.png';\r\n\t\t} else if (icon === '11d' || icon === '11n') {\r\n\t\t\timg.src = 'https://img.icons8.com/3d-fluency/100/null/storm.png';\r\n\t\t} else if (icon === '13d' || icon === '13n') {\r\n\t\t\timg.src = 'https://img.icons8.com/3d-fluency/100/null/snow.png';\r\n\t\t} else if (icon === '50d' || icon === '50n') {\r\n\t\t\timg.src =\r\n\t\t\t\t'https://img.icons8.com/external-goofy-flat-kerismaker/96/null/external-Fog-Mist-weather-goofy-flat-kerismaker.png';\r\n\t\t}\r\n\r\n\t\tdocument.querySelector('.weather').classList.remove('loading');\r\n\t\tdocument.querySelector('.weather').classList.add('fadeIn');\r\n\t\tdocument.querySelector('.card').classList.remove('loading');\r\n\t\tdocument.querySelector('.tools').classList.remove('blink');\r\n\t},\r\n\tsearch: function() {\r\n\t\tthis.fetchWeather(document.querySelector('#input').value);\r\n\t\tweather.blink()\r\n\t}, \r\n\tclear: function() {\r\n\t\tdocument.querySelector('#input').value = '';\r\n\t},\r\n\tblink:function(){\r\n\t\tdocument.querySelector('.tools').classList.add('blink')\r\n\t},\r\n};\r\n\r\ndocument.querySelector('.btn').addEventListener('click', function() {\r\n\tweather.search();\r\n\t\r\n});\r\n\r\ndocument.querySelector('#input').addEventListener('keyup', function(event) {\r\n\tif (event.key == 'Enter') {\r\n\t\tweather.search();\r\n\t}\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;