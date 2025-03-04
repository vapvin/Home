const form = document.querySelector('.js-form'),
	input = form.querySelector('input'),
	greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser',
	SHOWING_CN = 'showing';

const saveName = (text) => {
	localStorage.setItem(USER_LS, text);
};

const handleSubmit = (event) => {
	event.preventDefault();
	const currentValue = input.value;
	paintGreeting(currentValue);
	saveName(currentValue);
};

const askForName = () => {
	form.classList.add(SHOWING_CN);
	form.addEventListener('submit', handleSubmit);
};

const paintGreeting = (text) => {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello ${text}`;
};

const loadName = () => {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		// she is not
		askForName();
	} else {
		paintGreeting(currentUser);
	}
};

const init = () => {
	loadName();
};

init();
