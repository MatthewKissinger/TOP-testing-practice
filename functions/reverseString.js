export function reverseString(string) {
    let reversedArray = [];
 
    let stringArray = string.split('');

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversedArray.push(stringArray[i]);
    }

    return reversedArray.join('');
}