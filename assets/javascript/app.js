//Setting variables for time, the game questions, right & wrong answers, and our timeout function.
var timeRemaining = 10;
var questions = {
    q1:'How Many World Series Championships has the Athletics franchise won?',
    //9
    q2: "In what city did the A's originally play after being a founding member of the American League in 1901",
    //Philadelphia
    q3: "How many A's players have been inducted to the baseball hall of fame in Cooperstown, NY?",
    //43
    q4: "What pitcher has the most wins in an A's uniform?",
    //Eddie Plank
    q5: "Who is the A's franchise leader in career home-runs?",
    // Mark McGwire
}
var rightAnswer = 0;
var wrongAnswer = 0;
var intervalID;
//Now to create game functions. It makes sense to me to go in order, so I need a function to start the game,
//a function to cycle through the questions, and to manipulate the HTML when questions are answered.
//Then I need a function to reset the game.
//I went through several iterations of trying to create a timer that would reset each question. I tried to define the function globally and then call it in each question function, but I struggled to get it to work.
// function timer(){
//     timeRemaining = timeRemaining - 1; 
//     if(timeRemaining === 0){
//         alert('Time up, next question!');
//         qTwo();
//     }
// }
// function qOneCountdown() {
//     intervalId = setInterval(decrement, 1000);
//   }
//   function decrement() {
//     timeRemaining--;
//     $('#winsLosses').html(timeRemaining + ' seconds.');
//     if(timeRemaining === 0) {
//         stop();
//         alert('Out of time, next question!')
//         clearInterval(intervalId);
//         qTwo();
//     }
// }
// function stop(){
//     clearInterval(intervalId);
// }

// function qTwoCountdown() {
//     stop()
//     intervalId = setInterval(decrement, 1000);
//   }
//   function decrement() {
//     timeRemaining--;
//     $('#winsLosses').html(timeRemaining + ' seconds.');
//     if(timeRemaining === 0) {
//         stop();
//         alert('Out of time, next question!')
//         clearInterval(intervalId);
//         qThree();
//     }
// }

