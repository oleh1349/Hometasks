var num = prompt('Enter the num', '');
var power = prompt('Enter the power', '');

// почему-то не срабатывает, проверка на ввод только цифр
while (isNaN (num)) {
	var num = prompt('Enter the num', '');
}
while (isNaN (power)) {
var power = prompt('Enter the power', '');
}
function pow (num,power) {
	var result = num;
if (power >= 1){
	for (var i = 1; i < power ;i++) 
	{result *= num;}
	}

else if (power < 0){

 for (var i =0 ; i < (power*(-1)); i++) 
 
 {result *= num}
result=(1/result*num);
}

else if (power==0) {result=1}
 else {result==null}

	return result;
}
console.log(pow(num,power));
