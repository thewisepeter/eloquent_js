const listToArray = (list) => {
    let array = []; // Initialize an empty array to store the values

    // Start with the head of the list
    let current = list;

    // Loop until we reach the end of the list
    while (current !== null) {
        array.push(current.value); // Add the current node's value to the array
        current = current.rest; // Move to the next node in the list
    }

    return array; // Return the populated array
};

// Example usage:
const myList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

const myArray = listToArray(myList);
console.log(myArray); // Output: [1, 2, 3]
