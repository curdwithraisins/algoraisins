import {
    updateHash,
    preprocess,
    autocompleteWithPreprocess,
    autocompleteWithoutPreprocess,
} from './index';
import { expect } from 'chai';

describe('raisin_9', () => {
    const dictionary = ['dog', 'deer', 'deal'];
    const preprocessedDictionary = {
        'd': ['dog', 'deer', 'deal'],
        'do': ['dog'],
        'dog': ['dog'],
        'de': ['deer', 'deal'],
        'dee': ['deer'],
        'deer': ['deer'],
        'dea': ['deal'],
        'deal': ['deal']
    };

    it('should return all strings that have s as a prefix with preprocess', () => {
        const res = autocompleteWithPreprocess('de', dictionary);
        expect(res).to.eql(['deer', 'deal']);
    });

    it('should return all strings that have s as a prefix without preprocess', () => {
        const res = autocompleteWithoutPreprocess('de', dictionary);
        expect(res).to.eql(['deer', 'deal']);
    });

    it('should return a preprocessed dictionary', () => {
        const res = preprocess(dictionary);
        expect(res).to.eql(preprocessedDictionary);
    });

    it('should update preprocessed dictionary', () => {
        const updatedPreprocessedDictionary = {
            'd': ['dog', 'deer', 'deal', 'depth'],
            'do': ['dog'],
            'dog': ['dog'],
            'de': ['deer', 'deal', 'depth'],
            'dee': ['deer'],
            'deer': ['deer'],
            'dea': ['deal'],
            'deal': ['deal'],
            'dep': ['depth'],
            'dept': ['depth'],
            'depth': ['depth']
        };
        const res = updateHash(preprocessedDictionary, 'depth');
        expect(res).to.eql(updatedPreprocessedDictionary);
    });
});