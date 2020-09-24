// defines animal emoji array
var animalEmojis = [
  "😺",
  "😸",
  "😻",
  "😽",
  "😼",
  "🙀",
  "😿",
  "😹",
  "😾",
  "🙈",
  "🙉",
  "🙊",
  "🐶",
  "🐺",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐸",
  "🐯",
  "🐨",
  "🐻",
  "🐷",
  "🐮",
  "🐗",
  "🐵",
  "🐒",
  "🐴",
  "🐑",
  "🐘",
  "🐼",
  "🐧",
  "🐦",
  "🐤",
  "🐥",
  "🐣",
  "🐔",
  "🐍",
  "🐢",
  "🐛",
  "🐝",
  "🐜",
  "🐞",
  "🐌",
  "🐙",
  "🐚",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🐄",
  "🐏",
  "🐀",
  "🐃",
  "🐅",
  "🐇",
  "🐉",
  "🐎",
  "🐐",
  "🐓",
  "🐕",
  "🐖",
  "🐁",
  "🐂",
  "🐲",
  "🐡",
  "🐊",
  "🐫",
  "🐪",
  "🐆",
  "🐈",
  "🐩",
  "🦄"
];
//defines array for game board
var boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//defines counter for points
var points = 0;
//defines placeholder for 'setInterval' timer 
var interval = "";
//defines 60 second count down
var timer = 60;
//defines number that holds previous random number, in order to make animals disappear
var prevNum = 0;
//defines a placeholder that holds a random number to choose a random square in the board
var randNum = 0;


//function that generates a random emoji from animalEmoji array
function generateRandEmoji() {
  return animalEmojis[Math.floor(Math.random() * animalEmojis.length)];
}

//function that makes a random animal appear
function animalRandomAppear(){
  prevNum = randNum;
  animalDisappear("box"+prevNum);  
  randNum = Math.floor(Math.random()*boardArray.length);
  document.getElementById("box"+randNum).innerHTML = generateRandEmoji();
}

//function that makes the appearing animal, disappear
function animalDisappear(element){
  document.getElementById(element).innerHTML = "";
}

//function that counts down from sixty (by subtracting 1 second every second)
function modTimer(){
  document.getElementById("timer").innerHTML = timer--;
}

//function that resets game, interval, board, timer, points and start button; also alerts end game
function resetGame(){
  clearInterval(interval);
  alert("Game Over. You whacked "+points+" animals in 60 seconds! Good whacking!");
  clearBoard()
  timer = 60;
  points = 0;
  document.getElementById("startButton").setAttribute("onclick", "startGame()");
  return; 
}

//function that clears board of any emojis
function clearBoard(){
  boardArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  for (var i = 0; i<boardArray.length; i++){
    document.getElementById("box"+i).innerHTML = "";
  }
}

//function that calls other timer functions to use during the interval
//calling 2 functions in an interval is messy, so for code cleanliness this function exists
function timerActions(){
  animalRandomAppear()
  modTimer()
}

//function that starts game and timer
function startGame(){
  setTimeout(resetGame, 62000);
  interval = setInterval(timerActions, 1000);
  document.getElementById("startButton").setAttribute("onclick", "");
}

//function that adds points to 'points' variable every time an animal is 'whacked'
function boxClicked(boxId){
  var boxContent = document.getElementById(boxId).innerHTML;
  if (boxContent!=""){
    points++
    document.getElementById("points").innerHTML = points;
    animalRandomAppear()
  }
  
}


