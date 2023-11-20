import { findCelebrity, Person } from './index';
import { expect } from 'chai';

describe('raisin_29', () => {
    const Steve: Person = {
        name: 'Steve',
        knows: ['Brian', 'Peter', 'Terry', 'Tony']
    };
    const Terry: Person = {
        name: 'Terry',
        knows: ['Peter', 'Tony']
    };
    const Jack: Person = {
        name: 'Jack',
        knows: ['Tony', 'Peter']
    };
    const Tony: Person = {
        name: 'Tony',
        knows: ['Peter']
    };
    const Peter: Person = {
        name: 'Peter',
        knows: []
    };
    let Joeh: Person = {
        name: 'Joeh',
        knows: ['Tony', 'Evan', 'Peter']
    };
    const Evan: Person = {
        name: 'Evan',
        knows: ['Tony', 'Peter', 'Brian']
    };
    const Brian: Person = {
        name: 'Brian',
        knows: ['Tony', 'Evan', 'Peter']
    };

    it("should return a celebrity", () => {
        const res = findCelebrity([Steve, Brian, Evan, Peter, Tony, Joeh, Jack, Terry]);
        expect(res).to.eql(Peter);
    });

    it("should return null if no celebrity", () => {
        Peter.knows.push('Tony');
        const res = findCelebrity([Steve, Brian, Evan, Peter, Tony, Joeh, Jack, Terry]);
        expect(res).to.eql(null);
    });
});