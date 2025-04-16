//1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1;
let Day = date.getDate();
let Hours = date.getHours();
let Minutes = date.getMinutes();
let time = Year + "-" + Month + "-" + Day + " " + (Hours < 10 ? "0" + Hours : Hours) + ":" + (Minutes < 10 ? "0" + Minutes : Minutes);
console.log(time);

//YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let time1 = Year + "-" + Month + "-" + Day + " " + (Hours < 10 ? "0" + Hours : Hours) + ":" + (Minutes < 10 ? "0" + Minutes : Minutes);
console.log(time1);