function beginGame(){
    $('.btn-warning').on('click', function() {
                //qOneCountdown();
                // decrement();
                console.log(timeRemaining);
                console.log(questions.q1);
                $('#qsHere').html(questions.q1);
                $('#radioHere').html("9  <input type='radio' id='radioOne'><br>");
                $('#radioHere').append("11 <input type='radio' id='radioTwo'><br>");
                $('#radioHere').append("2  <input type='radio' id='radioThree'><br>");
                $('#radioHere').append("6  <input type='radio' id='radioFour'><br>");
                $('#imgHere').html("<img src='seriestrophy.png' alt='trophy' height='373' width='301'>"); 
                $('#radioOne').on('click', function(){
                    rightAnswer++;
                    qTwo();
                    console.log(rightAnswer);
                });
                $('#radioTwo').on('click', function(){
                        wrongAnswer++;
                        qTwo();
                });
                $('#radioThree').on('click', function(){
                            wrongAnswer++;
                            qTwo();
                });
                $('#radioFour').on('click', function(){
                                wrongAnswer++;
                                qTwo();
                });

            });
 };
    function qTwo() {
        if(rightAnswer <= 1){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        if(wrongAnswer <= 1){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        $('#qsHere').on('click', function(){
            //intervalID = setInterval(decrement, 1000);
            //decrement();
            console.log(timeRemaining);
            $('#qsHere').html(questions.q2);
            $('#radioHere').html("Hartford  <input type='radio' id='radioOne'><br>");
            $('#radioHere').append("Boston <input type='radio' id='radioTwo'><br>");
            $('#radioHere').append("Philadelphia  <input type='radio' id='radioThree'><br>");
            $('#radioHere').append("Dayton  <input type='radio' id='radioFour'><br>");
            $('#imgHere').html("<img src='earlyLogo.png' alt='trophy' height='284' width='300'>");
            $('#radioOne').on('click', function(){
                wrongAnswer++;
                console.log(wrongAnswer);
                qThree();
            });
            $('#radioTwo').on('click', function(){
                wrongAnswer++;
                console.log(wrongAnswer);
                qThree();
            });
            $('#radioThree').on('click', function(){
                rightAnswer++;
                console.log(rightAnswer);
                qThree();
            });
            $('#radioFour').on('click', function(){
                wrongAnswer++;
                console.log(wrongAnswer);
                qThree();
            });

        });
    };
    function qThree(){
        if(rightAnswer <= 2){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        if(wrongAnswer <= 2){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        $('#qsHere').on('click', function(){
            $('#qsHere').html(questions.q3);
            $('#radioHere').html("18  <input type='radio' id='radioOne'><br>");
            $('#radioHere').append("43 <input type='radio' id='radioTwo'><br>");
            $('#radioHere').append("68  <input type='radio' id='radioThree'><br>");
            $('#radioHere').append("1  <input type='radio' id='radioFour'><br>");
            $('#imgHere').html("<img src='baseballHOF.png' alt='trophy' height='440' width='297'>");
            $('#radioOne').on('click', function(){
                wrongAnswer++;
                qFour();
            });
            $('#radioTwo').on('click', function(){
                rightAnswer++;
                qFour();
            });
            $('#radioThree').on('click', function(){
                wrongAnswer++;
                qFour();
            });
            $('#radioFour').on('click', function(){
                wrongAnswer++;
                qFour();
            });

        });
    };
    function qFour(){
        if(rightAnswer <= 3){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        if(wrongAnswer <= 3){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        $('#qsHere').on('click', function(){
            $('#qsHere').html(questions.q4);
            $('#radioHere').html("Catfish Hunter  <input type='radio' id='radioOne'><br>");
            $('#radioHere').append("Dave Stewart <input type='radio' id='radioTwo'><br>");
            $('#radioHere').append("Barry Zito  <input type='radio' id='radioThree'><br>");
            $('#radioHere').append("Eddie Plank  <input type='radio' id='radioFour'><br>");
            $('#imgHere').html("<img src='ePlank.png' alt='trophy' height='395' width='336'>");
            $('#radioOne').on('click', function(){
                wrongAnswer++;
                qFive();
            });
            $('#radioTwo').on('click', function(){
                wrongAnswer++;
                qFive();
            });
            $('#radioThree').on('click', function(){
                wrongAnswer++;
                qFive();
            });
            $('#radioFour').on('click', function(){
                rightAnswer++;
                qFive();
            });

        });
    };
    function qFive(){
        if(rightAnswer <= 5){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        if(wrongAnswer <= 5){
            $('#qsHere').html('============><br>Click for Next Question')
            console.log(rightAnswer);
        };
        $('#qsHere').on('click', function(){
            $('#qsHere').html(questions.q5);
            $('#radioHere').html("Reggie Jackson  <input type='radio' id='radioOne'><br>");
            $('#radioHere').append("Mark McGwire <input type='radio' id='radioTwo'><br>");
            $('#radioHere').append("Jason Giambi  <input type='radio' id='radioThree'><br>");
            $('#radioHere').append("Jimmie Foxx  <input type='radio' id='radioFour'><br>");
            $('#imgHere').html("<img src='homeRun.png' alt='trophy' height='268' width='350'>");
            $('#radioOne').on('click', function(){
                wrongAnswer++;
                endGame();
            });
            $('#radioTwo').on('click', function(){
                rightAnswer++;
                endGame();
            });
            $('#radioThree').on('click', function(){
                wrongAnswer++;
                endGame();
            });
            $('#radioFour').on('click', function(){
                wrongAnswer++;
                endGame();
            });

        });
    };
    function endGame(){
        if(rightAnswer <= 5){
            $('#winsLosses').html("<h1>" + rightAnswer + " / 5</h1>");
            console.log(rightAnswer);
            $('#btmBoxOne').html("<img src='tonyLaRussa.png' alt='Tony'>");
            $('#btmBoxTwo').html("<img src ='connieMack.png' alt ='Connie'>")
        };
    }


beginGame();

