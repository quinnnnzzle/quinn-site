function updateClock() {
    const now = new Date();


    const estTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));

    let hours = estTime.getHours();
    const minutes = estTime.getMinutes().toString().padStart(2, '0');
    const seconds = estTime.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? "PM" : "AM";


    hours = hours % 12 || 12;

    document.getElementById("clock").textContent = `it is currently ${hours}:${minutes} ${amPm} for me :)`;
}

setInterval(updateClock, 1000);
updateClock();