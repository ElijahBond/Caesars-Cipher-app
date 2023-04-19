export const cypher = (str: string, key: number) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase();
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