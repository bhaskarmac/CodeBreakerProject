let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
	let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(attempt || answer){
    	setHiddenFields();
    }

    if(validateInput(input.value)){
    	attempt++;
    }else{
    	return false;
    }
  }

//implement new functions here
function setHiddenFields() {
	attempt = 0;
	answer = Math.round(Math.random()*10000);
	if(answer.toString().length < 4){
		while(answer.toString().length - 4){
			answer = '0' + answer;
		}
	}
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
	if(input.toString().length === 4){
		return true;
	}else{
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
}