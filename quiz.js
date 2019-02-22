function submit(val)
{
	switch (val){
		case "login" : 
			sessionStorage.clear();
			window.location.href = "question1.html";
			break;
		case "question1" : 
			if (document.getElementById('question1_option4').checked == true) {
				sessionStorage.setItem("question1", 1);
			}
			else if (document.getElementById('question1_option1').checked == true || document.getElementById('question1_option2').checked == true || document.getElementById('question1_option3').checked == true) {
				sessionStorage.setItem("question1", 0);
			}
			window.location.href = "question2.html";
			break;
		case "question2" : 
			if (document.getElementById('question2_option1').checked == true) {
				sessionStorage.setItem("question2", 1);
			}
			else if (document.getElementById('question2_option2').checked == true || document.getElementById('question2_option3').checked == true || document.getElementById('question2_option4').checked == true) {
				sessionStorage.setItem("question2", 0);
			}
			window.location.href = "question3.html";
			break;
		case "question3" : 
			if (document.getElementById('question3_option1').checked == true && document.getElementById('question3_option2').checked == true) {
				sessionStorage.setItem("question3", 1);
			}
			else if (document.getElementById('question3_option3').checked == true || document.getElementById('question3_option4').checked == true || document.getElementById('question3_option5').checked == true || document.getElementById('question3_option6').checked == true) {
				sessionStorage.setItem("question3", 0);
			}
			window.location.href = "question4.html";
			break;
		case "question4" : 
			if (document.getElementById('question4_option1').checked == true) {
				sessionStorage.setItem("question4", 1);
			}
			else if (document.getElementById('question4_option2').checked == true || document.getElementById('question4_option3').checked == true || document.getElementById('question4_option4').checked == true) {
				sessionStorage.setItem("question4", 0);
			}
			window.location.href = "survey.html";
			break;
		case "survey" : 
			window.location.href = "summary.html";
	}
}

function cancel()
{
	var choices = document.getElementsByName('choice');
	Array.prototype.forEach.call(choices, function (choice) {
        choice.checked = false;
    });
	
	var moreChoices = document.getElementsByName('choiceB');
	Array.prototype.forEach.call(moreChoices, function (choice) {
        choice.checked = false;
    }); 

    var blanks = document.getElementsByName('blank');
	Array.prototype.forEach.call(blanks, function (blank) {
        blank.innerHTML = '_____';
    });
}

function fillInTheBlank()
{
	if(document.getElementById('question3_option1').checked == true) {
		document.getElementById('blank1').innerHTML = document.getElementById('question3_option1').value;
	}
	if(document.getElementById('question3_option2').checked == true) {
		document.getElementById('blank2').innerHTML = document.getElementById('question3_option2').value;
	}
	if(document.getElementById('question3_option3').checked == true) {
		document.getElementById('blank1').innerHTML = document.getElementById('question3_option3').value;
	}
	if(document.getElementById('question3_option4').checked == true) {
		document.getElementById('blank2').innerHTML = document.getElementById('question3_option4').value;
	}
	if(document.getElementById('question3_option5').checked == true) {
		document.getElementById('blank1').innerHTML = document.getElementById('question3_option5').value;
	}
	if(document.getElementById('question3_option6').checked == true) {
		document.getElementById('blank2').innerHTML = document.getElementById('question3_option6').value;
	}
}

function calculateScore()
{
	var quantitative_score = parseInt(sessionStorage.getItem("question1")===null?0:sessionStorage.getItem("question1"))+parseInt(sessionStorage.getItem("question2")===null?0:sessionStorage.getItem("question2"));
	var quantitative_answered = (sessionStorage.getItem("question1")===null?0:1)+(sessionStorage.getItem("question2")===null?0:1);
	var quantitative_total_score = quantitative_score*50;
	document.getElementById('quantitative_score').innerHTML = quantitative_score.toString();
	document.getElementById('quantitative_answered').innerHTML = quantitative_answered.toString();
	document.getElementById('quantitative_total_score').innerHTML = quantitative_total_score.toString();
	 
	var reading_score = sessionStorage.getItem("question3")===null?0:sessionStorage.getItem("question3");
	var reading_answered = sessionStorage.getItem("question3")===null?0:1;
	var reading_total_score = reading_score*50;
	document.getElementById('reading_score').innerHTML = reading_score.toString();
	document.getElementById('reading_answered').innerHTML = reading_answered.toString();
	document.getElementById('reading_total_score').innerHTML = reading_total_score.toString();
	
	var video_score = sessionStorage.getItem("question4")===null?0:sessionStorage.getItem("question4");
	var video_answered = sessionStorage.getItem("question4")===null?0:1;
	var video_total_score = video_score*50;
	document.getElementById('video_score').innerHTML = video_score.toString();
	document.getElementById('video_answered').innerHTML = video_answered.toString();
	document.getElementById('video_total_score').innerHTML = video_total_score.toString(); 
}