let countChar = (str, char) => {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count += 1
        }
    }
    return count;

}
export default countChar;