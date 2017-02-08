var splinter = null

//causes game to st
function start() {
	var nummer = Math.floor(Math.random() * words.length) ; 
	var lingowoord = words[nummer];
	splinter = lingowoord.split('');
	for (var i = 0; i < 5;) {
		document.getElementsByClassName('beginletter')[i].innerHTML = splinter[0];
		i++;
	}

	console.log(splinter);
}

//resets game
function reset() {
	location.reload();
}

//checks answer 
function check() {
	var input = document.getElementById('answer_Input').value, 
	answer_input = input.value;

	console.log(input);
} 