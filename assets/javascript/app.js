


var number = 120;

var intervalId;

var correctAnswers = 0;
var incorrectAnswers = 0;
var notAnswered = 0;



$("#startButton").on("click", function () {
    $("#startButtonTime").html("<h1>" + number + "</h1>");
    $("#showContentStart").show()
    run();
});





function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $("#startButtonTime").html("<h1>" + number + "</h1>");
    if (number === 0) {
        checkAnswers();
        displayResult();
    }
}





$("#doneButton").on("click", function () {
    checkAnswers();
    displayResult();
});



function displayResult() {
    $("#allContent").html("<div class='card card-default'><div class='card-header'><div class='text-center'><h3 class='text - center'>All Done!</br></br>Correct Answers: " + correctAnswers + "</br></br>Incorrect Answers: " + incorrectAnswers + "</br></br>Unanswered: " + notAnswered + "</h3></div></div></div>");
}


function checkAnswers() {
    if ( $('input[name=q1]').is(':checked') ) {
        if ($('input[name=q1]:checked').val()==="Bell") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q2]').is(':checked') ) {
        if ($('input[name=q2]:checked').val()==="100C") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q3]').is(':checked') ) {
        if ($('input[name=q3]:checked').val()==="Fleming") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q4]').is(':checked') ) {
        if ($('input[name=q4]:checked').val()==="Dali") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q5]').is(':checked') ) {
        if ($('input[name=q5]:checked').val()==="1914") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q6]').is(':checked') ) {
        if ($('input[name=q6]:checked').val()==="Michelangelo") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q7]').is(':checked') ) {
        if ($('input[name=q7]:checked').val()==="Einstein") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }

    if ( $('input[name=q8]').is(':checked') ) {
        if ($('input[name=q8]:checked').val()==="Mercury") {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    } else {
        notAnswered++
    }
}