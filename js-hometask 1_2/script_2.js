var arr = [];

for (var i = 0; i < 5; i++) {
	var userName = prompt('Введите имя', '');
	if (userName == '') {userName = prompt('Введите имя', '')};
	if (userName == null) break;
	arr.push(userName);
}
alert(arr);

var compareName = prompt('Введите имя для сравнения', '');

for (var i = 0;i < 1 ;i++) {


	if (compareName == null) break;

	if (compareName == arr[0]) {alert(arr[0]+', вы успешно вошли')} 
		else if (compareName == arr[1]) {alert(arr[1]+', вы успешно вошли');}
	else if (compareName == arr[2]) {alert(arr[2]+', вы успешно вошли')}
	else if (compareName == arr[3]) {alert(arr[3]+', вы успешно вошли');}
	else if (compareName == arr[4]) {alert(arr[4]+', вы успешно вошли');}
	else {alert('Ошибка')}
}
