function moveBox() {
    let box = document.getElementById("box");
    let position = 0;

    let interval = setInterval(frame, 10);

    function frame() {
        if (position >= 200) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }
}