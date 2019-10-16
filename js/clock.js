const clockContainer = document.querySelector('.js-clock'),
	clockTitle = clockContainer.querySelector('h1');

const getTime = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

const init = () => {
	getTime();
	setInterval(getTime, 1000);
};

init();
