const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const resetBtn = document.querySelector('#reset');
const countSpan = document.querySelector('#count');

const updateCount = count => {
    countSpan.textContent = count;
};

let count = 0;
updateCount(count);

upBtn.addEventListener('click', e => {
    count++;
    updateCount(count);
});

downBtn.addEventListener('click', e => {
    count--;
    updateCount(count);
});

resetBtn.addEventListener('click', e => {
    count = 0;
    updateCount(count);
});


const textInput = document.querySelector('#text');
const alertBtn = document.querySelector('#alert');

alertBtn.addEventListener('click', e => {
   alert(textInput.value) 
});