let counter = 0;

const aud = document.querySelector('.aud');
const value = document.querySelector('.counter__value');
const buttons = document.querySelectorAll('.btn');



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains('button__decrease')) {
            counter--;
        }
        else
            if (styles.contains('button__reset')) {
                counter = 0;
            }
            else
                if (styles.contains('button__increase')) {
                    counter++;
                }
        value.textContent = counter;
        if (counter == 3) {
            aud.play();
        }
        else {
            aud.pause();
            aud.load();
        }
    })
})