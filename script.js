// JavaScript source code
const number = prompt('�� ���� �����ϳ���?');
alert(number);
const yesOrNo = confirm('�����ұ��?');

let word;
let newWord;
const $button = document.querySelector('button');
const $input = document.querySelector('input');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');

function onClickButton(e) {
    if (!word) {     // (ù��° �����ڴ� == ���þ ����)
        word = newWord;   
        personOrder();

    }
    else {          // (ù��° �����ڰ� �ƴϴ�)
        if (word[word.length - 1] === newWord[0]) {
            word = newWord; 
            personOrder();
            
        }
        else {
            alert('Ʋ�Ƚ��ϴ�');
        }
    }
    $input.value = '';
    $word.innerText = word;   // textContent
}





function personOrder() {
    const order = Number($order.textContent);
    if ((order + 1) > number) {
        $order.textContent = 1;     // string �������� �Էµ�
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
