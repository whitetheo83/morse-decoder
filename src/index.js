const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let numArr = expr.match(/.{1,10}/g);
    let x ='';

    for(let i = 0; i < numArr.length; i++) {
        if (numArr[i] == '**********') {
            x = x + ' ';
        } else {
        let charArr = numArr[i].match(/.{1,2}/g);
        let c = '';
            for (j = 0; j <charArr.length; j++) {
                if (charArr[j] == '10') {
                    c = c + '.';
                } else if (charArr[j] == '11') {
                    c = c + '-';
                } else {
                    continue;
                }
            }
            for (let key in MORSE_TABLE) {
                if (key == c) {
                    x = x + MORSE_TABLE[key];
                } 
            }
        }
    }
    return (x);
}

   module.exports = {
    decode
}   
//console.log(decode('0010101010**********00001011110000111111000010111000101110100000111010'));
