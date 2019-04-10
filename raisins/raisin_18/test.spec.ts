import { roomNumber } from './index';
import { expect } from 'chai';

describe('raisin_18', () => {
    it('should return a number of rooms', () => {
        const intervals = [
            {start: 30, end: 75},
            {start: 0, end: 50},
            {start: 80, end: 90},
            {start: 60, end: 150}
        ];
        const rooms = roomNumber(intervals);
        expect(rooms).to.eql(2);
    });
});