var splinter = null;
var poging [];

//causes game to start
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
	var ans = input.split('');
	var z = 0

	for (var i = 0; i < 5; i++) {
		var x = [z]
		var y = document.getElementsByClassName('andwoord_1') + x;


		
		if (y == splinter[z]) {
			document.getElementsByClassName('andwoord_1')[z].Style.Color = "green";
		};
		console.log(y)
		z++;
	}

	console.log(input);
} 