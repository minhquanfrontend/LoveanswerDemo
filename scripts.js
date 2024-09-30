function moveRandomEl(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector('#move-random');

moveRandom.addEventListener("mousemove", function(e){
    moveRandomEl(e.target);
});

// script.js
window.onload = function() {
    const textElement = document.getElementById('moving-text');
    
    // Adjust speed if needed
    textElement.style.animationDuration = '15s'; // Adjust the speed (increase for slower, decrease for faster)
};
