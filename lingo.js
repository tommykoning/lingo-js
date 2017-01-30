var splinter = null

function start() {
	var nummer = Math.floor(Math.random() * words.length) ; 
	var lingowoord = words[nummer];
	splinter = lingowoord.split('');
	document.getElementsByClassName('beginletter').innerHTML = 'splinter[0]';
	console.log(splinter);
}

function reset() {
	location.reload();
}

function check() {

}