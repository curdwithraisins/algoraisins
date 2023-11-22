export const convertRomanNumber = (number: string): number => {
    let romanMap = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ]);

    let arr = number.split(""), sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += romanMap.get(arr[i]) < romanMap.get(arr[i+1]) ? -romanMap.get(arr[i]) : romanMap.get(arr[i]);
    }
    return sum;
};