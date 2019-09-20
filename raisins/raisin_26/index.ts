const KAPREKARS_CONST: number = 6174;

export const calculateSteps = (num: number): number => {
    let count = 0, s = num;

    do {
        count++;
        s = calculateSub(s);
    } while (s !== KAPREKARS_CONST);

    return count;
};

const calculateSub = (num) => {
    let n1 = num.toString().split('').sort((a, b) => +a - +b).join('');
    let n2 = num.toString().split('').sort((a, b) => +b - +a).join('');
    return n1 > n2 ? +n1 - +n2 : +n2 - +n1;
};