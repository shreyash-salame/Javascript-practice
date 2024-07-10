
function Square(side) {
    return {
        side: side,
        Area() {
            return side*side;
        }
    };
}

let square = Square(5);
console.log(square.Area());


