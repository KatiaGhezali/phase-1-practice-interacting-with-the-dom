document.addEventListener('DOMContentLoaded' , () => {

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('counter');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
const likedList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const submit = document.getElementById('submit');


let counter = 0;
let isPaused = false;


function paused() {
    plus.disabled = true;
    minus.disabled = true;

    pause.innerHTML = "restart";
}


function plusFunc(){
    counter++;
    count.textContent = counter;
}

function minusFunc(){
    counter--;
    count.textContent = counter;
}



plus.addEventListener('click', () => {
    if(!isPaused) {
        plusFunc();
    }
});


minus.addEventListener('click', () => {
    if(!isPaused) {
        minusFunc();
    }
});

heart.addEventListener('click', () => {
    if(!isPaused) {
        const like = document.createElement('li');
        like.textContent = `${counter} has been liked` ;
        likedList.appendChild(like);

    }
})
pause.addEventListener('click', () => {
    isPaused = !isPaused;
    plus.disabled = isPaused;
    minus.disabled = isPaused;
    heart.disabled = isPaused;
    pause.textContent = isPaused ? 'resume' : 'pause';

});


commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!isPaused) {
        const commentAdded = commentInput.value;
        if (commentAdded) {
            const comment = document.createElement('p');
            comment.textContent = commentAdded;
            document.getElementById('list').appendChild(comment);
            commentInput.value = '';
        }

    }
});

const timer = setInterval(() => {
    if (!isPaused) {
        plusFunc();
    }
}, 1000);


});