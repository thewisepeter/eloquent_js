const arrayToList = (arr) => {
    // Check if the input array is empty
    if (arr.length === 0) {
        return null; // Return null for an empty list
    }

    // Create the head of the list using the first element of the array
    let list = {
        value: arr[0], // Set the value to the first element
        rest: arrayToList(arr.slice(1)) // Recursively create the rest of the list
    };

    return list; // Return the constructed list
};

// Example usage:
const myArray = [1, 2, 3];
const myList = arrayToList(myArray);
console.log(JSON.stringify(myList, null, 2)); // For better visualization
