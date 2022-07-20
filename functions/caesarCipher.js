// caesarCipher shifts the letters a certain number to the right
// 1 - first take the given string and split it into an array -- DONE
// 2 - start with a single word, no uppercase, punctuation, or spaces -- DONE
// 3 - next get the ascii character codes for each letter -- DONE
// 4 - shift them according to the number given in the 2nd parameter -- DONE
// 5 - test for charCodes that wrap from z to a -- DONE
// 6 - tets for punctuation and spaces (leave them alone) -- DONE


export function caesarCipher(string, numRight) {
    let strArr = string.split('');

    let strCharArr = strArr.map(char => char.charCodeAt(0));

    let shiftedCharArr = strCharArr.map((char) => {
        
        // test for punctuation

        if (char === 58 || char === 59 || char === 63 || char === 44 || char === 46 || char === 33 || char === 32) {
            return char;
        }

        if ((char + numRight) > 122) {
            return (char + numRight) - 26;
        } else if (char < 91 && char + numRight > 90) {
            return (char + numRight) - 26;
        }

        return char + numRight
    });

    let shiftedStrArr = shiftedCharArr.map(char => String.fromCharCode(char));

    let result = shiftedStrArr.join('');

    return result;
}