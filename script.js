// JavaScript source code
const number = prompt('몇 명이 참가하나요?');
alert(number);
const yesOrNo = confirm('시작할까요?');

let word;
let newWord;
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

function onClickButton(e) {
    if (!word) {     // (첫번째 참가자다 == 제시어가 없다)
        word = newWord;   
        personOrder();

    }
    else {          // (첫번째 참가자가 아니다)
        if (word[word.length - 1] === newWord[0]) {
            word = newWord; 
            personOrder();
            
        }
        else {
            alert('틀렸습니다');
        }
    }
    $input.value = '';
    $word.innerText = word;   // textContent
}





function personOrder() {
    const order = Number($order.textContent);
    if ((order + 1) > number) {
        $order.textContent = 1;     // string 형식으로 입력됨
    }

    else {
        $order.textContent = order + 1 ;
    }
}



function onInput(e) {
    newWord = e.target.value;
}

$button.addEventListener('click', onClickButton);
$input.addEventListener('input', onInput);
