let digitalClock = () => {

    let date = new Date();

    let Hours = date.getHours();
    let Minutes = date.getMinutes();
    let Seconds = date.getSeconds();

    let amorpm = Hours >= 12 ? 'PM' : 'AM';

    




    document.getElementById("hours").innerHTML = Hours;
    document.getElementById("minutes").innerHTML = Minutes;
    document.getElementById("seconds").innerHTML = Seconds;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(digitalClock, 500);

} 

digitalClock();


