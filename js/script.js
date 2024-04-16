let progress = document.querySelector(".progress");
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let circles = document.querySelectorAll(".circle");

let currActive = 1;

nextBtn.addEventListener("click", () =>{
    currActive++;
    if (currActive > circles.length){
        currActive = circles.length;
    }
    update();
});

prevBtn.addEventListener("click", () =>{
    currActive--;
    if (currActive < 1 ){
        currActive = 1;
    }

    update();
});

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currActive){
            circle.classList.add("active");
        } else{
            circle.classList.remove("active");
        }
    });

    let actives = document.querySelectorAll(".active");
    let percentage = `${(actives.length-1)/(circles.length-1)*100}%`;
    progress.style.width = percentage;

    if(currActive === 1){
        prevBtn.disabled = true;
    } else if (currActive === circles.length){
        nextBtn.disabled = true;
    } else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
