import change from "./modules/convert";

const text = 'RA';
const type = 'char2bin';

let res;

switch(type){
    case 'char2bin':
        res = change.char2bin(text);
        break;
    case 'char2hex':
        res = change.char2hex(text);
        break;
    case 'char2decimal':
        res = change.char2decimal(text);
        break;
    case 'char2octal':
        res = change.char2octal(text);
        break;
    case 'decimal2bin':
        res = change.decimal2bin(text);
        break;
    case 'decimal2char':
        res = change.decimal2char(text);
        break;
    case 'decimal2hex':
        res = change.decimal2hex(text);
        break;
    case 'decimal2octal':
        res = change.decimal2octal(text);
        break;
    case 'hex2bin':
        res = change.hex2bin(text);
        break;
    case 'hex2char':
        res = change.hex2char(text);
        break;
    case 'hex2decimal':
        res = change.hex2decimal(text);
        break;
    case 'hex2octal':
        res = change.hex2octal(text);
        break;
    case 'bin2char':
        res = change.bin2char(text);
        break;
    case 'bin2decimal':
        res = change.bin2decimal(text);
        break;
    case 'bin2hex':
        res = change.bin2hex(text);
        break;
    case 'bin2octal':
        res = change.bin2octal(text);
        break;
    case 'octal2bin':
        res = change.octal2bin(text);
        break;
    case 'octal2char':
        res = change.octal2char(text);
        break;
    case 'octal2decimal':
        res = change.octal2decimal(text);
        break;
    case 'octal2hex':
        res = change.octal2hex(text);
        break;
    default:
}

   