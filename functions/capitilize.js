export function capitilize(string) {
    let firstLetter = string.slice(0, 1);
    let restOfString = string.slice(1, string.length);

    return `${firstLetter.toUpperCase()}${restOfString}`;
}

