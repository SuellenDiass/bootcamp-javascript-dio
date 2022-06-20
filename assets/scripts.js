function changeMode() {   // modifica classes
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass); // se tiver o darkMode ele tira e não tiver ele coloca dark-mod
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {        // altera texto button
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

	if (body.classList.contains(darkModeClass)) { // verifica se dentro da classe existe 'dark-mode'
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;
	h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');  // pega id do button no html
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];    // não tem class e nem id
const footer = document.getElementsByTagName('footer')[0];

button.addEventListener('click', changeMode);    // inserir o evento e a função