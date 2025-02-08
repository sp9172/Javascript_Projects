function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = now.getHours() >= 12 ? "PM" : "AM"; 
    let day = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

     hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    day = day < 10 ?"0" + day : day;
    month = month < 10 ? "0" + month : month;

    document.getElementById("demo").textContent = `${hours}:${minutes}:${seconds}   ${amPm}`;
    document.getElementById("day").textContent =  `${day}/${month}/${year}`
}

setInterval(updateClock, 1000);
updateClock();