function nightMode() {
    var element = document.body;
    var content = document.getElementById("NightModetext");
    element.className = "night-mode";
    content.innerText = "Night Mode is ON";
}

function dayMode() {
    var element = document.body;
    var content = document.getElementById("NightModetext");
    element.className = "day-mode";
    content.innerText = "Night Mode is OFF";
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

/*document.addEventListener("DOMContentLoaded", function() { startscript(); }, false);
var player;

function startscript() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}

function play_aud() 
{
 player.play();
}
function pause_aud() 
{
 player.pause();
}
function stop_aud() 
{
 player.pause();
 player.currentTime = 0;
}
function change_vol()
{
 player.volume=document.getElementById("change_vol").value;
}
*/
