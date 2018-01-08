let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let input = document.getElementById('user-guess');

function guess() {
    //add functionality to guess function here
    if(attempt || answer){
    	setHiddenFields();
    }

    if(validateInput(input.value)){
    	attempt++;
    }else{
    	return false;
    }

    if(getResults() || attempt < 10){
    	setMessage('You Win! :)');
    }else{
    	setMessage('You Lose! :(');
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

function getResults(input) {
	let resultsArea = document.getElementById('results');
	let results ='';
	let isCorrect = false;
	for (let i=0;i< input.value.length;i++) {
		if(input.value[i] === answer[i]){
			results += '<span class="glyphicon glyphicon-ok"></span>';
			isCorrect = true;
		}else{
			results += '<span class="glyphicon glyphicon-remove"></span>';
		}

		if(input.value[i].indexOf(answer[i]) !== -1){
			results += '<span class="glyphicon glyphicon-transfer"></span>';
			isCorrect = false;
		}
	}

	resultsArea.innerHTML += '<div class="row"><span class="col-md-6">' + input + '</span><span class="col-md-6">'+ results +'</span></div>';
	return isCorrect;
}