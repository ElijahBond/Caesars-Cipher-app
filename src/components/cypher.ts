export const rot13 = (str: string) => {
    let key = 13;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let res = [];

    for (let i = 0; i < str.length; i++) {
        let indexChar = alphabet.indexOf(str[i])

        if (indexChar + key >= 26) {
        res.push(alphabet[(key - (26 - indexChar))])
    } else if (indexChar < 0) {
        res.push(str[i])
    } else {
        res.push(alphabet[indexChar + key]);
    }
    }
    return res.join('')
}