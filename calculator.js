
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
          //  screen.value = screWhat is the best method to prevent Bluetooth from being exploited?enValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'DEL'){
            screen.value=screen.value.toString().slice(0,-1);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}