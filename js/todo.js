const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

const deleteToDo = (event) => {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter((toDo) => {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
};

const saveToDos = () => {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
};

const paintToDo = (text) => {
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const span = document.createElement('span');
	const newId = toDos.length + 1;
	delBtn.innerText = '❌';
	// delBtn.style.border:none;
	delBtn.addEventListener('click', deleteToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};
	toDos.push(toDoObj);
	saveToDos();
};

const handleSubmit = (event) => {
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value = '';
};

const loadToDos = () => {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach((toDo) => {
			paintToDo(toDo.text);
		});
	}
};

const init = () => {
	loadToDos();
	toDoForm.addEventListener('submit', handleSubmit);
};

init();
