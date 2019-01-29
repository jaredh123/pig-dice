$(document).ready(function() {

  var pointsOne = 0;
  var pointsTwo = 0;

  var runningTotal = 0;

  var roll;

  var turn = 1;

  $("#turn").text("Its player " + turn + "'s turn");

  $("button#roll").click(function() {
    if (turn == 1){
      roll = Math.floor((Math.random() * 6) + 1);
      runningTotal = runningTotal + roll;
      $("#rollValue").text(roll);
      $("#runningTotal").text(runningTotal)
      if (roll == 1) {
        turn = 2;
        runningTotal = 0;
        $("#turn").text("Its player " + turn + "'s turn");
      }
      if (pointsOne >= 100) {
        alert("Player 1 Wins");
        location.reload();
      }
    }
    else if (turn == 2) {
      roll = Math.floor((Math.random() * 6) + 1);
      runningTotal = runningTotal + roll;
      $("#rollValue").text(roll);
      $("#runningTotal").text(runningTotal)
      if (roll == 1) {
        turn = 1;
        runningTotal = 0;
        $("#turn").text("Its player " + turn + "'s turn");
      }
      if (pointsTwo >= 100) {
        alert("Player 2 Wins");
        location.reload();
      }
    }
  });


  $("button#switch").click(function(){
    if (turn == 1){
      $("#turn").text("Its player 2's turn");
      pointsOne = pointsOne + runningTotal;
      $("#pointsOne").text(pointsOne);
      turn++;
      runningTotal = 0;
      if (pointsOne >= 100) {
        alert("Player 1 Wins");
        location.reload();
      }
    }
    else {
      $("#turn").text("Its player 1's turn");
      pointsTwo = pointsTwo + runningTotal;
      $("#pointsTwo").text(pointsTwo);
      turn = 1;
      runningTotal = 0;
      if (pointsTwo >= 100) {
        alert("Player 2 Wins");
        location.reload();
      }
    }
  });
});
