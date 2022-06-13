
const calc = document.querySelector('.calc');
const result = document.querySelector('.calc__res')

calc.addEventListener('click', function (event) {
	if (!event.target.classList.contains('calc__btn')) return;
	const input = event.target.innerText;

	switch (input) {
		case 'C':
			result.innerText = '';
			break;

		case '=':
			if (result.innerText.search(/[^0-9*/+-.]/mi) != -1) return;
			result.innerText = eval(result.innerText).toFixed(2);
			break;

		default:
			result.innerText += input;
	}
});