//program to display greetings  message according to time
// var currenttime=19;
// if (currenttime<=12) {
//     console.log("Goodmorning")
// }
//  else if (currenttime<=16) {
//     console.log("Good afternoon")
// }
// else if (currenttime<=18) {
//     console.log("Good evening")
// }
// else if (currenttime>=18) {
//     console.log("Good night")
// }
/////////////////////////////////////////////////
function greetTime(currentTime) {
    if (currentTime <= 12) {
        console.log("Good morning");
    } else if (currentTime <= 16) {
        console.log("Good afternoon");
    } else if (currentTime <= 18) {
        console.log("Good evening");
    } else if (currentTime >= 18) {
        console.log("Good night");
    }
}
var currentTime = 19;
greetTime(currentTime);