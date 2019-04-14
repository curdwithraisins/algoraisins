import { roomNumber1, roomNumber2 } from './index';
import { expect } from 'chai';

describe('raisin_18', () => {
    it('should return a number of rooms', () => {
        const intervals = [
            {start: 30, end: 75},
            {start: 0, end: 50},
            {start: 80, end: 90},
            {start: 60, end: 150}
        ];
        const rooms = roomNumber1(intervals);
        expect(rooms).to.eql(2);
    });

    it('should return a number of rooms', () => {
        const intervals = [
            {start: 30, end: 75},
            {start: 0, end: 50},
            {start: 80, end: 90},
            {start: 60, end: 150}
        ];
        const rooms = roomNumber2(intervals);
        expect(rooms).to.eql(2);
    });

    it('result of roomNumber1 should be equal roomNumber2', () => {
        const intervals = [
            {start: 10, end: 25},
            {start: 0, end: 35},
            {start: 15, end: 90},
            {start: 85, end: 150}
        ];
        const rooms1 = roomNumber1(intervals);
        const rooms2 = roomNumber2(intervals);
        expect(rooms1).to.eql(rooms2);
    });
});