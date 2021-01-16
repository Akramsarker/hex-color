

// selector
const content = document.getElementById('container');
const output = document.getElementById('output');
const btn = document.getElementById('button');


btn.addEventListener('click', function() {
	let hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

	let color = '#';

	for(let i = 0; i < 6; i++) {
	let num = Math.round(Math.random() * 15);
		let num2 = hexCodes[num];

		color += num2;
		content.style.backgroundColor = color;
		output.style.color = color;
		output.innerHTML = color;

	}

})
