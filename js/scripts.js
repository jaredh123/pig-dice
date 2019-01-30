$(document).ready(function() {
  var pointsOne = 0;
  var pointsTwo = 0;

  var runningTotal = 0;

  var roll;

  var turn = 1;

  $("#turn").text("Its player " + turn + "'s turn");

  $("button#roll").click(function() {
    if (turn == 1){
      $("#player2").removeClass("blue");
      $("#player1").addClass("blue");
      roll = Math.floor((Math.random() * 6) + 1);
      runningTotal = runningTotal + roll;
      $("#rollValue").text(roll);
      $("#runningTotal").text(runningTotal)
      if (roll == 1) {
        turn = 2;
        runningTotal = 0;
        $("#player1").removeClass("blue");
        $("#player2").addClass("blue");
        $("#turn").text("Its player " + turn + "'s turn");
        alert("Its player " + turn + "'s turn");
      }
      if (pointsOne >= 100) {
        alert("Player 1 Wins");
        location.reload();
        $("#rules").hide();
      }
    }
    else if (turn == 2) {
      $("#player1").removeClass("blue");
      $("#player2").addClass("blue");
      roll = Math.floor((Math.random() * 6) + 1);
      runningTotal = runningTotal + roll;
      $("#rollValue").text(roll);
      $("#runningTotal").text(runningTotal)
      if (roll == 1) {
        turn = 1;
        runningTotal = 0;
        $("#player2").removeClass("blue");
        $("#player1").addClass("blue");
        $("#turn").text("Its player " + turn + "'s turn");
        alert("Its player " + turn + "'s turn");
      }
      if (pointsTwo >= 100) {
        alert("Player 2 Wins");
        location.reload();
        $("#rules").hide();
      }
    }
  });

  $("button#switch").click(function() {
    if (turn == 1){
      $("#player1").removeClass("blue");
      $("#player2").addClass("blue");
      $("#turn").text("Its player 2's turn");
      pointsOne = pointsOne + runningTotal;
      $("#pointsOne").text(pointsOne);
      turn++;
      alert("Its player " + turn + "'s turn");
      runningTotal = 0;
      if (pointsOne >= 100) {
        alert("Player 1 Wins");
        location.reload();
      }
    }
    else {
      $("#player2").removeClass("blue");
      $("#player1").addClass("blue");
      $("#turn").text("Its player 1's turn");
      pointsTwo = pointsTwo + runningTotal;
      $("#pointsTwo").text(pointsTwo);
      turn = 1;
      alert("Its player " + turn + "'s turn");
      runningTotal = 0;
      if (pointsTwo >= 100) {
        alert("Player 2 Wins");
        location.reload();
      }
    }
  });

  $("#ruleButton").click(function() {
    $("#rules").toggle();
  });
});
