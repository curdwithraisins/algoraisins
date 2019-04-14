interface TimeIntervals {
    start: number;
    end: number;
}

export const roomNumber1 = (intervals: TimeIntervals[]): number => {
    const arr: number[] = [];
    let max = 0;
    intervals.forEach((interval: TimeIntervals) => {
        for (let i = interval.start; i <= interval.end; i++) {
            arr[i] = arr[i] ? arr[i]+1 : 1;
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    });
    return max;
};

export const roomNumber2 = (intervals: TimeIntervals[]): number => {
    const sortedIntervals: TimeIntervals[] = intervals.sort((interval1, interval2) => interval1.start - interval2.start);
    let rooms = 1;
    for (let i = 1; i < sortedIntervals.length; i++) {
        let j = i - 1;
        for (j; j >= 0; j--) {
            if (sortedIntervals[j].end < sortedIntervals[i].start) {
                break;
            }
        }
        if (j < 0) {
            rooms++;
        }
    }
    return rooms;
};