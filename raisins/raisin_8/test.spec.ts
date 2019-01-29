import { scheduler } from './index';
import { assert } from 'chai';
import * as sinon from 'sinon';

describe('raisin_8', () => {
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
    });

    it('should call a function after 5 ms', () => {
        const cb = sinon.spy();
        scheduler(cb)(5);
        clock.tick(5);
        sinon.assert.calledOnce(cb);
    });
});