//look into tightening up animations/color scheme change on different devices
var colors = ['#F6511D', '#D19200', '#00A0E5', '#5E8900',
			  '#0D2C54', '#610F7F', '#C11B23'
			 ];
var num = "";
var multiplierArr = [];

$(document).ready(function() {
	document.addEventListener('keydown', handleKeyPress);
});

//init function
function submitBpm() {
	colorChange();
	var bpm = document.getElementById("formBpm").value;
	bpmCheck(bpm);
	document.getElementById("bpmDisplay").innerHTML = bpm;
	multiplier(bpm);
	notesCalc(bpm);
	tripletsCalc(bpm);
	dottedCalc(bpm);
};

//enter key handling for input form
function handleKeyPress(e) {
	var key=e.keyCode || e.which;
	    if (key == 13) {
	    	e.preventDefault();
	    	submitBpm();
	}
};

//change colors with animation
function colorChange(){
	var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1050);
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
      $(".line").animate({
        backgroundColor: colors[color]
      }, 1000);
      $(".calcHeadline").animate({
        color: colors[color]
      }, 950);
      $(".createdBy").animate({
        color: colors[color]
      }, 950);
      $("#formBpm").animate({
        borderColor: colors[color]
      }, 950);
      $(".calcHeadline").removeClass("clearText");
};

//safety reload if 0 or NaN entered
function bpmCheck(bpm){
	if(isNaN(bpm) || bpm == "" || bpm == 0 || bpm <= 0.01) {
		location.reload();
	}
};

//array for bpm multipliers
function multiplier(num){
	multiplierArr = [];
	for(var y=.25; y<=32; y*=2){
		multiplierArr.push(y);
	}
};

//calculate notes table
function notesCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-n" + i;
	y = (60000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = Math.round(y*100)/100;
   }
};

//calculate triplets table
function tripletsCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-t" + i;
	y = (40000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = Math.round(y*100)/100;
   }
};

//calculate dotted table
function dottedCalc(bpm){
var x = "";
var y = "";
for(var i=1; i<=8; i++){
	x = "table-d" + i;
	y = (90000 / bpm) / multiplierArr[i-1];
	document.getElementById(x).innerHTML = Math.round(y*100)/100;
   }
};