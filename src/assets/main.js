let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields () {
	attempt = 0;
	answer = Math.round(Math.random()*10000);
	if(answer.toString().length < 4){
		while(answer.toString().length - 4){
			answer = '0' + answer;
		}
	}
}