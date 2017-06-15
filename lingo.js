var lingo_ans = null;
var poging = [document.getElementsByClassName('andwoord_1'), document.getElementsByClassName('andwoord_2'), document.getElementsByClassName('andwoord_3'), document.getElementsByClassName('andwoord_4'), document.getElementsByClassName('andwoord_5')];
var poging_nummer = 0;

//causes game to start
function start() 
{
	var nummer = Math.floor(Math.random() * words.length) ; 
	var lingowoord = words[nummer];

	lingo_ans = lingowoord.split('');

	document.getElementById('beginletter').innerHTML = lingo_ans[0];
}

//resets game
function reset() 
{
	location.reload();
}

//checks answer 
function check() 
{
	var input = document.getElementById('answer_Input').value;
	var ans = input.split('', 5);
	var letterAns = lingo_ans

	for (var i = 5; var x = 0; i > 0;) {
		poging[poging_nummer][x].innerHTML = ans[x];


		if (ans[i] == letterAns[i]) {
			poging[poging_nummer][i].style.background = "green";
			delete letterAns[i];

		} else {
			poging[poging_nummer][i].style.background = "red";

			for (var k = 5; k < 0; k--) {
				if (ans[i] == letterAns[k]) {
					poging[poging_nummer][i].style.background = "yellow";
					delete letterAns[K];
				}
			}
		}
	if (poging_nummer >= 4) {
		location.reload(); 
	}
	i--
	}
	
	poging_nummer++;
	document.getElementById('answer_Input').value = '';
	console.log(poging_nummer);
} 