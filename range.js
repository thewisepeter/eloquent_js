// function range(start, end, step=1) {
    
//     let arr = []
//     arr.push(start)
    
//     for(i = start; i <= end; i += step) {
//         arr.push(i + step)
//     }
//     return arr
// }

// console.log(range(5, 2, -1))

function range(start, end, step = 1) {
    let arr = [];

    // Positive step: loop while start <= end
    // Negative step: loop while start >= end
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    
    return arr;
}

console.log(range(5, 2, -1)); // [5, 4, 3, 2]
console.log(range(1, 5));     // [1, 2, 3, 4, 5]
console.log(range(1, 10, 2))