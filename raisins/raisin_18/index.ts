interface TimeIntervals {
    start: number;
    end: number;
}

export const roomNumber = (intervals: TimeIntervals[]): number => {
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

// export const roomNumber = (intervals: TimeIntervals[]): number => {
//     const sortedIntervals: TimeIntervals[] = intervals.sort((interval1, interval2) => interval1.start - interval2.start);
//     console.log(sortedIntervals);
//     let rooms = 0;
//     for (let i = 0; i < sortedIntervals.length - 1; i++) {
//         console.log(sortedIntervals[i].end, sortedIntervals[i+1].start);
//         if (sortedIntervals[i].end > sortedIntervals[i+1].start) {
//             rooms++;
//         }
//     }
//     return rooms;
// };