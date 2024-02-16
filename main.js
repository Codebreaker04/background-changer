const buttons = document.querySelectorAll(".button");
const body = document.querySelector('body');

buttons.forEach( (button) => {
    button.addEventListener('click', (event) => {
        if(event.target.id === 'red'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'green'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === 'purple'){
            body.style.backgroundColor = event.target.id;
        }
    })
});