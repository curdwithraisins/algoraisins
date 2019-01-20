import Node from '../../data-structures/Node';
import { serialize, deserialize} from './index';
import { expect } from 'chai';

describe('raisin_3', () => {
    let nodes: Node;

    beforeEach(() => {
        nodes = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    });

    it('should serialize Node tree in a string', () => {
        const res = serialize(nodes);
        expect(res).to.eql('val1:root;left1:val2:left;left2:val3:left.left;right1:val2:right;');
    });

    it('should deserialize string to a Node tree', () => {
        const string = 'val1:root;left1:val2:left;left2:val3:left.left;right1:val2:right;';
        const res = deserialize(string);
        expect(res).to.eql(nodes);
    });
});