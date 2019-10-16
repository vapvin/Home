const body = document.querySelector('body');

const IMG_NUMBER = 7;

const paintImage = (imgNumber) => {
	const image = new Image();
	image.src = `img/${imgNumber + 1}.jpg`;
	image.classList.add('bgImage');
	body.prepend(image);
};

const genRandom = () => {
	const number = Math.floor(Math.random() * 7);
	return number;
};

const init = () => {
	const randomNumber = genRandom();
	paintImage(randomNumber);
};

init();
