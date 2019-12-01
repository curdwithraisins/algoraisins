export const countChange = (money: number, coins: number[]): number => {
    if (money == 0) {
        return 1;
    }
    if (money > 0 && coins.length > 0) {
        return countChange(money - coins[0], coins) + countChange(money, coins.slice(1));
    }
    return 0;
};
