var arr = [];
var len = 5; 
for (var i = 0; i < len ; i++) {
	
// недопущение ввода пустой строки
	do{
	var userName = prompt('Введите имя', '');
}
	while (userName === ''); 
	
	if (userName === null) break;
	arr.push(userName);	
}
alert(arr);
var compareName = prompt('Введите имя для сравнения', '');
function searchName(compareName , arr) {
 var text = 'Совпадений не найдено!';
var len = arr.length;
 for (var i = 0; i < len; i++) {
 if (arr[i] === compareName) {
 text = compareName + ', вы успешно вошли';
break; 
}


 } return alert( text );
 }
 searchName(compareName , arr);
