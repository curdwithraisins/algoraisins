export interface Person {
    name: string;
    knows: string[];
}

const knows = (a: Person, b: Person): boolean => {
    return a.knows.includes(b.name);
};

export const findSelebrity = (party: Person[]): Person => {
    let selebrity: Person = party[party.length - 1];
    for (let i = party.length - 1; i >= 0; i--) {
        const somePerson = party[i];
        if (!knows(somePerson, selebrity)) {
            selebrity = somePerson;
        }
    }

    return selebrity.knows.length ? null : selebrity;
};