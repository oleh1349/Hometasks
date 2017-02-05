var active = false;
var act = false;
function startTimer(){
	if(active){
		var timer = document.querySelector('.timeVisual').innerHTML;
		var arr = timer.split(":");
		var hour = arr[0];
		var min = arr[1];
		var sec = arr[2];
		
			if (sec == 59) {
				if (min == 59){
					hour++;
					min = 0;
					if (hour < 10) hour = "0" + hour;
				}else{min++;} 

			if (min < 10) min = "0" + min;
			sec = 0;}
		else{sec++;
		if (sec < 10 ) sec = "0" + sec;
		}
		setTimeout(startTimer, 1000);


		document.querySelector('.timeVisual').innerHTML = hour + ":" + min + ":" + sec;
	}
		

}
		
function msecStartTimer(){
	if (act) {
		var msec_timer = document.querySelector('.msecTimeVisual').innerHTML;
		var array = msec_timer.split(":");	
		var msec = array[0];
		
		if (msec == 999) msec = 0;
			else{msec++};
			
		setTimeout(msecStartTimer, 1);
		 document.querySelector('.msecTimeVisual').innerHTML = msec;	
    }
}
	

function pauseContTimer(){
	if (active == false && act == false){
		active = true;
		act = true;
		startTimer();
		msecStartTimer();
		document.getElementById('startButt').innerHTML = "PAUSE";

		document.getElementById('startButt').style.backgroundColor = "#2f92ea";
	}


	else{
		active = false;
		 act = false;
		document.getElementById('startButt').innerHTML = "CONTINUE";
		document.getElementById('startButt').style.backgroundColor = "#aca72a";
	}
}

document.getElementById('startButt').addEventListener('click', pauseContTimer);

function clearTimer(){
	document.querySelector('.timeVisual').innerHTML = "00" + ":" + "00" + ":" + "00";
	document.querySelector('.msecTimeVisual').innerHTML  = "000";
	document.getElementById('startButt').innerHTML = "START";
	document.getElementById('startButt').style.backgroundColor = "green";
}
document.getElementById('clearButt').addEventListener('click', clearTimer);