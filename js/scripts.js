

function PigDice(player1, player2){
  this.player1,
  this.player2
}

function Player() {
  this.totalScore = 0,
  this.roundScore = 0
}

Player.prototype.addDie = function(){
  console.log("AddDie ran!");
  var roll =  Math.floor(Math.random() * 6) + 1
  if (roll == 1) {
    console.log("YOU SORRY GOOPLE ROLLED A ONE!!! RIP IN PEPPERONIS!")
    this.roundScore = 0;
  } else {
    this.roundScore += roll;
  }
}

Player.prototype.stop = function() {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  if (this.totalScore >= 100) {
    console.log('YOU WON');
  // } else if (this.roundScore === 0)
  // $('button').css('disabled')
}
}

PigDice.prototype.addingUpRoll = function (round) {
  this.roundScore += round;
}


$(function() {

  var player1Input = $('#q1').val();
  var player2Input = $('#q2').val();

  var output1 = $('#output1');
  var output2 = $('#output2');

  var player1 = new Player();
  var player2 = new Player();
  $('form#roll1').submit(function(event) {
    player1.addDie();
    event.preventDefault();
    $("#player1Round").html(player1.roundScore);
    $("#player1Total").html(player1.totalScore);
  })

  $('form#roll2').submit(function(event) {
    player2.addDie();
    event.preventDefault();
    $("#player2Round").html(player2.roundScore);
    $("#player2Total").html(player2.totalScore);
  })

  $("form#stopP1").submit(function(event) {
    event.preventDefault();
    player1.stop();
    $("#player1Round").html(player1.roundScore);
    $("#player1Total").html(player1.totalScore);
  })
});
