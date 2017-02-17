var lingo_ans = null;
var poging = [document.getElementsByClassName('andwoord_1') , document.getElementsByClassName('andwoord_2') ,  document.getElementsByClassName('andwoord_3') , document.getElementsByClassName('andwoord_4') , document.getElementsByClassName('andwoord_5')];
var poging_nummer = 0;

//causes game to start
function start() {
	var nummer = Math.floor(Math.random() * words.length) ; 
	var lingowoord = words[nummer];

	lingo_ans = lingowoord.split('');

	for (var i = 0; i < 5;) {
		document.getElementsByClassName('beginletter')[i].innerHTML = lingo_ans[0];
		i++;
	}

	console.log(lingo_ans);
}

//resets game
function reset() {
	location.reload();
}

//checks answer 
function check() {
	var input = document.getElementById('answer_Input').value;
	var ans = input.split('', 5);

	poging[poging_nummer][i] = ans[i++];

	for (var i = 0; i < 4;) {
		poging[poging_nummer][i] = ans[i];

		if (ans[i] == lingo_ans[i]) {
			poging[poging_nummer][i].style.background = "green";

		} else {
			poging[poging_nummer][i].style.background = "red";

			for (var k = 0; k < 4; k++) {
				if (ans[k] == lingo_ans[i]) {
					poging[poging_nummer][i].style.background = "yellow";
				}
			}
		}
	i++
	}

	/*
	if (ans == lingo_ans) {
		var won = window.open('http://images.8tracks.com/cover/i/001/132/573/68696.original-6467.jpg?rect=0,0,400,400&q=98&fm=jpg&fit=max', '_blank');
		won.focus(); 

		location.reload();
	}

	console.log(poging_nummer);

	if (poging_nummer = 4) {
		var lose = window.open('https://s3.amazonaws.com/bit-photos/large/6285178.jpeg', '_blank');
		lose.focus();

		location.reload();
	}
	*/

	poging_nummer++;
	document.getElementById('answer_Input').value = '';
	console.log(poging_nummer);
} 