import { get } from 'lodash';

export const decrypt = (str: String): any => {
    const arr = str.match(/.{1,2}(?=(.{2})+(?!.))|.{1,2}$/g);
    let max = 0, code: number = 0;
    for (let i = 0; i < 256; i++) {
        const score = frequenciesCount(decryptChars(arr, i));
        if (score > max) {
            max = score;
            code = i;
        }
    }
    return { res: decryptChars(arr, code), code };
};

const decryptChars = (arr: string[], code: number): string =>
    arr.map(x => Number('0x' + x) ^ code).map(x => String.fromCodePoint(x)).join('');

const frequenciesCount = (str: string): number => {
    const character_frequencies = {
        'a': .08167, 'b': .01492, 'c': .02782, 'd': .04253,
        'e': .12702, 'f': .02228, 'g': .02015, 'h': .06094,
        'i': .06094, 'j': .00153, 'k': .00772, 'l': .04025,
        'm': .02406, 'n': .06749, 'o': .07507, 'p': .01929,
        'q': .00095, 'r': .05987, 's': .06327, 't': .09056,
        'u': .02758, 'v': .00978, 'w': .02360, 'x': .00150,
        'y': .01974, 'z': .00074, ' ': .13000
    };
    return str.split('').reduce((acc, x) => acc + get(character_frequencies, x, 0), 0);
};