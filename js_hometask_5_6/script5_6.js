var active = false;
var time  = new Date();

		var timer = document.querySelector('.timeVisual').innerHTML;
		var arr = timer.split(":");
		
		var hour = arr[0];
		var min = arr[1];
		var sec = arr[2];
		
		
		var msec_timer = document.querySelector('.msecTimeVisual').innerHTML;
		var array = msec_timer.split(":");	
		var msec = array[0];

function startTimer(){
	if(active){
			
		var time2 = Date.now();
		var time3 = time2 - time;

		// msec = time3.getMilliseconds();
		// sec = time3.getSeconds();
		// min = time3.getMinutes();
		// hour = time3.getHours();

		msec = time3%1000;

		sec=Math.floor((time3 / 1000) % 60);
		if (sec < 10 ) sec = "0" + sec;

		min=Math.floor((time3 / 60000) % 60);
		if (min < 10) min = "0" + min;

		hour=Math.floor((time3 / 3600000) % 60);
		if (hour < 10) hour = "0" + hour;
		
		
		}
		setTimeout(startTimer, 1);

		 document.querySelector('.msecTimeVisual').innerHTML = msec;	
		document.querySelector('.timeVisual').innerHTML = hour + ":" + min + ":" + sec;
	}

// function msecStartTimer(){
// 	if (act) {
// 		var msec_timer = document.querySelector('.msecTimeVisual').innerHTML;
// 		var array = msec_timer.split(":");	
// 		var msec = array[0];
		
// 		if (msec == 999) msec = 0;
// 			else{msec++};
			
// 		setTimeout(msecStartTimer, 1);
// 		 document.querySelector('.msecTimeVisual').innerHTML = msec;	
//     }
// }
	

function pauseContTimer(){
	if (active == false ){
		active = true;
		startTimer();

		document.getElementById('startButt').innerHTML = "PAUSE";

		document.getElementById('startButt').style.backgroundColor = "#2f92ea";
	}


	else{
		active = false;

		document.getElementById('startButt').innerHTML = "CONTINUE";
		document.getElementById('startButt').style.backgroundColor = "#aca72a";
	}
}

document.getElementById('startButt').addEventListener('click', pauseContTimer);

function clearTimer(){

	msec = '000';
		sec = '00';
		min = '00';
		hour = '00';

		var time4 = new Date();
		var time3 = time4 - time;
	document.querySelector('.msecTimeVisual').innerHTML  = "000";
	document.getElementById('startButt').innerHTML = "START";
	document.getElementById('startButt').style.backgroundColor = "green";
}
document.getElementById('clearButt').addEventListener('click', clearTimer);
