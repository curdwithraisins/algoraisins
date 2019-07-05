export const iPAddressCombinator = (str: string): string[] => {
    if (!str.length)
        return [];
    const res = combineIPAddress(str);
    return res.filter((v: string) => v.split('.').length === 4);
};

const combineIPAddress = (str: string): string[] => {
    switch (str.length) {
        case 1:
            return [str];
        case 2:
            return [str[0] + '.' + str[1], str];
        case 3:
            let values = [
                str[0] + '.' + str[1] + '.' + str[2],
                str[0] + str[1] + '.' + str[2],
                str[0] + '.' + str[1] + str[2]];
            if (+str < 255) {
                values.push(str);
            }
            return values;
        default:
            let res: string[] = [];
            for (let i = 1; i < 4; i++) {
                const sub = str.substr(0, i);
                if (+sub < 255 && (sub[0] !== '0' || sub.length === 1)) {
                    combineIPAddress(str.substr(i)).forEach((v: string) => {
                        // if (v.split('.').length < 4) {
                            res.push(sub + '.' + v);
                        // }
                    });
                }
            }
            return res;
    }
};