document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.container').classList.add('move-up')

});


const weather = {
	apiKey: 'e338f4f4424d82ce7e60c9d26f59eb76',
	fetchWeather: function(city) {
		fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
			.then((response) => response.json())
			.then((data) => this.displayWeather(data))
			.catch((error) => {
				document.querySelector('.city').innerText = 'Location Not found';
				document.querySelector('.city').style.fontSize = '1.2rem'
				document.querySelector('.temp').innerText = '--';
				document.querySelector('.status').innerText = '--';
				document.querySelector('.humidity').innerText = '--';
				document.querySelector('.wind').innerText = '--';
				const img = document.querySelector('.icon');
				document.querySelector('.weather').classList.remove('loading');
				document.querySelector('.weather').classList.add('fadeIn');
				document.querySelector('.card').classList.remove('loading');
				img.src = 'https://img.icons8.com/fluency/100/null/sad-cloud.png';
				document.querySelector('.tools').classList.remove('blink');

			});
	},
	displayWeather: function(data) {
		const { name } = data;
		const { icon, description } = data.weather[0];
		const { temp, humidity } = data.main;
		const { speed } = data.wind;
		const img = document.querySelector('.icon');

		document.querySelector('.city').innerText = 'Weather in ' + name;
		document.querySelector('.temp').innerText = temp + '°C';
		document.querySelector('.status').innerText = description;
		document.querySelector('.humidity').innerText = humidity + '%';
		document.querySelector('.wind').innerText = speed + 'km/h';
		weather.clear();

		if (icon === '01d') {
			img.src = 'https://img.icons8.com/fluency/100/null/sun.png';
		} else if (icon === '01n') {
			img.src =
				'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/100/null/external-night-weather-smashingstocks-flat-smashing-stocks.png';
		} else if (icon === '02d') {
			img.src = 'https://img.icons8.com/fluency/100/null/partly-cloudy-day.png';
		} else if (icon === '02n') {
			img.src = 'https://img.icons8.com/3d-fluency/100/null/partly-cloudy-night.png';
		} else if (icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n') {
			img.src = 'https://img.icons8.com/emoji/100/null/cloud-emoji.png';
		} else if (icon === '09d' || icon === '09n' || icon === '10d' || icon === '10n') {
			img.src = 'https://img.icons8.com/emoji/100/null/cloud-with-rain-emoji.png';
		} else if (icon === '11d' || icon === '11n') {
			img.src = 'https://img.icons8.com/3d-fluency/100/null/storm.png';
		} else if (icon === '13d' || icon === '13n') {
			img.src = 'https://img.icons8.com/3d-fluency/100/null/snow.png';
		} else if (icon === '50d' || icon === '50n') {
			img.src =
				'https://img.icons8.com/external-goofy-flat-kerismaker/96/null/external-Fog-Mist-weather-goofy-flat-kerismaker.png';
		}

		document.querySelector('.weather').classList.remove('loading');
		document.querySelector('.weather').classList.add('fadeIn');
		document.querySelector('.card').classList.remove('loading');
		document.querySelector('.tools').classList.remove('blink');
	},
	search: function() {
		this.fetchWeather(document.querySelector('#input').value);
		weather.blink()
	}, 
	clear: function() {
		document.querySelector('#input').value = '';
	},
	blink:function(){
		document.querySelector('.tools').classList.add('blink')
	},
};

document.querySelector('.btn').addEventListener('click', function() {
	weather.search();
	
});

document.querySelector('#input').addEventListener('keyup', function(event) {
	if (event.key == 'Enter') {
		weather.search();
	}
});
