function pow (num,power) {
	var result =num;

	for (var i = 1; i < power; ++i) {
		result *= num;
	};
	for (var i = - 1; i > power; i--) {
		result =(1/(result*num));
	};
	if (num==0) {result==null} else{ if (power==0) {result=1};};
 

	return result;

}
var num = prompt('Enter the number', '');
var power = prompt('Enter the power-number', '');

console.log(pow(num,power));
