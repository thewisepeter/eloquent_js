function add_stuff(num){
    let total = 0;
    for (let n of num) {
        total += n;
    }
    return total;
}

console.log(add_stuff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));