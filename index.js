// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left= "0px"

function moveDodgerLeft() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowLeft") {
            const leftNumbers = dodger.style.left.replace("px", "");
            const left = parseInt(leftNumbers, 10);
            if (left > 0) {
                dodger.style.left = `${left - 10}px`;}
        };
    });    
};

function moveDodgerRight() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            const leftNumbers = dodger.style.left.replace("px", "");
            const left = parseInt(leftNumbers, 10);
            if (left < 360) {
                dodger.style.left = `${left + 10}px`;};
        };
    });
}

moveDodgerLeft();
moveDodgerRight();