const weather = document.querySelector('.js-weather');

const API_KEY = '4cfafe0fdfde4110b5472d886be88562';
const COORDS = 'coords';

const getWeather = (lat, lon) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			const temperature = json.main.temp;
			const place = json.name;
			weather.innerText = `${'현재 온도'}:${temperature}${'도'} ${',Suwon'}`;
		});
};

const saveCoords = (coordsObj) => {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
};

const handleGeoSucces = (position) => {
	const latitude = position.coords.latitude;
	const longitude = position.coords.longitude;
	const coordsObj = {
		latitude,
		longitude
	};
	saveCoords(coordsObj);
	getWeather(latitude, longitude);
};

const handleGeoError = () => {
	console.log('Cant access geo location');
};

const askForCoord = () => {
	navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
};

const loadCoords = () => {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoord();
	} else {
		const parsedCoords = JSON.parse(loadedCoords);
		getWeather(parsedCoords.latitude, parsedCoords.longitude);
	}
};

const init = () => {
	loadCoords();
};

init();
