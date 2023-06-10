const endDate = new Date("June 30, 2023 11:38:05:00 pm");
document.getElementById("endDate").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock() {
    const end = endDate;
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

clock();
setInterval(clock, 1000);

