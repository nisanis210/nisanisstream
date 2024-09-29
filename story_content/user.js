function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5fZ6UiXt5vb":
        Script1();
        break;
      case "5yODlzjRxFl":
        Script2();
        break;
      case "6iUCB5wGnKK":
        Script3();
        break;
      case "6oJBVljqxSy":
        Script4();
        break;
      case "6YpP6tI06fK":
        Script5();
        break;
      case "6IHF66RMAhD":
        Script6();
        break;
      case "5VQXnXjv4UO":
        Script7();
        break;
      case "6Efe1R5U5KQ":
        Script8();
        break;
      case "6VbWGfsPNzX":
        Script9();
        break;
      case "6mfynJaTmgr":
        Script10();
        break;
      case "6HJYgQXJ9JQ":
        Script11();
        break;
      case "69ouepEnnoo":
        Script12();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

