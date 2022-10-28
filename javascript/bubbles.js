// Random int
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



// bubble go blub
const wrapper = document.getElementById('bubble_wrapper');
wrapper.setAttribute("background", "white");
for (let index = 0; index < 20; index++) {
    var bubble = document.createElement("div");
    var dot = document.createElement("span");
    dot.classList.add("dot");
    bubble.appendChild(dot);
    bubble.style.top = 90 + getRandomInt(10) + "%";/*get random int betwenn 90 and 100*/
    bubble.style.left = getRandomInt(100) + "%";/*get random int between 0 and 100*/
    bubble.style.animation = "bubble_animation " + 1 + getRandomInt(10) + "s linear infinite";
    bubble.classList.add("bubble");
    //console.log(index);
    wrapper.appendChild(bubble);
    bubble.addEventListener("click", skip_timer);
}