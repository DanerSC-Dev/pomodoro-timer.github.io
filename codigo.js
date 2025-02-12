
let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";

window.onload = () =>{
	document.getElementById("minutes").innerHTML = workTime;
	document.getElementById("seconds").innerHTML = seconds;

	workTitle.classList.add("active");
}


function start(){
    document.getElementById("play").style.display = "none";
    document.getElementById("replay").style.display = "flex";


	seconds = 59;

	let workMinutes = workTime - 1;
	let breakMinutes = breakTime - 1;

	breakCount = 0;

let timerFunction = () =>{
    
    document.getElementById("minutes").innerHTML = workMinutes;
    document.getElementById("seconds").innerHTML = seconds;

    seconds = seconds - 1;

	if (seconds === 0) {
		workMinutes = workMinutes - 1;
		if (workMinutes === -1) {
			if (breakCount % 2 === 0) {
				workMinutes = breakMinutes;
				breakCount++;

				workTitle.classList.remove("active");
				breakTitle.classList.add("active");
			} else{
				workMinutes = workMinutes;
				breakCount++;

				breakTitle.classList.remove("active");
				workTitle.classList.add("active");
			};
		};
		seconds = 59;
	};
	
    };
    setInterval(timerFunction, 1000);
};

function reset(){
    location.reload();
}