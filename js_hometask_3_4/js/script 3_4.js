var progTest = {

callWrapper:function(){
var bodyElem = document.body;
var wrapElem = document.createElement('div');
wrapElem.classList.add('wrapper');
wrapElem.style.backgroundColor = '#99a9b6';
wrapElem.style.width = '900px';
wrapElem.style.height = '600px';
wrapElem.style.margin = 'auto';
bodyElem.appendChild(wrapElem);
},
callH1:function(){
	var h1Elem = document.createElement('h1');
	h1Elem.innerHTML = 'Тест по программированию';
	h1Elem.style.fontFamily = 'Arial';
	h1Elem.style.fontSize = '25px';
	h1Elem.style.textAlign = 'center';
	h1Elem.style.paddingTop = '20px';
	var wrapper = document.querySelector('.wrapper');
	wrapper.insertBefore(h1Elem, wrapper.children[0]);
},
	 callForm:function(){
	var formElem = document.createElement('form');
	formElem.classList.add('formElem')
	formElem.style.backgroundColor ='#cfcfcf';
	formElem.style.width = '800px';
	formElem.style.margin = 'auto';
	var wrapper = document.querySelector('.wrapper');
	wrapper.appendChild(formElem);
},

callDivH3Labels:function(){
	for (var i = 0; i < 3; i++) {
	var divElem = document.createElement('div');
		divElem.classList.add('divElem');
		var formElem = document.querySelector('.formElem')
		formElem.appendChild(divElem);

	var h3Elem = document.createElement('h3');
	h3Elem.classList.add('h3Elem');
	h3Elem.style.fontFamily = 'Arial';
	h3Elem.style.fontSize= '14px';

	var h3ElemTitle = ['1. Вопрос № 1',
	'2. Вопрос № 2','3. Вопрос № 3'];
	h3Elem.innerHTML =  h3ElemTitle[i];
	// var divTag = document.querySelector ('.divElem');
	divElem.insertBefore(h3Elem, divElem.children[0]);
		
        	
	var answerElem = ['Вариант ответа № 1','Вариант ответа № 2 ','Вариант ответа № 3 '];

		for (var y = 0; y < 3; y++) {

	var checkElem = document.createElement ('input');
	checkElem.type = 'checkbox';
	checkElem.classList.add('checkElem');
	checkElem.style.display = 'inline-block';

	var labElem = document.createElement('label');
	labElem.classList.add('labElem');
	labElem.style.display = 'block';

	labElem.appendChild(checkElem);
	labElem.appendChild(document.createTextNode(answerElem[y]));

	// var divElem = document.querySelector('.divElem');
	divElem.appendChild(labElem);
		}

	}
	},
	callButton:function(){
	var buttonElem = document.createElement ('input');
	buttonElem.type = 'submit';
	buttonElem.value = 'Проверить мои результаты';
	buttonElem.style.backgroundColor = 'cfe2f3';
	buttonElem.style.width = '330px';
	buttonElem.style.height = '54px';
	buttonElem.style.margin = '60px 235px 30px 235px';
	buttonElem.style.border = '2px solid black';
	var formElem = document.querySelector('.formElem');
	formElem.appendChild(buttonElem);
}

}

progTest.callWrapper();
progTest.callH1();
progTest.callForm();
progTest.callDivH3Labels();
progTest.callButton();


