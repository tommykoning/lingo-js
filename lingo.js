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

	for (var i = 0; i < 5;) {
		poging[poging_nummer][i].innerHTML = ans[i];

		if (ans[i] == lingo_ans[i]) {
			poging[poging_nummer][i].style.background = "green";

		} else {
			poging[poging_nummer][i].style.background = "red";

			for (var k = 0; k < 5; k++) {
				if (ans[k] == lingo_ans[i]) {
					poging[poging_nummer][i].style.background = "yellow";
				}
			}
		}
	if (poging_nummer >= 4) {
		location.reload(); 
	}
	i++
	}

	poging_nummer++;
	document.getElementById('answer_Input').value = '';
	console.log(poging_nummer);
} 