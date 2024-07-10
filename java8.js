var sp = 15;
var cp = 10;
var profit = sp - cp;
if (profit > 0) {
  console.log("profit is", sp - cp);
} else if (profit < 0) {
  console.log("loss is", cp - sp);
} else {
  console.log("no profit or loss");
}
