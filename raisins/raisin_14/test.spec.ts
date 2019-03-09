import {
    ordersIdsList,
    IOrdersIdsList
} from './index';
import { expect } from 'chai';

describe('raisin_14', () => {
    describe('define N', () => {
        it('list should have n value equal 1 if defined N less then 1', () => {
            let list: IOrdersIdsList = new ordersIdsList(-4);
            expect(list['n']).to.eql(1);
        });
        it('list should have defined n value if it more then 1', () => {
            let list: IOrdersIdsList = new ordersIdsList(4);
            expect(list['n']).to.eql(4);
        })
    });

    describe('resord', () => {
        it('list should have added value', () => {
            const list: IOrdersIdsList = new ordersIdsList(4);
            list.record('123');
            expect(list['ordersIds'][0]).to.eql('123');
        });
        it('a length of the list shouldn\'t be more then N', () => {
            const list: IOrdersIdsList = new ordersIdsList(2);
            list.record('123');
            list.record('123');
            list.record('123');
            expect(list['ordersIds'].length).to.eql(2);
        });
    });

    describe('get_last', () => {
        let list: IOrdersIdsList;

        beforeEach(() => {
            list = new ordersIdsList(4);
            list.record('1');
            list.record('2');
            list.record('3');
            list.record('4');
        });

        it('should return defined number of values', () => {
            expect(list.get_last(2).length).to.eql(2);
        });
        it('should return last values', () => {
            expect(list.get_last(2)[1]).to.eql('4');
        });
    });
});