const progressbar = document.querySelector(".progressbar")
let progress = 0, intervalTimer;

const enableProgressbar = () => {
    progressbar.setAttribute("role", "progressbar");
    progressbar.setAttribute("aria-valuenow", progress);
    progressbar.setAttribute("aria-live", "polite");
}

enableProgressbar();

// for sim

const testingGround = document.querySelector(".buttons")

const updateProgress = (progress) => {
    progressbar.setAttribute("aria-valuenow", progress)
    progressbar.style.setProperty("--progress", progress + "%")
}

testingGround.addEventListener("click", (e) => {
    if(!e.target.closest("button")) return;

    progress = e.target.dataset.progress;
    updateProgress(progress);
})

const simulateUpdate = () => {
    progressbar.setAttribute("aria-busy", "true");
    let progress = 0;
    updateProgress(progress);

    intervalTimer = setInterval(() => {
        progress+=5;
        updateProgress(progress);
        if(progress === 100){
            progressbar.setAttribute("aria-busy", "false");
            clearInterval(intervalTimer)
        }
    }, 500)
}

const simBtn = document.querySelector('[data-progress="fake-upload"]');
simBtn.addEventListener("click", () => {
    simulateUpdate();
})