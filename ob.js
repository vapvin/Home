// Object and Class Study

/*
class Food {
	constructor(name) {
		this.name = name;
		this.brands = [];
	}

	addBrand(brand) {
		this.brands.push(brand);
	}
	print() {
		console.log(`${this.name} 을 파는 음식점들:`);
		console.log(this.brands.join(','));
	}
}

const pizza = new Food('피자');

pizza.addBrand('피자헛');
pizza.addBrand('피자 스쿨');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');

chicken.addBrand('굽네');
chicken.addBrand('또레오레');
chicken.addBrand('BBQ');
chicken.addBrand('교촌');

pizza.print();
chicken.print(); */

// 삼항연산자
/*

const array = [];

array.push('method');

let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

console.log(text); */

// Truthy and Falsy

/* function prints(person) {
	if (!person) {
		console.log('Sorry person is Null');
	}
	console.log(person.name);
} */

/* const calculateCircleArea = (r = 1) => {
	return Math.PI * r * r;
};

const area = calculateCircleArea();

console.log(area); */

/* const object = { a: 1 };

function print({ a, b = 2 }) {
	console.log(a);
	console.log(b);
}

print(object); */

/* const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('result');
	}, 1000);
});

myPromise.then((result) => {
	console.log(result);
}); */

function increaseAndPrint(n) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const value = n + 1;
			if (value === 5) {
				const error = new Error();
				error.name = 'ValueIsFiveError';
				reject(error);
				return;
			}
			console.log(value);
			resolve(value);
		}, 1000);
	});
}
increaseAndPrint(0).then((n) => {
	console.log('result: ', n);
});
