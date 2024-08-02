
 
const decimal2hex = (text) => {
    let q = Number(text);
    const remainder = [];
    while (q) {
        r = q % 16;
        if (r > 9) {
            r = String.fromCharCode(55 + r);
        }
        remainder.push(r);
        q = Math.floor(q/16);
    }
    return remainder.reverse().join('');
}

const decimal2bin = (text) => {
    let q = Number(text);
    const remainder = [];
    while (q) {
        r = q % 2;
        remainder.push(r);
        q = Math.floor(q/2);
    }
    return remainder.reverse().join('');
}

const decimal2octal = (text) => {
    let q = Number(text);
    const remainder = [];
    while (q) {
        r = q % 8;
        remainder.push(r);
        q = Math.floor(q/8);
    }
    return remainder.reverse().join('');
}

const decimal2char = (text) => String.fromCharCode(Number(text));


const char2decimal = (text) => text.charCodeAt(0);

const bin2decimal = (text) => {
    let res = 0
    const last = text.length -1;
    for (let i = last; i >= 0; i--) {
        res += (Number(text[i])*(Math.pow(2,last-i)));
    }
    return res;
}

const hex2decimal = (text) => {
    let res = 0
    const last = text.length -1;
    for (let i = last; i >= 0; i--) {
        const code = text.charCodeAt(i);
        value = Number(text[i]);
        if(code >= 65 && code <= 90) {
            value = code - 55;
        }
        res += (value)*(Math.pow(16,last-i));
    }
    return res;
}

const octal2decimal = (text) => {
    let res = 0
    const last = text.length -1;
    for (let i = last; i >= 0; i--) {
        value = Number(text[i]);
        res += (value)*(Math.pow(8,last-i));
    }
    return res;
}

const bin2hex = (text) => {
    const value = text.split('');
    let len = value.length;
    if (len%4 !== 0) {
        for (let i=0; i< 4-(len%4); i++) {
            value.unshift('0');
        }
    }
    let res = '';
    for (let i=0; i<= value.length-4; i+= 4) {
        let count = 0;
        for (let j = 0; j< 4; j++) {
            count += value[j+i] * Math.pow(2,3-j)
        }
        if (count > 9) {
            count = String.fromCharCode(55 + count);
        }
        res += count;
    }
    return res;
}

const bin2octal = (text) => {
    const value = text.split('');
    let len = value.length;
    if (len%3 !== 0) {
        for (let i=0; i< 3-(len%3); i++) {
            value.unshift('0');
        }
    }
    let res = '';
    for (let i=0; i<= value.length-3; i+= 3) {
        let count = 0;
        for (let j = 0; j< 3; j++) {
            count += value[j+i] * Math.pow(2,2-j)
        }
        res += count;
    }
    return res;
}

const hex2bin = (text) => {
    let res = '';

    text.split('').forEach((char) => {
        let value = Number(char);
        code = char.charCodeAt(0);
        if (code >=65 && code <= 90) {
            value = code - 55;
        }
        const obj = {
            8 : '1000',
            4 : '0100',
            2 : '0010',
            1 : '0001',   
        };

        const temp = ['0000','0000','0000','0000'];
        let i = 0;
        const keys = Object.keys(obj).reverse();
        for (const key of keys) {
            if (!value) {
                break;
            }
            if (value >= key) {
                temp[i] = obj[key];
                value -= key;
                i++;
            }
        }

        for (let i = 0; i<4; i++) {
            res += Number(temp[0][i]) || Number(temp[1][i]) || Number(temp[2][i]) || Number(temp[3][i]);
        }
    })
    return res;
}

const octal2bin = (text) => {
    let res = '';

    text.split('').forEach((char) => {
        let value = Number(char);
        code = char.charCodeAt(0);
        if (code >=65 && code <= 90) {
            value = code - 55;
        }
        const obj = {
            4 : '100',
            2 : '010',
            1 : '001',   
        };

        const temp = ['000','000','000'];
        let i = 0;
        const keys = Object.keys(obj).reverse();
        for (const key of keys) {
            if (!value) {
                break;
            }
            if (value >= key) {
                temp[i] = obj[key];
                value -= key;
                i++;
            }
        }
        for (let i = 0; i<3; i++) {
            res += Number(temp[0][i]) || Number(temp[1][i]) || Number(temp[2][i]);
        }
    })
    return res;
}

const octal2hex = (text) => bin2hex(octal2bin(text));

const hex2octal = (text) => bin2octal(hex2bin(text));

const hex2char = (text) => decimal2char(hex2decimal(text));

const octal2char = (text) => decimal2char(octal2decimal(text));

const bin2char = (text) => decimal2char(bin2decimal(text));

const char2hex = (text) => decimal2hex(char2decimal(text));

const char2octal = (text) => decimal2octal(char2decimal(text));

const char2bin = (text) => decimal2bin(char2decimal(text));

const change = {
    char2bin,
    char2hex,
    char2decimal,
    char2octal,
    decimal2bin,
    decimal2char,
    decimal2hex,
    decimal2octal,
    hex2bin,
    hex2char,
    hex2decimal,
    hex2octal,
    bin2char,
    bin2decimal,
    bin2hex,
    bin2octal,
    octal2bin,
    octal2char,
    octal2decimal,
    octal2hex
}

export default change;